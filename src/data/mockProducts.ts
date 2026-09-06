import { Product } from '../types/marketplace';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_iphone17pro',
    name: 'iPhone 17 Pro',
    brand: 'Apple',
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/iphone17pro_side/600/600',
      'https://picsum.photos/seed/iphone17pro_back/600/600'
    ],
    shortDescription: 'Titanium design, A19 Pro chip, Pro camera system.',
    basePriceInPaise: 13990000,
    rating: 4.8,
    reviewCount: 2140,
    tags: ['featured'],
    specs: {
      'Display': '6.1-inch Super Retina XDR',
      'Processor': 'A19 Pro chip',
      'Material': 'Aerospace-grade titanium',
      'Camera': '48MP Main | Ultra Wide | Telephoto'
    },
    variants: [
      { id: 'var_128', label: '256GB · Deep Blue', priceInPaise: 13990000, inStock: true },
      { id: 'var_512', label: '512GB · Deep Blue', priceInPaise: 15990000, inStock: true },
      { id: 'var_1tb', label: '1TB · Silver', priceInPaise: 17990000, inStock: false },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 2331667, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 1165833, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_24', tenureMonths: 24, monthlyAmountInPaise: 582917, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_macbookair',
    name: 'MacBook Air (M4)',
    brand: 'Apple',
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/macbookairm4_open/600/600',
      'https://picsum.photos/seed/macbookairm4_profile/600/600'
    ],
    shortDescription: 'All-day battery, silent by design, built for work.',
    basePriceInPaise: 11490000,
    rating: 4.7,
    reviewCount: 986,
    tags: ['new'],
    specs: {
      'Display': '13.6-inch Liquid Retina',
      'Processor': 'Apple M4 chip',
      'Battery': 'Up to 18 hours',
      'Memory': '8GB unified memory'
    },
    variants: [
      { id: 'var_256', label: '256GB · Midnight', priceInPaise: 11490000, inStock: true },
      { id: 'var_512', label: '512GB · Starlight', priceInPaise: 13490000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 1915000, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 957500, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_suzuki_vstrom',
    name: 'V-Strom SX 250',
    brand: 'Suzuki',
    category: 'auto',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/vstromsx250_front/600/600',
      'https://picsum.photos/seed/vstromsx250_back/600/600'
    ],
    shortDescription: 'Adventure-ready. Built for the ride, not just the road.',
    basePriceInPaise: 21999900,
    rating: 4.5,
    reviewCount: 341,
    tags: ['featured'],
    specs: {
      'Engine': '249cc, 4-stroke, single cylinder',
      'Power': '26.5 PS @ 9300 rpm',
      'Brakes': 'Disc (Front/Rear)',
      'Fuel Capacity': '12L'
    },
    variants: [
      { id: 'var_std', label: 'Standard · Pearl Black', priceInPaise: 21999900, inStock: true },
      { id: 'var_metallic', label: 'Metallic Sonic Silver', priceInPaise: 22499900, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_24', tenureMonths: 24, monthlyAmountInPaise: 916663, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_36', tenureMonths: 36, monthlyAmountInPaise: 611109, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_60', tenureMonths: 60, monthlyAmountInPaise: 366666, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_makemytrip_venice',
    name: 'Venice Escape Package',
    brand: 'MakeMyTrip',
    category: 'travel',
    imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/venicepackage_boat/600/600',
      'https://picsum.photos/seed/venicepackage_city/600/600'
    ],
    shortDescription: '5N/6D · Flights, 4-star stay, and city tour included.',
    basePriceInPaise: 14886000,
    rating: 4.6,
    reviewCount: 128,
    tags: ['deal'],
    specs: {
      'Duration': '5 Nights / 6 Days',
      'Flights': 'Round-trip included',
      'Accommodation': '4-star hotel stay',
      'Meals': 'Breakfast included'
    },
    variants: [
      { id: 'var_double', label: 'Double occupancy', priceInPaise: 14886000, inStock: true },
      { id: 'var_solo', label: 'Solo traveller', priceInPaise: 9990000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_36', tenureMonths: 36, monthlyAmountInPaise: 413500, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_60', tenureMonths: 60, monthlyAmountInPaise: 248100, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_wakefit_mattress',
    name: 'Wakefit Orthopedic Mattress',
    brand: 'Wakefit',
    category: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/wakefitmattress_detail/600/600',
      'https://picsum.photos/seed/wakefitmattress_room/600/600'
    ],
    shortDescription: 'Memory foam comfort, engineered for better sleep.',
    basePriceInPaise: 1799900,
    rating: 4.4,
    reviewCount: 5602,
    specs: {
      'Material': 'Memory Foam',
      'Firmness': 'Medium Firm',
      'Warranty': '10 Years',
      'Thickness': '8 inches'
    },
    variants: [
      { id: 'var_queen', label: 'Queen · 78x60 in', priceInPaise: 1799900, inStock: true },
      { id: 'var_king', label: 'King · 78x72 in', priceInPaise: 2199900, inStock: true },
      { id: 'var_single', label: 'Single · 75x36 in', priceInPaise: 1199900, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 299983, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 149992, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_reliance_tv',
    name: 'Sony Bravia 55" 4K TV',
    brand: 'Reliance Digital',
    category: 'electronics',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop',
      'https://picsum.photos/seed/sonybravia55_side/600/600',
      'https://picsum.photos/seed/sonybravia55_remote/600/600'
    ],
    shortDescription: 'OLED display, cinematic sound, Google TV built in.',
    basePriceInPaise: 8990000,
    rating: 4.6,
    reviewCount: 743,
    specs: {
      'Resolution': '4K Ultra HD (3840 x 2160)',
      'Refresh Rate': '120Hz',
      'Smart TV': 'Google TV',
      'Sound': 'Acoustic Surface Audio+'
    },
    variants: [
      { id: 'var_55', label: '55 inch', priceInPaise: 8990000, inStock: true },
      { id: 'var_65', label: '65 inch', priceInPaise: 12990000, inStock: false },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 1498333, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 749167, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_samsung_s25_ultra',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'electronics',
    imageUrl: 'https://picsum.photos/seed/s25ultra_main/600/600',
    images: [
      'https://picsum.photos/seed/s25ultra_main/600/600',
      'https://picsum.photos/seed/s25ultra_back/600/600',
      'https://picsum.photos/seed/s25ultra_side/600/600'
    ],
    shortDescription: 'Epic cameras, powerful AI, built with titanium.',
    basePriceInPaise: 13499900,
    rating: 4.9,
    reviewCount: 845,
    tags: ['new'],
    specs: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 4',
      'Camera': '200MP Main | 50MP Telephoto',
      'Battery': '5000 mAh'
    },
    variants: [
      { id: 'var_256', label: '256GB · Titanium Gray', priceInPaise: 13499900, inStock: true },
      { id: 'var_512', label: '512GB · Titanium Black', priceInPaise: 14499900, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 1124992, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_24', tenureMonths: 24, monthlyAmountInPaise: 562496, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_ipad_air_m3',
    name: 'iPad Air M3',
    brand: 'Apple',
    category: 'electronics',
    imageUrl: 'https://picsum.photos/seed/ipadairm3/600/600',
    images: [
      'https://picsum.photos/seed/ipadairm3/600/600',
      'https://picsum.photos/seed/ipadairm3_pencil/600/600',
      'https://picsum.photos/seed/ipadairm3_keyboard/600/600'
    ],
    shortDescription: 'Supercharged by M3. 11-inch Liquid Retina display.',
    basePriceInPaise: 6990000,
    rating: 4.8,
    reviewCount: 1540,
    tags: ['deal'],
    specs: {
      'Display': '11-inch Liquid Retina',
      'Chip': 'Apple M3 chip',
      'Storage': '128GB Base',
      'Compatibility': 'Apple Pencil Pro'
    },
    variants: [
      { id: 'var_128', label: '128GB · Space Gray', priceInPaise: 6990000, inStock: true },
      { id: 'var_256', label: '256GB · Blue', priceInPaise: 7990000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 1165000, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 582500, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_re_himalayan_450',
    name: 'Royal Enfield Himalayan 450',
    brand: 'Royal Enfield',
    category: 'auto',
    imageUrl: 'https://picsum.photos/seed/himalayan450/600/600',
    images: [
      'https://picsum.photos/seed/himalayan450/600/600',
      'https://picsum.photos/seed/himalayan450_side/600/600',
      'https://picsum.photos/seed/himalayan450_action/600/600'
    ],
    shortDescription: 'Built for all roads. Built for no roads.',
    basePriceInPaise: 28500000,
    rating: 4.7,
    reviewCount: 420,
    specs: {
      'Engine': '452cc Liquid Cooled',
      'Power': '40 PS @ 8000 rpm',
      'Torque': '40 Nm @ 5500 rpm',
      'Weight': '196 kg'
    },
    variants: [
      { id: 'var_kaza', label: 'Kaza Brown', priceInPaise: 28500000, inStock: true },
      { id: 'var_hanle', label: 'Hanle Black', priceInPaise: 29800000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_24', tenureMonths: 24, monthlyAmountInPaise: 1187500, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_36', tenureMonths: 36, monthlyAmountInPaise: 791667, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_taj_bhopal',
    name: 'Taj Lakefront Bhopal Stay',
    brand: 'Taj',
    category: 'travel',
    imageUrl: 'https://picsum.photos/seed/tajbhopal/600/600',
    images: [
      'https://picsum.photos/seed/tajbhopal/600/600',
      'https://picsum.photos/seed/tajbhopal_room/600/600',
      'https://picsum.photos/seed/tajbhopal_pool/600/600'
    ],
    shortDescription: 'Luxury stay overlooking the upper lake.',
    basePriceInPaise: 4500000,
    rating: 4.9,
    reviewCount: 234,
    tags: ['featured'],
    specs: {
      'Duration': '2 Nights',
      'Room Type': 'Luxury Lake View',
      'Inclusions': 'Breakfast & Spa Discount'
    },
    variants: [
      { id: 'var_luxury', label: 'Luxury Lake View', priceInPaise: 4500000, inStock: true },
      { id: 'var_club', label: 'Taj Club Room', priceInPaise: 6500000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_3', tenureMonths: 3, monthlyAmountInPaise: 1500000, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 750000, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_dyson_v15',
    name: 'Dyson V15 Detect Vacuum',
    brand: 'Dyson',
    category: 'home',
    imageUrl: 'https://picsum.photos/seed/dysonv15/600/600',
    images: [
      'https://picsum.photos/seed/dysonv15/600/600',
      'https://picsum.photos/seed/dysonv15_laser/600/600',
      'https://picsum.photos/seed/dysonv15_accessories/600/600'
    ],
    shortDescription: 'Powerful cordless vacuum with laser illumination.',
    basePriceInPaise: 6290000,
    rating: 4.8,
    reviewCount: 312,
    tags: ['deal'],
    specs: {
      'Run Time': 'Up to 60 minutes',
      'Suction Power': '240 AW',
      'Bin Volume': '0.77 L',
      'Weight': '2.74 kg'
    },
    variants: [
      { id: 'var_standard', label: 'Standard Edition', priceInPaise: 6290000, inStock: true },
      { id: 'var_extra', label: 'Absolute Extra', priceInPaise: 6990000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 1048333, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_12', tenureMonths: 12, monthlyAmountInPaise: 524167, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_sony_wh1000xm5',
    name: 'Sony WH-1000XM5 Headphones',
    brand: 'Sony',
    category: 'electronics',
    imageUrl: 'https://picsum.photos/seed/sonywh1000xm5/600/600',
    images: [
      'https://picsum.photos/seed/sonywh1000xm5/600/600',
      'https://picsum.photos/seed/sonywh1000xm5_side/600/600',
      'https://picsum.photos/seed/sonywh1000xm5_case/600/600'
    ],
    shortDescription: 'Industry-leading noise cancellation.',
    basePriceInPaise: 2999000,
    rating: 4.7,
    reviewCount: 4120,
    tags: ['featured'],
    specs: {
      'Battery Life': 'Up to 30 hours',
      'Noise Cancelling': 'Yes, Dual Noise Sensor',
      'Bluetooth': 'Version 5.2',
      'Weight': '250g'
    },
    variants: [
      { id: 'var_black', label: 'Black', priceInPaise: 2999000, inStock: true },
      { id: 'var_silver', label: 'Platinum Silver', priceInPaise: 2999000, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_3', tenureMonths: 3, monthlyAmountInPaise: 999667, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 499833, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_boat_airdopes_511',
    name: 'Boat Airdopes 511',
    brand: 'Boat',
    category: 'electronics',
    imageUrl: 'https://picsum.photos/seed/boatairdopes511/600/600',
    images: [
      'https://picsum.photos/seed/boatairdopes511/600/600',
      'https://picsum.photos/seed/boatairdopes511_open/600/600',
      'https://picsum.photos/seed/boatairdopes511_bud/600/600'
    ],
    shortDescription: 'True wireless earbuds with immersive audio.',
    basePriceInPaise: 149900,
    rating: 4.1,
    reviewCount: 15300,
    tags: ['deal'],
    specs: {
      'Playback': 'Up to 24 hours',
      'Drivers': '10mm dynamic',
      'Water Resistance': 'IPX4',
      'Bluetooth': 'v5.0'
    },
    variants: [
      { id: 'var_black', label: 'Active Black', priceInPaise: 149900, inStock: true },
      { id: 'var_blue', label: 'Ocean Blue', priceInPaise: 149900, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_3', tenureMonths: 3, monthlyAmountInPaise: 49967, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
  {
    id: 'prod_lg_32_monitor',
    name: 'LG 32" Monitor',
    brand: 'LG',
    category: 'electronics',
    imageUrl: 'https://picsum.photos/seed/lg32monitor/600/600',
    images: [
      'https://picsum.photos/seed/lg32monitor/600/600',
      'https://picsum.photos/seed/lg32monitor_back/600/600',
      'https://picsum.photos/seed/lg32monitor_side/600/600'
    ],
    shortDescription: 'QHD resolution with HDR10 for crystal clear visuals.',
    basePriceInPaise: 2499900,
    rating: 4.5,
    reviewCount: 890,
    specs: {
      'Screen Size': '32 inches',
      'Resolution': '2560 x 1440',
      'Refresh Rate': '75Hz',
      'Panel Type': 'IPS'
    },
    variants: [
      { id: 'var_black', label: 'Black', priceInPaise: 2499900, inStock: true },
    ],
    emiPlans: [
      { id: 'emi_3', tenureMonths: 3, monthlyAmountInPaise: 833300, isNoCost: true, processingFeeInPaise: 0 },
      { id: 'emi_6', tenureMonths: 6, monthlyAmountInPaise: 416650, isNoCost: true, processingFeeInPaise: 0 },
    ],
  },
];
