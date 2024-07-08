'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import createClientClient from '@/lib/supabase/client';
import { useUser } from '@/lib/hooks/use-user';
import { useCart } from '@/lib/hooks/use-cart';
import { AppStatus } from '@/lib/enums';
import { API_ENDPOINTS } from '@/lib/constants';

const ClientInitialization: React.FC = () => {
  const client = createClientClient();
  const userState = useUser();
  const cartState = useCart();

  const initializeData = async () => {
    if (
      userState.status === AppStatus.Loading ||
      cartState.status === AppStatus.Loading
    ) {
      return;
    }

    // Set status to loading
    userState.setStatus(AppStatus.Loading);
    cartState.setStatus(AppStatus.Loading);

    const { data } = await client.auth.getUser();
    if (data?.user) {
      userState.setUserData(data.user);
      userState.setIsLoggedIn(true);

      try {
        const userCart = await axios.get(API_ENDPOINTS.CART);
        if (userCart?.data?.cart?.items?.length > 0) {
          // Pull cart items from the user's cart on the server to local
          cartState.initialize(userCart.data.cart.items);
          cartState.setCartId(userCart.data.cart.id);
        } else {
          // Push the local items to the server
          if (cartState.items.length > 0) {
            const data = cartState.items.map((item) => ({
              quantity: item.quantity,
              productVariantId: item.productVariantId,
              cartId: userCart?.data?.cart?.id,
            }));
            await axios.post(API_ENDPOINTS.CART, { data });
          }
        }
      } catch (error) {
        // Set status to error
        userState.setStatus(AppStatus.Error);
        cartState.setStatus(AppStatus.Error);
        return;
      }
    }
    // Set status to resolved
    userState.setStatus(AppStatus.Resolved);
    cartState.setStatus(AppStatus.Resolved);
  };

  useEffect(() => {
    initializeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState.isLoggedIn]);

  return <></>;
};

export default ClientInitialization;
