import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, radii, spacing, typography } from '../theme/tokens';

export interface SegmentOption {
  key: string;
  label: string;
}

interface SegmentedToggleProps {
  options: SegmentOption[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

/**
 * Pill-style segmented toggle component.
 */
export function SegmentedToggle({
  options,
  selectedKey,
  onSelect,
}: SegmentedToggleProps) {
  return (
    <View style={styles.track}>
      {options.map((option) => {
        const isSelected = option.key === selectedKey;
        return (
          <TouchableOpacity
            key={option.key}
            style={[styles.segment, isSelected && styles.segmentSelected]}
            onPress={() => onSelect(option.key)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isSelected }}
          >
            <Text
              style={[
                styles.label,
                isSelected ? styles.labelSelected : styles.labelUnselected,
              ]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: colors.primaryLight,
    borderRadius: radii.pill,
    padding: spacing.xs,
  },
  segment: {
    flex: 1,
    paddingVertical: spacing.sm + 2,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentSelected: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  label: {
    ...typography.rowSubtitle,
    fontWeight: '600',
  },
  labelSelected: {
    color: colors.primary,
  },
  labelUnselected: {
    color: colors.textSecondary,
  },
});
