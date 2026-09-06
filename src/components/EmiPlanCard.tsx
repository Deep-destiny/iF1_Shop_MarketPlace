import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EmiPlan } from '../types/marketplace';
import { colors, radii, spacing, typography } from '../theme/tokens';
import { formatEmiLabel, formatPaiseToRupees } from '../utils/format';

interface EmiPlanCardProps {
  plan: EmiPlan;
  isSelected: boolean;
  onSelect: (planId: string) => void;
  isRecommended?: boolean;
}

export function EmiPlanCard({ plan, isSelected, onSelect, isRecommended }: EmiPlanCardProps) {
  const totalAmount = plan.monthlyAmountInPaise * plan.tenureMonths;

  return (
    <View style={styles.wrapper}>
      {isRecommended && (
        <View style={styles.recommendedBadge}>
          <Text style={styles.recommendedText}>RECOMMENDED</Text>
        </View>
      )}
      <TouchableOpacity
        style={[styles.card, isSelected && styles.cardSelected, isRecommended && styles.cardRecommended]}
        onPress={() => onSelect(plan.id)}
        activeOpacity={0.85}
        accessibilityRole="radio"
        accessibilityState={{ checked: isSelected }}
      >
        <View style={styles.radioOuter}>
          {isSelected && <View style={styles.radioInner} />}
        </View>
        <View style={styles.details}>
          <Text style={styles.tenure}>{formatEmiLabel(plan.tenureMonths)}</Text>
          <Text style={styles.monthly}>
            {formatPaiseToRupees(plan.monthlyAmountInPaise)}/mo
          </Text>
          <Text style={styles.totalText}>
            Total: {formatPaiseToRupees(totalAmount)}
          </Text>
        </View>
        {plan.isNoCost && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>0% interest</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginTop: spacing.md,
  },
  recommendedBadge: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.sm,
    zIndex: 1,
  },
  recommendedText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight + '40', // slightly transparent background when selected
  },
  cardRecommended: {
    marginTop: 0,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  details: {
    flex: 1,
  },
  tenure: {
    ...typography.rowTitle,
    color: colors.textPrimary,
  },
  monthly: {
    ...typography.bodySecondary,
    color: colors.textSecondary,
    marginTop: 2,
  },
  totalText: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: 2,
  },
  badge: {
    backgroundColor: colors.accentGreen + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radii.sm,
  },
  badgeText: {
    ...typography.caption,
    color: colors.accentGreen,
    fontWeight: '600',
  },
});
