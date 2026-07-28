import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuCardsViewer } from './components/MenuCardsViewer';
import { FeaturedFoods } from './components/FeaturedFoods';
import { BestSellers } from './components/BestSellers';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MenuSection } from './components/MenuSection';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { AboutUs } from './components/AboutUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { OffersSection } from './components/OffersSection';
import { DeliveryMap } from './components/DeliveryMap';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { AmbientEffects } from './components/AmbientEffects';
import { FoodItem, CartItem, OrderDetails } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [customizingFood, setCustomizingFood] = useState<FoodItem | null>(null);
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(null);
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>('');
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (food: FoodItem) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.food.id === food.id && !item.selectedOptions.bun
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].itemTotal = updated[existingIndex].quantity * food.price;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        cartId: `${food.id}-${Date.now()}`,
        food,
        quantity: 1,
        selectedOptions: {},
        itemTotal: food.price
      };
      setCartItems((prev) => [...prev, newItem]);
    }

    showToast(`Added "${food.name}" to cart!`);
  };

  const handleAddToCartCustomized = (cartItem: CartItem) => {
    setCartItems((prev) => [...prev, cartItem]);
    showToast(`Added custom "${cartItem.food.name}" to cart!`);
  };

  const handleUpdateQuantity = (cartId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId) {
          const unitPrice = item.itemTotal / item.quantity;
          return {
            ...item,
            quantity: qty,
            itemTotal: unitPrice * qty
          };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const handleApplyPromoCode = (code: string) => {
    const cleanCode = code.toUpperCase().trim();
    if (cleanCode === 'FASTBITE30') {
      setAppliedPromoCode('FASTBITE30');
      setDiscountPercentage(30);
      showToast('🎉 Promo code FASTBITE30 applied! 30% OFF!');
    } else if (cleanCode === 'WELCOME15') {
      setAppliedPromoCode('WELCOME15');
      setDiscountPercentage(15);
      showToast('🎉 Promo code WELCOME15 applied! 15% OFF!');
    } else {
      showToast('Invalid promo code. Try FASTBITE30!');
    }
  };

  const handleOrderPlaced = (order: OrderDetails) => {
    setActiveOrder(order);
    setCartItems([]);
    showToast(`Order #${order.orderId} Placed! Kitchen is cooking...`);

    // Simulate order progress status step changes automatically
    setTimeout(() => {
      setActiveOrder((prev) => (prev ? { ...prev, status: 'preparing' } : null));
    }, 8000);

    setTimeout(() => {
      setActiveOrder((prev) => (prev ? { ...prev, status: 'cooking' } : null));
    }, 18000);

    setTimeout(() => {
      setActiveOrder((prev) => (prev ? { ...prev, status: 'delivering' } : null));
    }, 30000);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full bg-black text-white font-sans selection:bg-red-500 selection:text-white relative overflow-x-hidden">
      {/* Canvas Particle Ambient Background */}
      <AmbientEffects />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-3 rounded-2xl shadow-2xl border border-red-400/50 text-xs font-extrabold flex items-center gap-2 backdrop-blur-md"
          >
            <CheckCircle2 className="w-4 h-4 text-amber-300" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Order Live Tracker Floating Pill */}
      {activeOrder && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 right-6 z-40 bg-black/90 border border-amber-500/50 p-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs backdrop-blur-xl cursor-pointer hover:border-amber-400 max-w-[calc(100vw-2rem)]"
          onClick={() => setIsCheckoutOpen(true)}
        >
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
          <div>
            <div className="font-extrabold text-amber-300 flex items-center gap-1">
              <span>Order #{activeOrder.orderId}</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full uppercase">
                {activeOrder.status}
              </span>
            </div>
            <p className="text-[10px] text-gray-400">Click to view real-time radar tracker</p>
          </div>
        </motion.div>
      )}

      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracker={() => setIsCheckoutOpen(true)}
        hasActiveOrder={!!activeOrder}
      />

      {/* Main Page Sections */}
      <main className="w-full max-w-full overflow-x-hidden relative z-10">
        <HeroSection onAddToCart={handleAddToCart} />
        <MenuCardsViewer />
        <FeaturedFoods
          onAddToCart={handleAddToCart}
          onCustomizeItem={(food) => setCustomizingFood(food)}
        />
        <BestSellers onAddToCart={handleAddToCart} />
        <WhyChooseUs />
        <MenuSection
          onAddToCart={handleAddToCart}
          onCustomizeItem={(food) => setCustomizingFood(food)}
        />
        <AboutUs />
        <ReviewsSection />
        <GallerySection />
        <OffersSection onApplyPromoCode={handleApplyPromoCode} />
        <DeliveryMap />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        appliedPromoCode={appliedPromoCode}
        onApplyPromoCode={handleApplyPromoCode}
        discountPercentage={discountPercentage}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountPercentage={discountPercentage}
        onOrderPlaced={handleOrderPlaced}
        activeOrder={activeOrder}
      />

      {customizingFood && (
        <ItemCustomizerModal
          food={customizingFood}
          onClose={() => setCustomizingFood(null)}
          onAddToCartCustomized={handleAddToCartCustomized}
        />
      )}
    </div>
  );
}
