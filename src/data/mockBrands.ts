export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  maxEmiMonths: number;
}

export const MOCK_BRANDS: Brand[] = [
  { id: 'brand_makemytrip', name: 'MakeMyTrip', logoUrl: 'https://logo.clearbit.com/makemytrip.com', maxEmiMonths: 60 },
  { id: 'brand_easemytrip', name: 'EaseMyTrip', logoUrl: 'https://logo.clearbit.com/easemytrip.com', maxEmiMonths: 48 },
  { id: 'brand_yatra', name: 'Yatra', logoUrl: 'https://logo.clearbit.com/yatra.com', maxEmiMonths: 36 },
  { id: 'brand_taj', name: 'Taj', logoUrl: 'https://logo.clearbit.com/tajhotels.com', maxEmiMonths: 24 },
  { id: 'brand_apple', name: 'Apple', logoUrl: 'https://logo.clearbit.com/apple.com', maxEmiMonths: 24 },
  { id: 'brand_reliancedigital', name: 'Reliance Digital', logoUrl: 'https://logo.clearbit.com/reliancedigital.in', maxEmiMonths: 24 },
  { id: 'brand_croma', name: 'Croma', logoUrl: 'https://logo.clearbit.com/croma.com', maxEmiMonths: 24 },
  { id: 'brand_vijaysales', name: 'Vijay Sales', logoUrl: 'https://logo.clearbit.com/vijaysales.com', maxEmiMonths: 24 },
  { id: 'brand_airindia', name: 'Air India', logoUrl: 'https://logo.clearbit.com/airindia.in', maxEmiMonths: 60 },
  { id: 'brand_goibibo', name: 'Goibibo', logoUrl: 'https://logo.clearbit.com/goibibo.com', maxEmiMonths: 48 },
  { id: 'brand_wakefit', name: 'Wakefit', logoUrl: 'https://logo.clearbit.com/wakefit.co', maxEmiMonths: 12 },
  { id: 'brand_caratlane', name: 'CaratLane', logoUrl: 'https://logo.clearbit.com/caratlane.com', maxEmiMonths: 24 },
  { id: 'brand_suzuki', name: 'Suzuki', logoUrl: 'https://logo.clearbit.com/suzukimotorcycle.co.in', maxEmiMonths: 60 },
];
