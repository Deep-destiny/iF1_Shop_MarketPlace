import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, radii, spacing, typography } from '../theme/tokens';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

/**
 * Full-width primary pill action button with loading and disabled states.
 */
export function PrimaryButton({
  label,
  onPress,
  disabled = false,
  loading = false,
  style,
}: PrimaryButtonProps) {
  const isInactive = disabled || loading;

  return (
    <TouchableOpacity
      style={[styles.button, isInactive && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={isInactive}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive }}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.primaryDark,
    opacity: 0.5,
  },
  label: {
    ...typography.button,
  },
});
