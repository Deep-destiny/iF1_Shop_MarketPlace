import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radii, typography } from '../theme/tokens';
import { SectionLabel } from '../components/SectionLabel';

const ACTIONS = [
  { id: '1', title: 'Profile details', subtitle: 'Name, contact and KYC info', icon: 'person-outline' as const },
  { id: '2', title: 'Purchases', subtitle: 'Orders, invoices and loan status', icon: 'cube-outline' as const },
  { id: '3', title: 'Pledge history', subtitle: 'Funds you pledged or released', icon: 'diamond-outline' as const },
  { id: '4', title: 'Invite friends', subtitle: 'Share the app, earn rewards', icon: 'people-outline' as const, badge: 'EARN ₹500' },
  { id: '5', title: 'Support & FAQs', subtitle: 'Find answers or contact us', icon: 'help-circle-outline' as const },
  { id: '6', title: 'Privacy policy', subtitle: 'How we handle your data', icon: 'shield-checkmark-outline' as const },
  { id: '7', title: 'Terms & conditions', subtitle: 'Rules governing your use', icon: 'document-text-outline' as const },
];

export function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <Text style={styles.headerDesc}>Manage your account settings and personal preferences.</Text>
      </View>

      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>U</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>User</Text>
          <Text style={styles.userPhone}>+91 98765 43210</Text>
        </View>
      </View>

      <View style={styles.section}>
        <SectionLabel>QUICK ACTIONS</SectionLabel>
        <View style={styles.actionList}>
          {ACTIONS.map((action) => (
            <TouchableOpacity key={action.id} style={styles.actionRow}>
              <View style={styles.actionIconBg}>
                <Ionicons name={action.icon} size={20} color={colors.primary} />
              </View>
              <View style={styles.actionContent}>
                <View style={styles.actionTitleRow}>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                  {action.badge && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{action.badge}</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Made with 💜 by 1Fi</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
  },
  headerTitle: {
    ...typography.h1,
    marginBottom: spacing.xs,
  },
  headerDesc: {
    ...typography.bodySecondary,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.surface,
    marginHorizontal: spacing.xl,
    borderRadius: radii.lg,
    marginBottom: spacing.xxl,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    ...typography.rowTitle,
    marginBottom: spacing.xs / 2,
  },
  userPhone: {
    ...typography.bodySecondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  actionList: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.xl,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  actionIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  actionContent: {
    flex: 1,
  },
  actionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs / 2,
  },
  actionTitle: {
    ...typography.rowTitle,
  },
  badge: {
    backgroundColor: colors.accentGold + '20',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.sm,
    marginLeft: spacing.sm,
  },
  badgeText: {
    ...typography.caption,
    color: colors.accentGold,
    fontWeight: 'bold',
    fontSize: 10,
  },
  actionSubtitle: {
    ...typography.bodySecondary,
    fontSize: 13,
  },
  logoutBtn: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },
  logoutText: {
    ...typography.button,
    color: colors.error,
  },
  footer: {
    ...typography.caption,
    color: colors.textMuted,
    textAlign: 'center',
    paddingVertical: spacing.xl,
  },
});
