import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, spacing, typography } from '../theme/tokens';

export function EmiDuesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>📄❓</Text>
        </View>
        <Text style={styles.label}>NOTHING DUE YET</Text>
        <Text style={styles.message}>Looks like you haven't shopped yet with 1Fi</Text>
        <View style={styles.buttonWrapper}>
          <PrimaryButton label="Check eligibility" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  iconContainer: {
    marginBottom: spacing.lg,
  },
  iconText: {
    fontSize: 64,
  },
  label: {
    ...typography.caption,
    color: colors.textMuted,
    marginBottom: spacing.sm,
  },
  message: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  buttonWrapper: {
    width: '100%',
  },
});
