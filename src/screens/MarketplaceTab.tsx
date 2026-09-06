import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, useWindowDimensions, View, RefreshControl } from 'react-native';
import { useMarketplaceProducts } from '../data/useMarketplaceProducts';
import { Product } from '../types/marketplace';
import { SearchBar } from '../components/SearchBar';
import { ProductCard } from '../components/ProductCard';
import { ProductGridSkeleton } from '../components/ProductCardSkeleton';
import { EmptyState } from '../components/EmptyState';
import { CategoryFilter } from '../components/CategoryFilter';
import { FeaturedCarousel } from '../components/FeaturedCarousel';
import { SectionLabel } from '../components/SectionLabel';
import { colors, spacing } from '../theme/tokens';

interface MarketplaceTabProps {
  onSelectProduct: (product: Product) => void;
  onScroll?: (event: any) => void;
}

const CATEGORIES = [
  { key: 'electronics', label: 'Electronics', icon: 'laptop-outline' },
  { key: 'travel', label: 'Travel', icon: 'airplane-outline' },
  { key: 'auto', label: 'Auto', icon: 'bicycle-outline' },
  { key: 'home', label: 'Home', icon: 'home-outline' },
  { key: 'fashion', label: 'Fashion', icon: 'shirt-outline' },
];

export function MarketplaceTab({ onSelectProduct, onScroll }: MarketplaceTabProps) {
  const { width: screenWidth } = useWindowDimensions();
  const { state, retry } = useMarketplaceProducts();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const columnCount = screenWidth >= 1200 ? 4 : screenWidth >= 760 ? 3 : 2;

  const handleRefresh = async () => {
    setRefreshing(true);
    await retry();
    setRefreshing(false);
  };

  const filteredProducts = useMemo(() => {
    if (state.status !== 'success') return [];
    
    let result = state.data;
    
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category?.toLowerCase() === activeCategory.toLowerCase());
    }
    
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }
    
    return result;
  }, [state, query, activeCategory]);

  const featuredProducts = useMemo(() => {
    if (state.status !== 'success') return [];
    return state.data.filter((p) => p.tags?.includes('featured') || p.tags?.includes('deal'));
  }, [state]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {featuredProducts.length > 0 && activeCategory === 'all' && !query && (
        <FeaturedCarousel products={featuredProducts} onSelectProduct={onSelectProduct} />
      )}
      <View style={styles.sectionTitleContainer}>
        <SectionLabel>ALL PRODUCTS</SectionLabel>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search products..."
        />
        <CategoryFilter
          categories={CATEGORIES}
          selectedKey={activeCategory}
          onSelect={setActiveCategory}
        />
      </View>

      <View style={styles.content}>
        {state.status === 'loading' && !refreshing && (
          <View style={styles.gridPadding}>
            <ProductGridSkeleton />
          </View>
        )}

        {state.status === 'error' && (
          <EmptyState
            icon="⚠️"
            eyebrow="SOMETHING WENT WRONG"
            message={state.message}
            actionLabel="Try again"
            onAction={retry}
          />
        )}

        {state.status === 'success' && filteredProducts.length === 0 && (
          <EmptyState
            icon="🔍"
            eyebrow="NO RESULTS"
            message={`No products match your criteria`}
          />
        )}

        {state.status === 'success' && filteredProducts.length > 0 && (
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            numColumns={columnCount}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={renderHeader}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={onSelectProduct} />
            )}
            onScroll={onScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={colors.primary} />
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
  },
  content: {
    flex: 1,
    marginTop: spacing.md,
  },
  listContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  gridPadding: {
    paddingTop: spacing.xs,
    paddingHorizontal: spacing.xl,
  },
  row: {
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginBottom: spacing.lg,
  },
  sectionTitleContainer: {
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
});
