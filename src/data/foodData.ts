import { FoodItem, BurgerPreset, Review, GalleryItem } from '../types';

export const OFFICIAL_MENU_PICS = [
  {
    id: 'menu-page-1',
    title: 'Mr. Fries Main Menu Card - Page 1',
    subtitle: 'Burgers, Zinger Specials & Loaded Fries',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWny32BWSyzd3qv6wm1ctz2XlcppNN18J7zAr1aC1WdC8WxxlY-FQwqdB6TOxU0FHfMnwvd29ioEkxovoh_8RtDD4jTGN-nzZ-bq6YSF3Cur0-iHs2qcwsCHOCFPmpEqfv9h4_whWI38XjPp=s680-w680-h510-rw'
  },
  {
    id: 'menu-page-2',
    title: 'Mr. Fries Menu Card - Page 2',
    subtitle: '1-Meter Specialty Pizza, Pizzas & Deals',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm4IepPmsDXALl8O4w0MYB6MSDIONfQXssUTiHiGOhE8deFJ20NtA26XgSjHNE-7KFwUqT0kuIVJjz2qluuspyai5Dz85mW6zfNPZHt4qSSNX8M_FUov5RVFPLH2HcUj-q1piKIdMtgEMmW=s680-w680-h510-rw'
  },
  {
    id: 'menu-page-3',
    title: 'Mr. Fries Menu Card - Page 3',
    subtitle: 'Family Combos, Fried Chicken & Beverages',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkOBx3dRfKW7Q-rTJEHTIPPfKNoo1kmu623q27oj3RV4_W17CFfUFWIjW_FEyDPpid06aTdJGjT3aJMx_UydXG-XVDbgD6IWpZgZ7f-S2PjLHwEEu456oHJEuFKClW399TiJvDsgVI6ZoEa=s680-w680-h510-rw'
  }
];

export const BURGER_PRESETS: BurgerPreset[] = [
  {
    id: 'mr-fries-zinger',
    name: 'Mr. Fries Special Exploded Zinger Burger',
    subtitle: 'Triple-stacked extra crispy chicken fillet with secret spices, melted cheddar and house lava sauce',
    price: 480,
    calories: 890,
    image: 'https://lh3.googleusercontent.com/d/1vkIaTtUlTFHDQJ3cFAiu6Ui9Xp_km2m_',
    layers: [
      {
        id: 'layer-top-bun',
        name: 'Glazed Brioche Crown',
        description: 'Golden toasted sesame brioche bun brushed with butter',
        calories: 180,
        flavorProfile: 'Rich & Soft',
        tagPosition: 'right',
        yOffsetExpanded: -180,
        color: '#D97706',
        imageOrIcon: '🥯'
      },
      {
        id: 'layer-fire-sauce',
        name: 'Mr. Fries Secret Lava Mayo',
        description: 'House-made fiery smoky mayo with garlic chili crunch',
        calories: 90,
        flavorProfile: 'Spicy & Tangy',
        tagPosition: 'left',
        yOffsetExpanded: -130,
        color: '#EF4444',
        imageOrIcon: '🌶️'
      },
      {
        id: 'layer-lettuce-pickles',
        name: 'Fresh Iceberg & Dill Pickles',
        description: 'Crisp garden iceberg lettuce and tangy sour pickles',
        calories: 25,
        flavorProfile: 'Crunchy & Fresh',
        tagPosition: 'right',
        yOffsetExpanded: -80,
        color: '#22C55E',
        imageOrIcon: '🥬'
      },
      {
        id: 'layer-cheddar-1',
        name: 'Melted Cheddar Cheese Slice',
        description: 'Warm melted cheddar cheese layer',
        calories: 140,
        flavorProfile: 'Rich Cheese',
        tagPosition: 'left',
        yOffsetExpanded: -30,
        color: '#F59E0B',
        imageOrIcon: '🧀'
      },
      {
        id: 'layer-patty-1',
        name: 'Crispy Buttermilk Zinger Fillet',
        description: '100% fresh chicken breast fried to extra crunch perfection',
        calories: 310,
        flavorProfile: 'Crispy & Spicy',
        tagPosition: 'right',
        yOffsetExpanded: 20,
        color: '#B45309',
        imageOrIcon: '🍗'
      },
      {
        id: 'layer-bottom-sauce',
        name: 'Garlic Cream Mayo',
        description: 'Smooth garlic mayo sauce spread on seared bun',
        calories: 50,
        flavorProfile: 'Smooth & Savory',
        tagPosition: 'left',
        yOffsetExpanded: 120,
        color: '#F3F4F6',
        imageOrIcon: '🧄'
      },
      {
        id: 'layer-bottom-bun',
        name: 'Toasted Bottom Bun',
        description: 'Butter seared bottom brioche bun',
        calories: 150,
        flavorProfile: 'Warm Toast',
        tagPosition: 'right',
        yOffsetExpanded: 170,
        color: '#B45309',
        imageOrIcon: '🍔'
      }
    ]
  }
];

export const FOOD_MENU: FoodItem[] = [
  {
    id: 'food-1',
    name: 'Mr. Fries Special Zinger Burger',
    category: 'burgers',
    price: 480,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 428,
    description: 'Crispy double-breaded chicken fillet marinated in secret spices, topped with iceberg, melted cheese & signature Mr. Fries sauce.',
    image: 'https://lh3.googleusercontent.com/d/1vkIaTtUlTFHDQJ3cFAiu6Ui9Xp_km2m_',
    isPopular: true,
    isSpicy: true,
    calories: 890,
    prepTime: '10-12 min',
    customizations: {
      buns: [
        { id: 'bun-brioche', name: 'Sesame Brioche', price: 0 },
        { id: 'bun-regular', name: 'Standard Bun', price: 0 }
      ],
      patties: [
        { id: 'patty-single', name: 'Single Zinger Fillet', price: 0 },
        { id: 'patty-double', name: 'Double Zinger Fillet (+ Rs 180)', price: 180 }
      ],
      cheeses: [
        { id: 'ch-cheddar', name: 'Cheddar Cheese Slice', price: 0 },
        { id: 'ch-double', name: 'Extra Cheese (+ Rs 50)', price: 50 }
      ],
      extras: [
        { id: 'ex-fries', name: 'Add Small Fries (+ Rs 120)', price: 120 },
        { id: 'ex-drink', name: 'Add Cold Drink (+ Rs 80)', price: 80 }
      ]
    }
  },
  {
    id: 'food-2',
    name: 'Famous 1-Meter Special Pizza',
    category: 'pizza',
    price: 2499,
    originalPrice: 2800,
    rating: 5.0,
    reviewsCount: 612,
    description: 'The iconic 1-Meter Long Giant Pizza! Loaded with 3 choice flavor toppings, rich mozzarella cheese, olives, jalapenos and garlic crust.',
    image: 'https://lh3.googleusercontent.com/d/1F7iXhkImazyMUsQ_C1CKPIrCtEf1_bO5',
    isPopular: true,
    calories: 2200,
    prepTime: '20-25 min'
  },
  {
    id: 'food-3',
    name: 'Mr. Fries Loaded Fries Special',
    category: 'fries',
    price: 550,
    originalPrice: 650,
    rating: 5.0,
    reviewsCount: 820,
    description: 'Crispy skin-on fries piled high with diced zinger chicken pieces, liquid cheddar cheese lava, jalapeños & house dip.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    isSpicy: true,
    calories: 650,
    prepTime: '8-10 min'
  },
  {
    id: 'food-4',
    name: 'Special Oven Baked Pizza (Large)',
    category: 'pizza',
    price: 1299,
    originalPrice: 1450,
    rating: 4.9,
    reviewsCount: 390,
    description: 'Oven baked fresh dough pizza with shredded tikka chicken, bell peppers, mozzarella pull & oregano sprinkle.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    calories: 1400,
    prepTime: '18 min'
  },
  {
    id: 'food-5',
    name: 'Cheese Zinger Burger Deluxe',
    category: 'burgers',
    price: 520,
    rating: 4.8,
    reviewsCount: 290,
    description: 'Ultra juicy zinger fillet topped with double cheddar cheese slices, mayo relish and crispy lettuce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    isPopular: false,
    calories: 780,
    prepTime: '10 min'
  },
  {
    id: 'food-6',
    name: 'Family Mega Combo Deal',
    category: 'deals',
    price: 1850,
    originalPrice: 2200,
    rating: 5.0,
    reviewsCount: 510,
    description: '2 x Mr. Fries Zinger Burgers + 1 x Medium Specialty Pizza + 1 x Large Loaded Fries + 1.5L Cold Drink.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    isPopular: true,
    calories: 2800,
    prepTime: '20 min'
  },
  {
    id: 'food-7',
    name: 'Crispy Fried Chicken (4 Pieces)',
    category: 'deals',
    price: 750,
    rating: 4.8,
    reviewsCount: 195,
    description: '4 pieces of golden crunchy fried chicken served with garlic dip and fresh dinner roll.',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    isSpicy: true,
    calories: 920,
    prepTime: '12 min'
  },
  {
    id: 'food-8',
    name: 'Club Sandwich & Fries',
    category: 'sandwiches',
    price: 420,
    rating: 4.7,
    reviewsCount: 180,
    description: 'Triple decker toasted sandwich filled with grilled chicken, egg, cheese, lettuce & fries side.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    calories: 580,
    prepTime: '10 min'
  },
  {
    id: 'food-9',
    name: 'Plain Salted Crispy Fries (Large)',
    category: 'fries',
    price: 250,
    rating: 4.8,
    reviewsCount: 340,
    description: 'Classic hot salted potato fries cooked in 100% vegetable oil.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09z-PyHjIqxrO0vyuVZOqFtFpGNmGCKweMxZZy1RJuEMGUMIqb2JZnSkP&s=10',
    calories: 380,
    prepTime: '5 min'
  },
  {
    id: 'food-10',
    name: 'Chilled Cold Drink (1.5 Liter)',
    category: 'drinks',
    price: 180,
    rating: 5.0,
    reviewsCount: 400,
    description: 'Selection of Pepsi, 7Up, or Mirinda served icy cold.',
    image: 'https://lh3.googleusercontent.com/d/16iqZKTyNIB9XbDK_EN8fy8OqXqsqlZHS',
    calories: 180,
    prepTime: '1 min'
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'rev-dr-fahad',
    name: 'Dr. Fahad Asif',
    role: 'Local Guide • 41 reviews',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'New in Dera Ismail Khan? Searching for some fast food? I think you bumped at the right spot. Visit the place, it’s a family friendly restaurant, order a zinger burger but make sure you meet the chef first and request for something special. I ordered two zingers and a plate of fries which I loved the most. The restaurant has a limited menu but is one of its own kind and you are definitely going to love it. It’s underrated so please appreciate them by giving some glossy reviews. Thank me later',
    rating: 5,
    orderItem: '2 Zinger Burgers & Special Loaded Fries',
    date: '3 years ago'
  },
  {
    id: 'rev-ms-hassan',
    name: 'M s HasSan',
    role: '3 reviews • Verified Foodie',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'Best place for Pizza in city, great taste, specialized in 1 meter pizza and loaded fries, other fast food items are also great. Offers good deals, time to time 😉',
    rating: 5,
    orderItem: '1-Meter Pizza & Loaded Fries (Group of 4)',
    date: '2 months ago'
  },
  {
    id: 'rev-shoaib-hassan',
    name: 'Shoaib Hassan',
    role: 'Local Guide • 18 reviews',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    comment: 'Fries and Zinger burgers are the items i have tried so far. Taste is good. Service is good. Prices are economical. Only reason why i am not giving 5 star rating is the location of this fast good setup, one has to cross congested chota bazar streets to reach here. Overall recommendable',
    rating: 4,
    orderItem: 'Zinger Burger & Crunchy Fries',
    date: '4 years ago'
  },
  {
    id: 'rev-shah-zaib',
    name: 'Shah Zaib',
    role: 'Local Guide • 186 reviews',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
    comment: 'Mr. Fries Zinger Burger and Loaded fries 🍟 are Love ❣️ Prices are also reasonable. Services needs some improvement. Recommended 💯',
    rating: 5,
    orderItem: 'Special Zinger Burger & Loaded Fries 🍟',
    date: '2 years ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mr. Fries Famous Zinger Burger',
    category: 'Burgers',
    imageUrl: 'https://lh3.googleusercontent.com/d/1vkIaTtUlTFHDQJ3cFAiu6Ui9Xp_km2m_',
    caption: 'Crispy double-breaded chicken fillet with secret spices.'
  },
  {
    id: 'gal-2',
    title: 'Iconic 1-Meter Pizza Specialty',
    category: 'Pizza',
    imageUrl: 'https://lh3.googleusercontent.com/d/1F7iXhkImazyMUsQ_C1CKPIrCtEf1_bO5',
    caption: '1-Meter long giant pizza loaded with mozzarella cheese pull.'
  },
  {
    id: 'gal-3',
    title: 'Mr. Fries Special Loaded Fries 🍟',
    category: 'Fries',
    imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    caption: 'Loaded fries with zinger chicken chunks & melted cheddar.'
  },
  {
    id: 'gal-4',
    title: 'Google Maps Location Photo 1',
    category: 'Restaurant',
    imageUrl: 'https://maps.app.goo.gl/X5XvKoWcXjtgtxis5',
    caption: 'Visit Mr. Fries at North Circular Road, D.I. Khan.'
  },
  {
    id: 'gal-5',
    title: 'Google Maps Photo 2',
    category: 'Ambience',
    imageUrl: 'https://maps.app.goo.gl/CmXV29YD2ZiYJsQQ8',
    caption: 'Family friendly dining atmosphere.'
  },
  {
    id: 'gal-6',
    title: 'Google Maps Photo 3',
    category: 'Specialties',
    imageUrl: 'https://maps.app.goo.gl/mansGbEyE12r7PHx9',
    caption: 'Hot fresh zinger & pizza combos.'
  }
];

export const GOOGLE_MAPS_LINKS = [
  { label: 'Mr. Fries Location Photo 1', url: 'https://maps.app.goo.gl/X5XvKoWcXjtgtxis5' },
  { label: 'Mr. Fries Front Setup 2', url: 'https://maps.app.goo.gl/CmXV29YD2ZiYJsQQ8' },
  { label: 'Mr. Fries Dining Area 3', url: 'https://maps.app.goo.gl/mansGbEyE12r7PHx9' },
  { label: 'Mr. Fries Kitchen & Chef 4', url: 'https://maps.app.goo.gl/sxp8waCfHCYtEhKd9' },
  { label: 'Mr. Fries Fresh Zinger 5', url: 'https://maps.app.goo.gl/4hHN3ZPcA6PL12bh6' },
  { label: 'Mr. Fries 1-Meter Pizza 6', url: 'https://maps.app.goo.gl/YhySkJ9rosffRRpx7' },
  { label: 'Mr. Fries Loaded Fries 7', url: 'https://maps.app.goo.gl/b74jRNQqEP8MEs8P7' }
];

export const STORE_LOCATIONS = [
  {
    id: 'mrfries-dikhan',
    name: 'Mr. Fries - Dera Ismail Khan',
    address: 'RWM5+VR6, North Circular Road, Dera Ismail Khan, 29111, Pakistan',
    phone: '03212158262',
    distance: '0.0 km',
    estDeliveryTime: '15-20 min',
    status: 'Open Daily • 12 PM - 1 AM',
    lat: 31.8315,
    lng: 70.9018
  }
];

export const BEST_SELLERS = FOOD_MENU.filter((item) => item.isPopular);

export const WHY_CHOOSE_US = [
  {
    id: 'why-1',
    icon: '⚡',
    title: 'Lightning Fast Delivery',
    description: 'Hot and fresh delivery across Dera Ismail Khan in 20-30 minutes.'
  },
  {
    id: 'why-2',
    icon: '🥩',
    title: '100% Fresh Meat & Ingredients',
    description: 'Crispy zinger fillets & fresh patties prepared daily with zero frozen compromises.'
  },
  {
    id: 'why-3',
    icon: '🍕',
    title: 'Giant 1-Meter Pizza Specialty',
    description: 'Famous in D.I. Khan for our colossal 1-Meter pizza loaded with premium toppings.'
  },
  {
    id: 'why-4',
    icon: '🍟',
    title: 'Loaded & Cheesy Fries',
    description: 'Signature loaded fries drenched in melted cheese, special sauces & chicken chunks.'
  },
  {
    id: 'why-5',
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Friendly Atmosphere',
    description: 'Spacious dining hall on North Circular Road perfect for family gatherings.'
  },
  {
    id: 'why-6',
    icon: '💰',
    title: 'Pocket Friendly Prices',
    description: 'Generous portions & economical deals designed for food lovers and students.'
  }
];
