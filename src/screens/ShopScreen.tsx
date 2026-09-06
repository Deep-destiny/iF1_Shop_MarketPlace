import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SegmentedToggle } from '../components/SegmentedToggle';
import { MarketplaceTab } from './MarketplaceTab';
import { SectionLabel } from '../components/SectionLabel';
import { colors, radii, shadows, spacing, typography } from '../theme/tokens';
import { Product } from '../types/marketplace';
import { MOCK_BRANDS, Brand } from '../data/mockBrands';

type ShopSegment = 'top_brands' | 'nearby_stores' | 'marketplace';

const SEGMENTS = [
  { key: 'top_brands' as const, label: 'Top Brands' },
  { key: 'nearby_stores' as const, label: 'Nearby Stores' },
  { key: 'marketplace' as const, label: '1Fi Marketplace' },
];

const NEARBY_STORES = [
  {
    id: 'store_1',
    name: 'Pacholi Suzuki Railway Road',
    address: '64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, 122001',
    distance: '1.0 KM',
    logo: 'https://logo.clearbit.com/suzukimotorcycle.co.in',
  },
  {
    id: 'store_2',
    name: 'Pacholi Suzuki Rajiv Chowk',
    address: '6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, 122001',
    distance: '1.4 KM',
    logo: 'https://logo.clearbit.com/suzukimotorcycle.co.in',
  },
  {
    id: 'store_3',
    name: 'Malwa Honda Khandsa Road',
    address: '60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, 122001',
    distance: '2.1 KM',
    logo: 'https://logo.clearbit.com/honda2wheelersindia.com',
  },
  {
    id: 'store_4',
    name: 'Atelier Forbidden Journeys',
    address: 'Sector 49, Gurugram, Haryana, 122001',
    distance: '3.3 KM',
    logo: 'https://logo.clearbit.com/tajhotels.com',
  },
  {
    id: 'store_5',
    name: 'Reliance Digital Mega Mall',
    address: 'Ground Floor, Mega Mall, Golf Course Rd, Gurugram, 122002',
    distance: '4.2 KM',
    logo: 'https://logo.clearbit.com/reliancedigital.in',
  },
  {
    id: 'store_6',
    name: 'Croma Cyber Hub',
    address: 'DLF Cyber Hub, DLF Phase 2, Sector 24, Gurugram, 122002',
    distance: '5.0 KM',
    logo: 'https://logo.clearbit.com/croma.com',
  },
];

interface ShopScreenProps {
  navigation?: any;
}

/**
 * Main Shop screen supporting Top Brands, Nearby Stores,
 * and 1Fi Marketplace catalog.
 */
export function ShopScreen({ navigation }: ShopScreenProps) {
  const [activeSegment, setActiveSegment] = useState<ShopSegment>('marketplace');

  const handleSelectProduct = (product: Product) => {
    if (navigation?.navigate) {
      navigation.navigate('ProductDetail', { productId: product.id });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.gradientStart, colors.gradientEnd]}
        style={styles.hero}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.heroContent}>
          <View style={styles.heroTextContainer}>
            <View style={styles.heroBadgeContainer}>
              <Text style={styles.heroBadge}>✨ NO-COST EMIs</Text>
            </View>
            <Text style={styles.heroTitle}>
              Shop today,{'\n'}
              <Text style={styles.heroItalic}>Pay later</Text> using{'\n'}
              <Text style={{ fontWeight: '800' }}>Mutual funds.</Text>
            </Text>
            <Text style={styles.heroSubtitle}>
              No credit score required. No interest.{'\n'}Backed by your investments.
            </Text>
          </View>
          <View style={styles.heroDecoContainer}>
            <Text style={styles.heroDecoLarge}>0%</Text>
            <Text style={styles.heroDecoSmall}>INTEREST</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.toggleWrapper}>
        <SegmentedToggle
          options={SEGMENTS}
          selectedKey={activeSegment}
          onSelect={(key) => setActiveSegment(key as ShopSegment)}
        />
      </View>

      <View style={styles.body}>
        {activeSegment === 'top_brands' && <TopBrandsView />}
        {activeSegment === 'nearby_stores' && <NearbyStoresView />}
        {activeSegment === 'marketplace' && (
          <MarketplaceTab onSelectProduct={handleSelectProduct} />
        )}
      </View>
    </View>
  );
}

function TopBrandsView() {
  const [search, setSearch] = useState('');

  const filteredBrands = MOCK_BRANDS.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.tabContainer}>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search online stores..."
          placeholderTextColor={colors.textMuted}
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.sectionHeaderRow}>
        <SectionLabel>TOP BRANDS</SectionLabel>
      </View>

      <FlatList
        data={filteredBrands}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
        renderItem={({ item }) => (
          <View style={styles.brandCard}>
            <Image source={{ uri: item.logoUrl }} style={styles.brandCardLogo} resizeMode="contain" />
            <View style={styles.brandCardContent}>
              <Text style={styles.brandCardName}>{item.name}</Text>
              <Text style={styles.brandCardSubtitle}>
                No-cost EMIs upto {item.maxEmiMonths} months
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
          </View>
        )}
      />
    </View>
  );
}

function NearbyStoresView() {
  const [search, setSearch] = useState('');

  const filteredStores = NEARBY_STORES.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.tabContainer}>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={18} color={colors.textMuted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search stores..."
          placeholderTextColor={colors.textMuted}
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.nearbyHeaderRow}>
        <SectionLabel>NEARBY STORES</SectionLabel>
        <TouchableOpacity style={styles.locationPill}>
          <Text style={styles.locationPillText}>Gurugram</Text>
          <Ionicons name="chevron-down" size={12} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredStores}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
        renderItem={({ item }) => (
          <View style={styles.storeCard}>
            <View style={styles.storeCardTop}>
              <Image source={{ uri: item.logo }} style={styles.storeCardLogo} resizeMode="contain" />
              <View style={styles.storeCardInfo}>
                <Text style={styles.storeCardName}>{item.name}</Text>
              </View>
              <View style={styles.distanceBadge}>
                <Text style={styles.distanceText}>{item.distance}</Text>
              </View>
            </View>
            <Text style={styles.storeCardAddress}>{item.address}</Text>
          </View>
        )}
      />
    </View>
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
    paddingBottom: spacing.xxxl + spacing.md,
    borderBottomLeftRadius: radii.xl,
    borderBottomRightRadius: radii.xl,
    overflow: 'hidden',
  },
  heroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  heroTextContainer: {
    flex: 1,
    zIndex: 2,
  },
  heroBadgeContainer: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radii.pill,
    marginBottom: spacing.md,
  },
  heroBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 34,
    marginBottom: spacing.sm,
  },
  heroItalic: {
    fontStyle: 'italic',
    color: '#FFD700',
  },
  heroSubtitle: {
    ...typography.bodySecondary,
    color: colors.white,
    opacity: 0.85,
    lineHeight: 20,
  },
  heroDecoContainer: {
    alignItems: 'center',
    opacity: 0.9,
    marginLeft: spacing.sm,
  },
  heroDecoLarge: {
    fontSize: 56,
    fontWeight: '900',
    color: '#FFD700',
    lineHeight: 56,
  },
  heroDecoSmall: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 3,
  },
  toggleWrapper: {
    paddingHorizontal: spacing.xl,
    marginTop: -spacing.xl,
  },
  body: {
    flex: 1,
    paddingTop: spacing.lg,
  },
  tabContainer: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    ...typography.body,
    padding: 0,
  },
  sectionHeaderRow: {
    marginBottom: spacing.xs,
  },
  nearbyHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  locationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingHorizontal: spacing.sm + 2,
    paddingVertical: 4,
    borderRadius: radii.pill,
    gap: 4,
  },
  locationPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  listPadding: {
    paddingBottom: spacing.xxxl,
  },
  brandCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  brandCardLogo: {
    width: 48,
    height: 48,
    borderRadius: radii.md,
    backgroundColor: colors.background,
    marginRight: spacing.md,
  },
  brandCardContent: {
    flex: 1,
  },
  brandCardName: {
    ...typography.rowTitle,
    fontSize: 15,
    marginBottom: 2,
  },
  brandCardSubtitle: {
    ...typography.rowSubtitle,
    color: colors.textSecondary,
    fontSize: 12,
  },
  storeCard: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadows.card,
  },
  storeCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  storeCardLogo: {
    width: 36,
    height: 36,
    borderRadius: radii.sm,
    backgroundColor: colors.background,
    marginRight: spacing.md,
  },
  storeCardInfo: {
    flex: 1,
  },
  storeCardName: {
    ...typography.rowTitle,
    fontSize: 15,
  },
  distanceBadge: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radii.sm,
  },
  distanceText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  storeCardAddress: {
    ...typography.caption,
    color: colors.textSecondary,
    paddingLeft: 48,
    lineHeight: 16,
  },
});
