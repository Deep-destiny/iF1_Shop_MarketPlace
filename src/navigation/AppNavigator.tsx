import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ShopStack } from './ShopStack';
import { HomeScreen } from '../screens/HomeScreen';
import { EmiDuesScreen } from '../screens/EmiDuesScreen';
import { LimitScreen } from '../screens/LimitScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { colors, typography } from '../theme/tokens';

/**
 * Root tab navigator for the 1Fi app. Mirrors the real app's 5-tab
 * bottom bar: Home, Shop, EMI Dues, Limit, Profile.
 *
 * Icon names and colors are matched to the existing 1Fi app. The active
 * tab uses the brand purple with a top border indicator, inactive uses
 * muted gray — same visual cue as the real app.
 */

export type RootTabParamList = {
  Home: undefined;
  Shop: undefined;
  'EMI Dues': undefined;
  Limit: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_ICONS: Record<keyof RootTabParamList, { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }> = {
  Home: { active: 'home', inactive: 'home-outline' },
  Shop: { active: 'storefront', inactive: 'storefront-outline' },
  'EMI Dues': { active: 'receipt', inactive: 'receipt-outline' },
  Limit: { active: 'bar-chart', inactive: 'bar-chart-outline' },
  Profile: { active: 'person', inactive: 'person-outline' },
};

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          const icons = TAB_ICONS[route.name as keyof RootTabParamList];
          const iconName = focused ? icons.active : icons.inactive;
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? colors.primary : colors.textMuted}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600' as const,
        },
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingTop: 6,
          height: 60,
        },
        tabBarItemStyle: {
          paddingBottom: 4,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopStack} />
      <Tab.Screen name="EMI Dues" component={EmiDuesScreen} />
      <Tab.Screen name="Limit" component={LimitScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
