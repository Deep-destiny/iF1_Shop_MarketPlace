export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  ctaLabel: string;
  backgroundImageUrl: string;
  brandLogo: string;
  gradientColors: [string, string];
}

export const MOCK_OFFERS: Offer[] = [
  {
    id: 'offer_1',
    title: 'Venice escape',
    subtitle: 'Starts at ₹2,481/mo',
    tagline: 'Holiday Voucher Deal',
    ctaLabel: 'Explore Package',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/makemytrip.com',
    gradientColors: ['#00000000', '#000000D0']
  },
  {
    id: 'offer_2',
    title: 'Up to 12m no-cost EMIs',
    subtitle: 'Furniture | Mattress | Home Decor',
    tagline: 'Wakefit Home Makeover',
    ctaLabel: 'Shop Wakefit',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/wakefit.co',
    gradientColors: ['#00000000', '#000000D0']
  },
  {
    id: 'offer_3',
    title: 'Adventure Ride Deal',
    subtitle: '60m EMIs available',
    tagline: 'Suzuki V-Strom',
    ctaLabel: 'View Bikes',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/suzukimotorcycle.co.in',
    gradientColors: ['#00000000', '#000000D0']
  },
  {
    id: 'offer_4',
    title: 'Apple Flagship Deal',
    subtitle: 'iPhone 17 Pro on 24m no-cost EMI',
    tagline: 'Upgrade today',
    ctaLabel: 'Buy iPhone',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/apple.com',
    gradientColors: ['#00000000', '#000000D0']
  },
  {
    id: 'offer_5',
    title: 'Everyday Pro Performance',
    subtitle: 'MacBook starting at ₹2000/mo',
    tagline: 'Apple Deals',
    ctaLabel: 'Shop Mac',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/apple.com',
    gradientColors: ['#00000000', '#000000D0']
  },
  {
    id: 'offer_6',
    title: 'Electronics Sale',
    subtitle: 'Easy EMIs on top brands',
    tagline: 'Croma Special',
    ctaLabel: 'Shop Electronics',
    backgroundImageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80',
    brandLogo: 'https://logo.clearbit.com/croma.com',
    gradientColors: ['#00000000', '#000000D0']
  }
];
