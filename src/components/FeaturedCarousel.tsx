import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Product } from '../types/marketplace';
import { colors, radii, spacing, typography } from '../theme/tokens';
import { formatPaiseToRupees } from '../utils/format';
import { Badge } from './Badge';

interface FeaturedCarouselProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function FeaturedCarousel({ products, onSelectProduct }: FeaturedCarouselProps) {
  const { width: screenWidth } = useWindowDimensions();
  const cardWidth = Math.min(Math.max(screenWidth - spacing.xl * 2, 280), 520);
  const cardHeight = Math.min(Math.max(cardWidth * 0.58, 210), 300);
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % products.length;
        flatListRef.current?.scrollToOffset({
          offset: nextIndex * (cardWidth + spacing.md),
          animated: true,
        });
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length, cardWidth]);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / (cardWidth + spacing.md));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const renderItem = ({ item }: { item: Product }) => {
    const isDeal = item.tags?.includes('deal');
    const isFeatured = item.tags?.includes('featured');
    let badgeVariant = undefined;
    if (isDeal) badgeVariant = 'deal';
    else if (isFeatured) badgeVariant = 'featured';

    return (
      <TouchableOpacity
        style={[styles.cardContainer, { width: cardWidth, height: cardHeight }]}
        activeOpacity={0.9}
        onPress={() => onSelectProduct(item)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <View style={styles.contentContainer}>
          {badgeVariant && (
            <View style={styles.badgeContainer}>
              <Badge variant={badgeVariant as any} />
            </View>
          )}
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
          <Text style={styles.price}>{formatPaiseToRupees(item.basePriceInPaise)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        onScrollEndDrag={handleScroll}
        snapToInterval={cardWidth + spacing.md}
        getItemLayout={(_, index) => ({
          length: cardWidth + spacing.md,
          offset: (cardWidth + spacing.md) * index,
          index,
        })}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.pagination}>
        {products.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
    marginHorizontal: -spacing.xl,
  },
  listContent: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  cardContainer: {
    borderRadius: radii.lg,
    overflow: 'hidden',
    backgroundColor: colors.surface,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    marginBottom: spacing.xs,
  },
  brand: {
    ...typography.caption,
    color: colors.textMuted,
    textTransform: 'uppercase',
  },
  name: {
    ...typography.rowTitle,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  price: {
    ...typography.rowTitle,
    color: colors.accentGold,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radii.pill,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 12,
  },
  dotInactive: {
    backgroundColor: colors.border,
  },
});
