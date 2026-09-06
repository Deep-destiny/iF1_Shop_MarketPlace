import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing } from '../theme/tokens';

type BadgeVariant = 'deal' | 'new' | 'featured' | 'noCostEmi' | 'outOfStock';

interface BadgeProps {
  variant: BadgeVariant;
  label?: string;
}

const variantStyles = {
  deal: { bg: colors.accentGold + '22', text: colors.accentGold, defaultLabel: 'DEAL' },
  new: { bg: colors.accentGreen + '22', text: colors.accentGreen, defaultLabel: 'NEW' },
  featured: { bg: colors.primary + '15', text: colors.primary, defaultLabel: 'FEATURED' },
  noCostEmi: { bg: colors.primaryLight, text: colors.primary, defaultLabel: 'No-cost EMI' },
  outOfStock: { bg: colors.errorLight, text: colors.error, defaultLabel: 'Out of stock' },
};

export function Badge({ variant, label }: BadgeProps) {
  const config = variantStyles[variant];

  return (
    <View style={[styles.container, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: config.text }]}>
        {label || config.defaultLabel}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radii.sm,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
