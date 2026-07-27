export type CategoryId = 'all' | 'burgers' | 'pizza' | 'fries' | 'drinks' | 'sandwiches' | 'deals';

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  calories?: number;
  prepTime?: string;
  customizations?: {
    buns?: CustomizationOption[];
    patties?: CustomizationOption[];
    cheeses?: CustomizationOption[];
    sauces?: CustomizationOption[];
    extras?: CustomizationOption[];
  };
}

export interface IngredientLayer {
  id: string;
  name: string;
  description: string;
  calories: number;
  flavorProfile: string;
  tagPosition: 'left' | 'right';
  yOffsetExpanded: number; // percentage offset when exploded
  color: string;
  imageOrIcon: string;
  layerImage?: string;
}

export interface BurgerPreset {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  calories: number;
  image?: string;
  layers: IngredientLayer[];
}

export interface CartItem {
  cartId: string;
  food: FoodItem;
  quantity: number;
  selectedOptions: {
    bun?: string;
    patty?: string;
    cheese?: string;
    sauce?: string;
    extras?: string[];
  };
  itemTotal: number;
  specialInstructions?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  rating: number;
  orderItem: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  notes?: string;
  paymentMethod: 'cash' | 'card' | 'applepay';
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  estimatedDeliveryTime: string;
  status: 'confirmed' | 'preparing' | 'cooking' | 'delivering' | 'delivered';
  createdAt: Date;
}
