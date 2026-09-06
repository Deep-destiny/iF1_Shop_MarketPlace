import React, { useRef } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../types/marketplace';
import { colors, radii, shadows, spacing, typography } from '../theme/tokens';
import { formatEmiLabel, formatPaiseToRupees } from '../utils/format';
import { Badge } from './Badge';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
}

export function ProductCard({ product, onPress }: ProductCardProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const longestTenure = product.emiPlans?.reduce(
    (max, plan) => Math.max(max, plan.tenureMonths),
    0
  ) || 0;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1.0,
      useNativeDriver: true,
    }).start();
  };

  const tag = product.tags?.[0];

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => onPress(product)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={`${product.name}, ${formatPaiseToRupees(product.basePriceInPaise)}`}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.imageUrl }} style={styles.image} resizeMode="cover" />
          {tag && (
            <View style={styles.badgeContainer}>
              <Badge variant={tag as any} />
            </View>
          )}
        </View>
        
        <Text style={styles.brand} numberOfLines={1}>
          {product.brand}
        </Text>
        
        {product.rating && (
          <Text style={styles.rating}>⭐ {product.rating}</Text>
        )}
        
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        
        <Text style={styles.price}>{formatPaiseToRupees(product.basePriceInPaise)}</Text>
        
        {longestTenure > 0 && (
          <View style={styles.emiBadge}>
            <Text style={styles.emiBadgeText}>
              No-cost EMI upto {formatEmiLabel(longestTenure)}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    padding: spacing.sm,
    ...shadows.card,
    marginBottom: spacing.md,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1.15,
    minHeight: 120,
    borderRadius: radii.sm,
    marginBottom: spacing.sm,
    backgroundColor: colors.background,
  },
  badgeContainer: {
    position: 'absolute',
    top: spacing.xs,
    right: spacing.xs,
  },
  brand: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  rating: {
    ...typography.caption,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  name: {
    ...typography.bodySecondary,
    color: colors.textPrimary,
    fontWeight: '500',
    marginBottom: spacing.xs,
    height: 36, // Approximate for 2 lines
  },
  price: {
    ...typography.rowTitle,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  emiBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.sm,
    alignSelf: 'flex-start',
  },
  emiBadgeText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '600',
  },
});
