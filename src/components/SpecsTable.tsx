import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography } from '../theme/tokens';

interface SpecsTableProps {
  specs: Record<string, string>;
}

export function SpecsTable({ specs }: SpecsTableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const specEntries = Object.entries(specs);

  if (specEntries.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpand}
        activeOpacity={0.7}
      >
        <Text style={styles.headerText}>Specifications</Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={colors.textPrimary}
        />
      </TouchableOpacity>
      
      {isExpanded && (
        <View style={styles.content}>
          {specEntries.map(([key, value], index) => (
            <View
              key={key}
              style={[
                styles.row,
                index % 2 === 0 ? styles.rowEven : styles.rowOdd,
              ]}
            >
              <Text style={styles.keyText}>{key}</Text>
              <Text style={styles.valueText}>{value}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
  headerText: {
    ...typography.h2,
    color: colors.textPrimary,
  },
  content: {
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  row: {
    flexDirection: 'row',
    padding: spacing.md,
  },
  rowEven: {
    backgroundColor: colors.white,
  },
  rowOdd: {
    backgroundColor: colors.background,
  },
  keyText: {
    ...typography.rowSubtitle,
    flex: 1,
    color: colors.textSecondary,
  },
  valueText: {
    ...typography.rowTitle,
    fontSize: 14,
    flex: 2,
    color: colors.textPrimary,
  },
});
