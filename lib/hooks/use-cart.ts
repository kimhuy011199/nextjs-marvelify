import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CartLineItemType } from '@/lib/types';

interface CartStore {
  items: CartLineItemType[];
  getQuantity: (productVariantId: string) => number;
  getTotalQuantity: () => number;
  addItem: (item: CartLineItemType) => void;
  removeItem: (productVariantId: string) => void;
  changeQuantityItem: (productVariantId: string, quantity: number) => void;
  calculateSubTotal: () => number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      getQuantity: (productVariantId) => {
        const item = get().items.find(
          (i) => i.productVariantId === productVariantId
        );
        return item ? item.quantity : 0;
      },
      getTotalQuantity: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      addItem: (item) => {
        const existingItem = get().items.find(
          (i) => i.productVariantId === item.productVariantId
        );

        if (!existingItem) {
          set({ items: [...get().items, item] });
        } else {
          const updatedItems = get().items.map((i) =>
            i.productVariantId === item.productVariantId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
          set({ items: updatedItems });
        }
      },
      removeItem: (productVariantId) => {
        const updatedItems = get().items.filter(
          (i) => i.productVariantId !== productVariantId
        );
        set({ items: updatedItems });
      },
      changeQuantityItem: (productVariantId, quantity) => {
        const updatedItems = get().items.map((i) =>
          i.productVariantId === productVariantId ? { ...i, quantity } : i
        );
        set({ items: updatedItems });
      },
      calculateSubTotal: () => {
        return get().items.reduce(
          (acc, item) =>
            acc + item.productVariant.discountedPrice * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useCart };
