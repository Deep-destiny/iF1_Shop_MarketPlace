import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme/tokens';
import { PrimaryButton } from './PrimaryButton';

interface EmptyStateProps {
  icon: string;
  eyebrow: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Reusable empty state and error recovery view.
 */
export function EmptyState({
  icon,
  eyebrow,
  message,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.message}>{message}</Text>
      {actionLabel && onAction && (
        <PrimaryButton
          label={actionLabel}
          onPress={onAction}
          style={styles.button}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xxxl * 2,
  },
  icon: {
    fontSize: 56,
    marginBottom: spacing.lg,
  },
  eyebrow: {
    ...typography.caption,
    marginBottom: spacing.sm,
  },
  message: {
    ...typography.h2,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  button: {
    width: '100%',
  },
});
