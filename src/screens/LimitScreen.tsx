import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { colors, spacing, typography } from '../theme/tokens';

export function LimitScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>🔒</Text>
        </View>
        <Text style={styles.label}>CHECK ELIGIBILITY</Text>
        <Text style={styles.message}>Shop on 0% interest backed by your Mutual Funds</Text>
        <View style={styles.buttonWrapper}>
          <PrimaryButton label="Fetch my portfolio" onPress={() => {}} />
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
