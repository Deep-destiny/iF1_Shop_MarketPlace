import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { ProductVariant } from '../types/marketplace';
import { colors, radii, spacing, typography } from '../theme/tokens';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
}

export function VariantSelector({
  variants,
  selectedVariantId,
  onSelect,
}: VariantSelectorProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {variants.map((variant) => {
        const isSelected = variant.id === selectedVariantId;
        const isDisabled = !variant.inStock;
        return (
          <TouchableOpacity
            key={variant.id}
            style={[
              styles.chip,
              isSelected && styles.chipSelected,
              isDisabled && styles.chipDisabled,
            ]}
            onPress={() => !isDisabled && onSelect(variant.id)}
            disabled={isDisabled}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected, disabled: isDisabled }}
          >
            <Text
              style={[
                styles.label,
                isSelected && styles.labelSelected,
                isDisabled && styles.labelDisabled,
              ]}
            >
              {variant.label}
              {isDisabled ? ' · Out of stock' : ''}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: spacing.sm,
  },
  chip: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    backgroundColor: colors.surface,
  },
  chipSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  chipDisabled: {
    opacity: 0.4,
  },
  label: {
    ...typography.rowSubtitle,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  labelSelected: {
    color: colors.primary,
  },
  labelDisabled: {
    color: colors.textMuted,
  },
});
