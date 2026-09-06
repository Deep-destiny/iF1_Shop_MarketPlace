import React, { useEffect, useState, useMemo } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useProductDetail } from '../data/useProductDetail';
import { fetchProductsByCategory } from '../data/marketplaceApi';
import { VariantSelector } from '../components/VariantSelector';
import { EmiPlanCard } from '../components/EmiPlanCard';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionLabel } from '../components/SectionLabel';
import { EmptyState } from '../components/EmptyState';
import { SpecsTable } from '../components/SpecsTable';
import { SimilarProducts } from '../components/SimilarProducts';
import { colors, radii, spacing, typography } from '../theme/tokens';
import { formatPaiseToRupees } from '../utils/format';
import { Product } from '../types/marketplace';

const { width } = Dimensions.get('window');

interface ProductDetailScreenProps {
  productId?: string;
  onBack?: () => void;
  onProceed?: (selection: {
    productId: string;
    variantId: string;
    emiPlanId: string;
  }) => void;
  route?: any;
  navigation?: any;
}

export function ProductDetailScreen({
  productId: directProductId,
  onBack,
  onProceed,
  route,
  navigation,
}: ProductDetailScreenProps) {
  // Support both direct props and React Navigation route params
  const productId = directProductId ?? route?.params?.productId ?? '';
  const handleBack = onBack ?? (() => navigation?.goBack());
  const handleProceed = onProceed ?? ((selection: any) => {
    Alert.alert(
      'Order Confirmed 🎉',
      `Your no-cost EMI plan is active. Processing your order with 0% interest backed by your mutual funds.`,
      [{ text: 'Done', onPress: handleBack }]
    );
  });

  const { state, retry } = useProductDetail(productId);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [selectedEmiPlanId, setSelectedEmiPlanId] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (state.status !== 'success') return;
    const firstInStock = state.data.variants.find((v) => v.inStock);
    setSelectedVariantId((current) => current ?? firstInStock?.id ?? null);
    setSelectedEmiPlanId((current) => current ?? state.data.emiPlans[0]?.id ?? null);
    
    if (state.data.category) {
      fetchProductsByCategory(state.data.category).then(products => {
        setSimilarProducts(products.filter(p => p.id !== state.data.id));
      });
    }
  }, [state]);

  if (state.status === 'loading' || state.status === 'idle') {
    return (
      <View style={styles.container}>
        <Header onBack={handleBack} title="" />
        <View style={styles.loadingBody}>
          <EmptyState icon="⏳" eyebrow="LOADING" message="Fetching product details..." />
        </View>
      </View>
    );
  }

  if (state.status === 'error') {
    return (
      <View style={styles.container}>
        <Header onBack={handleBack} title="" />
        <EmptyState
          icon="⚠️"
          eyebrow="SOMETHING WENT WRONG"
          message={state.message}
          actionLabel="Try again"
          onAction={retry}
        />
      </View>
    );
  }

  const product = state.data;
  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
  const selectedEmiPlan =
    product.emiPlans.find((p) => p.id === selectedEmiPlanId) ?? product.emiPlans[0];
  const canProceed = Boolean(selectedVariant?.inStock && selectedEmiPlan);

  const images = product.images?.length ? product.images : [product.imageUrl];

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (width - spacing.xl * 2));
    setActiveImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <Header onBack={handleBack} title={product.brand} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.galleryContainer}>
          <FlatList
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.heroImage} resizeMode="contain" />
            )}
          />
          {images.length > 1 && (
            <View style={styles.paginationDots}>
              {images.map((_, i) => (
                <View key={i} style={[styles.dot, i === activeImageIndex && styles.dotActive]} />
              ))}
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.name}>{product.name}</Text>
          {product.rating !== undefined && (
            <Text style={styles.rating}>
              ⭐ {product.rating.toFixed(1)}
              {product.reviewCount ? `  ·  ${product.reviewCount.toLocaleString('en-IN')} reviews` : ''}
            </Text>
          )}
          <Text style={styles.description}>{product.shortDescription}</Text>
          <Text style={styles.price}>
            {formatPaiseToRupees(selectedVariant?.priceInPaise ?? product.basePriceInPaise)}
          </Text>
        </View>

        {product.variants.length > 1 && (
          <View style={styles.section}>
            <SectionLabel>Choose variant</SectionLabel>
            <VariantSelector
              variants={product.variants}
              selectedVariantId={selectedVariant?.id ?? ''}
              onSelect={setSelectedVariantId}
            />
          </View>
        )}

        <View style={styles.section}>
          <SectionLabel>Choose EMI plan</SectionLabel>
          {product.emiPlans.map((plan, index) => (
            <EmiPlanCard
              key={plan.id}
              plan={plan}
              isSelected={plan.id === selectedEmiPlan?.id}
              isRecommended={index === 0}
              onSelect={setSelectedEmiPlanId}
            />
          ))}
        </View>

        {product.specs && Object.keys(product.specs).length > 0 && (
          <View style={styles.section}>
            <SpecsTable specs={product.specs} />
          </View>
        )}

        {selectedVariant && !selectedVariant.inStock && (
          <Text style={styles.outOfStockWarning}>
            This variant is currently out of stock. Choose another to continue.
          </Text>
        )}

        {similarProducts.length > 0 && (
          <SimilarProducts
            products={similarProducts}
            onSelectProduct={(p) => {
              if (navigation?.push) {
                navigation.push('ProductDetail', { productId: p.id });
              } else if (navigation?.navigate) {
                navigation.navigate('ProductDetail', { productId: p.id });
              }
            }}
          />
        )}
      </ScrollView>

      <View style={styles.ctaBar}>
        <PrimaryButton
          label={
            selectedEmiPlan
              ? `Proceed with ${selectedEmiPlan.tenureMonths}-month plan`
              : 'Select a plan to continue'
          }
          disabled={!canProceed}
          onPress={() =>
            selectedVariant &&
            selectedEmiPlan &&
            handleProceed({
              productId: product.id,
              variantId: selectedVariant.id,
              emiPlanId: selectedEmiPlan.id,
            })
          }
        />
      </View>
    </View>
  );
}

function Header({ onBack, title }: { onBack: () => void; title: string }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack} accessibilityRole="button" accessibilityLabel="Go back" style={styles.headerIconBtn}>
        <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerIconBtn}>
          <Ionicons name="share-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconBtn}>
          <Ionicons name="heart-outline" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.md,
  },
  headerIconBtn: {
    padding: spacing.sm,
  },
  headerTitle: {
    ...typography.rowTitle,
    flex: 1,
    textAlign: 'center',
  },
  headerActions: {
    flexDirection: 'row',
  },
  loadingBody: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  galleryContainer: {
    marginBottom: spacing.xl,
  },
  heroImage: {
    width: width - spacing.xl * 2,
    aspectRatio: 1,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 12,
  },
  section: {
    marginBottom: spacing.xxl,
  },
  name: {
    ...typography.h1,
    fontSize: 22,
    marginBottom: spacing.xs,
  },
  rating: {
    ...typography.rowSubtitle,
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodySecondary,
    marginBottom: spacing.md,
  },
  price: {
    ...typography.h1,
    fontSize: 24,
  },
  outOfStockWarning: {
    ...typography.bodySecondary,
    color: colors.error,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  similarSection: {
    marginTop: spacing.xl,
    marginBottom: spacing.xxxl,
  },
  similarScroll: {
    paddingTop: spacing.sm,
  },
  similarProductWrapper: {
    width: 160,
    marginRight: spacing.md,
  },
  ctaBar: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
});
