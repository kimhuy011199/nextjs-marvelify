export type VariantType = {
  id: string;
  productHandle: string;
  productName: string;
  name: string;
  price: number;
  priceAfterDiscounted: number;
  currency: string;
  availableQuantity: number;
  previewImg: string;
};

export type ProductType = {
  id: string;
  handle: string;
  createdAt: string;
  name: string;
  description: string;
  isFeatured: boolean;
  isAvailableForSale: boolean;
  features: string;
  previewImg: string;
  variants: VariantType[];
};

export type CartLineItemType = {
  productVariantId: string;
  productVariant: VariantType;
  quantity: number;
};

export type CartType = {
  items: CartLineItemType[];
};
