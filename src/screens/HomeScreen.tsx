import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radii, typography, shadows } from '../theme/tokens';
import { SectionLabel } from '../components/SectionLabel';

const { width } = Dimensions.get('window');

const OFFERS = [
  { id: '1', theme: 'travel', tag: 'HOLIDAY VOUCHER DEAL', title: 'Get upto 30% off on MakeMyTrip', subtitle: 'Book your flights now', logo: 'https://logo.clearbit.com/makemytrip.com', tagline: 'Valid till 31st Dec' },
  { id: '2', theme: 'home', tag: 'HOME DECOR', title: 'Flat ₹5000 off on Pepperfry', subtitle: 'Upgrade your living room', logo: 'https://logo.clearbit.com/pepperfry.com', tagline: 'Min spend ₹20,000' },
  { id: '3', theme: 'auto', tag: 'AUTO ACCESSORIES', title: '10% cashback on GoMechanic', subtitle: 'For all car services', logo: 'https://logo.clearbit.com/gomechanic.in', tagline: 'Max cashback ₹1000' },
  { id: '4', theme: 'electronics', tag: 'GADGETS', title: 'No cost EMI on Apple products', subtitle: 'At Reliance Digital', logo: 'https://logo.clearbit.com/reliancedigital.in', tagline: 'Available on all cards' },
  { id: '5', theme: 'travel', tag: 'STAYCATION', title: 'Free breakfast at Taj Hotels', subtitle: 'On 2 nights stay', logo: 'https://logo.clearbit.com/tajhotels.com', tagline: 'Use code TAJ1FI' },
  { id: '6', theme: 'home', tag: 'APPLIANCES', title: 'Up to 40% off on Samsung', subtitle: 'TVs and Refrigerators', logo: 'https://logo.clearbit.com/samsung.com', tagline: 'Limited time offer' },
];

const BRANDS = [
  { id: '1', name: 'MakeMyTrip', logo: 'https://logo.clearbit.com/makemytrip.com' },
  { id: '2', name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
  { id: '3', name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com' },
  { id: '4', name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.in' },
  { id: '5', name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
];

const FAQS = [
  { id: '1', question: 'What is 1Fi?', answer: '1Fi is a platform that lets you shop on no-cost EMIs backed by your mutual funds.' },
  { id: '2', question: 'Is 1Fi safe and legit?', answer: 'Yes, 1Fi uses bank-grade security and partners with RBI approved lenders.' },
  { id: '3', question: 'Who is the RBI approved lending partner?', answer: 'We partner with leading RBI regulated NBFCs and banks.' },
  { id: '4', question: 'What documents are needed to take a loan?', answer: 'No physical documents needed. Just link your mutual fund portfolio.' },
  { id: '5', question: 'Are there any hidden fees?', answer: 'No, we believe in 100% transparency. There are zero hidden charges.' },
  { id: '6', question: 'What if markets fall?', answer: 'Your credit limit is adjusted dynamically based on market conditions.' },
  { id: '7', question: 'Are there any charges if I pay early to release my pledged mutual fund units?', answer: 'No pre-payment penalties ever.' },
];

export function HomeScreen() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const renderOffer = ({ item }: { item: typeof OFFERS[0] }) => (
    <View style={styles.offerCard}>
      <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.offerGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <Text style={styles.offerTag}>{item.tag}</Text>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <Text style={styles.offerSubtitle}>{item.subtitle}</Text>
        <View style={styles.offerFooter}>
          <Image source={{ uri: item.logo }} style={styles.offerLogo} />
          <View style={styles.offerTaglineRow}>
            <Ionicons name="checkmark-circle" size={16} color={colors.accentGreen} />
            <Text style={styles.offerTagline}>{item.tagline}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* A. Hero Banner */}
      <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.hero}>
        <View style={styles.heroContent}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>Shop on <Text style={{ fontWeight: 'bold' }}>no-cost EMI</Text></Text>
            <Text style={styles.heroSubtitle}>Backed by your mutual funds, No credit pull, No charges, & quick approval.</Text>
            <TouchableOpacity style={styles.heroButton}>
              <Text style={styles.heroButtonText}>Check eligibility →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.heroDecoContainer}>
            <Text style={styles.heroDecoText}>0% INTEREST</Text>
          </View>
        </View>
      </LinearGradient>

      {/* B. OFFERS Section */}
      <View style={styles.section}>
        <SectionLabel>OFFERS</SectionLabel>
        <FlatList
          horizontal
          data={OFFERS}
          renderItem={renderOffer}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={width - spacing.xl * 2 + spacing.sm}
          decelerationRate="fast"
          contentContainerStyle={styles.offersList}
        />
        {/* Simplified Dot Pagination indicator for UI */}
        <View style={styles.paginationDots}>
          {OFFERS.map((_, i) => (
            <View key={i} style={[styles.dot, i === 0 && styles.dotActive]} />
          ))}
        </View>
      </View>

      {/* C. SHOP USING 1FI AT TOP BRANDS */}
      <View style={styles.section}>
        <SectionLabel>SHOP USING 1FI AT TOP BRANDS</SectionLabel>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandsList}>
          {BRANDS.map((brand) => (
            <View key={brand.id} style={styles.brandItem}>
              <Image source={{ uri: brand.logo }} style={styles.brandLogo} />
              <Text style={styles.brandName}>{brand.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* D. WHY PAY WITH 1FI */}
      <View style={styles.section}>
        <SectionLabel>WHY PAY WITH 1FI</SectionLabel>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.benefitsScroll}>
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitCard}>
              <View style={[styles.benefitIconBg, { backgroundColor: colors.accentGold + '20' }]}>
                <Ionicons name="trending-down-outline" size={24} color={colors.accentGold} />
              </View>
              <Text style={styles.benefitTitle}>0% interest</Text>
              <Text style={styles.benefitDesc}>Repay only what you spend.</Text>
            </View>
            <View style={styles.benefitCard}>
              <View style={[styles.benefitIconBg, { backgroundColor: colors.accentGreen + '20' }]}>
                <Ionicons name="trending-up-outline" size={24} color={colors.accentGreen} />
              </View>
              <Text style={styles.benefitTitle}>Keep growing</Text>
              <Text style={styles.benefitDesc}>No tax, no exit load.</Text>
            </View>
            <View style={styles.benefitCard}>
              <View style={[styles.benefitIconBg, { backgroundColor: colors.accentBlue + '20' }]}>
                <Ionicons name="flash-outline" size={24} color={colors.accentBlue} />
              </View>
              <Text style={styles.benefitTitle}>Zero charges</Text>
              <Text style={styles.benefitDesc}>No fees, nothing hidden.</Text>
            </View>
            <View style={styles.benefitCard}>
              <View style={[styles.benefitIconBg, { backgroundColor: colors.primary + '20' }]}>
                <Ionicons name="time-outline" size={24} color={colors.primary} />
              </View>
              <Text style={styles.benefitTitle}>Quickest approvals</Text>
              <Text style={styles.benefitDesc}>Instant eligibility check.</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* E. HOW 1FI WORKS */}
      <View style={styles.section}>
        <SectionLabel>HOW 1FI WORKS</SectionLabel>
        <View style={styles.stepsContainer}>
          <View style={styles.stepItem}>
            <View style={styles.stepIconContainer}>
              <View style={styles.stepCircle}>
                <Ionicons name="scan-outline" size={24} color={colors.white} />
              </View>
              <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>1</Text></View>
            </View>
            <Text style={styles.stepLabel}>CONNECT YOUR{'\n'}PORTFOLIO</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <View style={styles.stepIconContainer}>
              <View style={styles.stepCircle}>
                <Ionicons name="lock-open-outline" size={24} color={colors.white} />
              </View>
              <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>2</Text></View>
            </View>
            <Text style={styles.stepLabel}>UNLOCK YOUR{'\n'}LIMIT</Text>
          </View>
          <View style={styles.stepDivider} />
          <View style={styles.stepItem}>
            <View style={styles.stepIconContainer}>
              <View style={styles.stepCircle}>
                <Ionicons name="cart-outline" size={24} color={colors.white} />
              </View>
              <View style={styles.stepBadge}><Text style={styles.stepBadgeText}>3</Text></View>
            </View>
            <Text style={styles.stepLabel}>SHOP &{'\n'}PAY LATER</Text>
          </View>
        </View>
      </View>

      {/* F. REFER & EARN Banner */}
      <View style={styles.section}>
        <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.referCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <View style={styles.referContent}>
            <View style={styles.referBadge}><Text style={styles.referBadgeText}>INVITE</Text></View>
            <Text style={styles.referTitle}>Get upto ₹1000 for every friend.</Text>
            <Text style={styles.referSubtitle}>Plus they'll also get rewards.</Text>
          </View>
          <View style={styles.referRight}>
            <Text style={styles.referLargeText}>REFER AND EARN</Text>
          </View>
        </LinearGradient>
      </View>

      {/* G. FREQUENTLY ASKED QUESTIONS */}
      <View style={styles.section}>
        <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
        <View style={styles.faqList}>
          {FAQS.map((faq) => (
            <View key={faq.id} style={styles.faqItemContainer}>
              <TouchableOpacity style={styles.faqRow} onPress={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Ionicons name={expandedFaq === faq.id ? "chevron-up-outline" : "chevron-down-outline"} size={20} color={colors.textPrimary} />
              </TouchableOpacity>
              {expandedFaq === faq.id && (
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.viewAllFaqs}>
          <Text style={styles.viewAllFaqsText}>View all FAQs →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  hero: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl * 2,
    paddingBottom: spacing.xxl,
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    overflow: 'hidden',
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  heroTextContainer: {
    flex: 1,
    paddingRight: spacing.xl,
    zIndex: 2,
  },
  heroTitle: {
    fontSize: 28,
    color: colors.white,
    lineHeight: 36,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    ...typography.bodySecondary,
    color: colors.white,
    opacity: 0.9,
    marginBottom: spacing.lg,
  },
  heroButton: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    ...typography.button,
    color: colors.textPrimary,
  },
  heroDecoContainer: {
    position: 'absolute',
    right: -40,
    top: 20,
    zIndex: 1,
    transform: [{ rotate: '-15deg' }],
  },
  heroDecoText: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.white,
    opacity: 0.1,
  },
  section: {
    marginTop: spacing.xxl,
  },
  offersList: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.sm,
  },
  offerCard: {
    width: width - spacing.xl * 2,
    height: 200,
    marginRight: spacing.sm,
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  offerGradient: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  offerTag: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: radii.sm,
    ...typography.caption,
    color: colors.white,
    fontWeight: 'bold',
  },
  offerTitle: {
    ...typography.h2,
    color: colors.white,
    marginTop: spacing.sm,
  },
  offerSubtitle: {
    ...typography.bodySecondary,
    color: colors.white,
    opacity: 0.9,
    marginBottom: spacing.sm,
  },
  offerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  offerLogo: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    backgroundColor: colors.white,
  },
  offerTaglineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
  },
  offerTagline: {
    ...typography.caption,
    color: colors.textPrimary,
    marginLeft: spacing.xs,
    fontWeight: '600',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 12,
  },
  brandsList: {
    paddingHorizontal: spacing.xl,
  },
  brandItem: {
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  brandLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.sm,
  },
  brandName: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  benefitsScroll: {
    paddingHorizontal: spacing.xl,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: (width - spacing.xl * 2) * 1.5,
  },
  benefitCard: {
    backgroundColor: colors.surface,
    width: (width - spacing.xl * 2) * 0.7,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    padding: spacing.lg,
    borderRadius: radii.lg,
    ...shadows.card,
  },
  benefitIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  benefitTitle: {
    ...typography.rowTitle,
    marginBottom: spacing.xs,
  },
  benefitDesc: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  stepItem: {
    alignItems: 'center',
    flex: 1,
  },
  stepIconContainer: {
    position: 'relative',
    marginBottom: spacing.sm,
  },
  stepCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.accentGold,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  stepBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  stepLabel: {
    ...typography.caption,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stepDivider: {
    width: 20,
    height: 1,
    backgroundColor: colors.border,
    marginTop: 28,
  },
  referCard: {
    marginHorizontal: spacing.xl,
    borderRadius: radii.lg,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  referContent: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  referBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: radii.sm,
    marginBottom: spacing.sm,
  },
  referBadgeText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: 'bold',
  },
  referTitle: {
    ...typography.rowTitle,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  referSubtitle: {
    ...typography.caption,
    color: colors.white,
    opacity: 0.9,
  },
  referRight: {
    width: 80,
  },
  referLargeText: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.white,
    opacity: 0.15,
    textAlign: 'right',
  },
  faqList: {
    paddingHorizontal: spacing.xl,
  },
  faqItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  faqRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  faqQuestion: {
    ...typography.rowTitle,
    flex: 1,
    paddingRight: spacing.sm,
  },
  faqAnswer: {
    ...typography.bodySecondary,
    paddingBottom: spacing.lg,
    paddingRight: spacing.xl,
  },
  viewAllFaqs: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  viewAllFaqsText: {
    ...typography.button,
    color: colors.primary,
  },
  bottomSpacing: {
    height: spacing.xxxl,
  },
});
