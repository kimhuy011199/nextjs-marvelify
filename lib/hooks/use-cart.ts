import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { CartLineItemType } from '@/lib/types';

export enum CartStatus {
  Idle = 'idle',
  Loading = 'loading',
  Ready = 'ready',
}

interface CartStore {
  cartId: string;
  items: CartLineItemType[];
  state: CartStatus;
  setStatus: (status: CartStatus) => void;
  getQuantity: (productVariantId: string) => number;
  getTotalQuantity: () => number;
  initialize: (items: CartLineItemType[]) => void;
  setCartId: (cartId: string) => void;
  addItem: (item: CartLineItemType) => void;
  removeItem: (productVariantId: string) => void;
  changeQuantityItem: (productVariantId: string, quantity: number) => void;
  calculateSubTotal: () => number;
  clear: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      cartId: '',
      items: [],
      state: CartStatus.Idle,
      setStatus: (status: CartStatus) => {
        set({ state: status });
      },
      getQuantity: (productVariantId) => {
        const item = get().items.find(
          (i) => i.productVariantId === productVariantId
        );
        return item ? item.quantity : 0;
      },
      getTotalQuantity: () => {
        return get().items.reduce((acc, item) => acc + item.quantity, 0);
      },
      initialize: (items: CartLineItemType[]) => {
        set({ items });
      },
      setCartId: (cartId) => {
        set({ cartId });
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
      clear: () => {
        set({ items: [], state: CartStatus.Idle, cartId: '' });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useCart };
