import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography } from '../theme/tokens';

interface CategoryFilterProps {
  categories: { key: string; label: string; icon: string }[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

export function CategoryFilter({ categories, selectedKey, onSelect }: CategoryFilterProps) {
  const allCategories = [
    { key: 'all', label: 'All', icon: 'grid-outline' },
    ...categories,
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      {allCategories.map((category) => {
        const isSelected = selectedKey === category.key;
        return (
          <TouchableOpacity
            key={category.key}
            style={[styles.chip, isSelected && styles.chipSelected]}
            onPress={() => onSelect(category.key)}
            activeOpacity={0.8}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            <Ionicons
              name={category.icon as any}
              size={20}
              color={isSelected ? colors.white : colors.textSecondary}
              style={styles.icon}
            />
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: -spacing.xl,
  },
  container: {
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
    flexDirection: 'row',
    paddingVertical: spacing.xs,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  icon: {
    marginRight: spacing.xs,
  },
  label: {
    ...typography.bodySecondary,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  labelSelected: {
    color: colors.white,
  },
});
