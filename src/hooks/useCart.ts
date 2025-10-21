import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  cartCount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartCount: 0,

      addToCart: (product) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            cartCount: get().cartCount + 1,
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
            cartCount: get().cartCount + 1,
          });
        }
      },

      removeFromCart: (productId) => {
        const items = get().items;
        const item = items.find((i) => i.id === productId);
        
        set({
          items: items.filter((item) => item.id !== productId),
          cartCount: get().cartCount - (item?.quantity || 0),
        });
      },

      updateQuantity: (productId, quantity) => {
        const items = get().items;
        const oldItem = items.find((i) => i.id === productId);
        const oldQuantity = oldItem?.quantity || 0;

        if (quantity <= 0) {
          get().removeFromCart(productId);
        } else {
          set({
            items: items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
            cartCount: get().cartCount - oldQuantity + quantity,
          });
        }
      },

      clearCart: () => {
        set({ items: [], cartCount: 0 });
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = Math.floor(item.price * (1 - item.discount / 100));
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
