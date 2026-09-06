import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../types/marketplace';
import { colors, radii, shadows, spacing, typography } from '../theme/tokens';
import { formatPaiseToRupees } from '../utils/format';

interface SimilarProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function SimilarProducts({ products, onSelectProduct }: SimilarProductsProps) {
  if (products.length === 0) {
    return null;
  }

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onSelectProduct(item)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.brand} numberOfLines={1}>{item.brand}</Text>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.price}>{formatPaiseToRupees(item.basePriceInPaise)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>You might also like</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  header: {
    ...typography.sectionLabel,
    marginLeft: spacing.xl,
    marginBottom: spacing.md,
  },
  listContent: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  card: {
    width: 140,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    ...shadows.card,
    overflow: 'hidden',
  },
  image: {
    width: 140,
    height: 120,
    backgroundColor: colors.background,
  },
  details: {
    padding: spacing.sm,
  },
  brand: {
    ...typography.caption,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  name: {
    ...typography.bodySecondary,
    color: colors.textPrimary,
    fontWeight: '500',
    marginBottom: spacing.xs,
    height: 36, // Approximate height for 2 lines
  },
  price: {
    ...typography.rowTitle,
    color: colors.textPrimary,
  },
});
