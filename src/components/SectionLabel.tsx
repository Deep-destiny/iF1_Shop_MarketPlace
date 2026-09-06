import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme/tokens';

interface SectionLabelProps {
  children: string;
}

/**
 * Uppercase section label with a brand accent bar.
 */
export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <View style={styles.row}>
      <View style={styles.bar} />
      <Text style={typography.sectionLabel}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  bar: {
    width: 3,
    height: 14,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginRight: spacing.sm,
  },
});
