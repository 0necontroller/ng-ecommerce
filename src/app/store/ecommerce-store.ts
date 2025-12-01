import { computed } from '@angular/core'
import { IProduct } from '../models/product.model'
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals'
import { produce } from 'immer'

export type EcommerceStateType = {
  cart: IProduct[]
  wishlist: IProduct[]
  userLoggedIn: boolean
  userName: string
  userEmail: string
}

const initialState: EcommerceStateType = {
  cart: [],
  wishlist: [],
  userLoggedIn: false,
  userName: '',
  userEmail: '',
}
export const EcommerceStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialState),
  withComputed((state) => ({
    cartItemsCount: computed(() => state.cart().length),
    wishlistItemsCount: computed(() => state.wishlist().length),
  })),
  withMethods((state) => ({
    addToCart: signalMethod<IProduct>((product) => {
      const updatedCart = produce(state.cart(), (draft) => {
        if (!draft.find((item) => item.id === product.id)) {
          draft.push(product)
        }
      })

      patchState(state, {
        cart: updatedCart,
      })
    }),

    removeFromCart: signalMethod<number>((productId) => {
      const updatedCart = produce(state.cart(), (draft) => {
        const index = draft.findIndex((item) => item.id === productId)
        if (index !== -1) {
          draft.splice(index, 1)
        }
      })

      patchState(state, {
        cart: updatedCart,
      })
    }),

    toggleWishlist: signalMethod<IProduct>((product) => {
      const updatedWishlist = produce(state.wishlist(), (draft) => {
        const index = draft.findIndex((item) => item.id === product.id)
        if (index !== -1) {
          draft.splice(index, 1)
        } else {
          draft.push(product)
        }
      })

      patchState(state, {
        wishlist: updatedWishlist,
      })
    }),

    setUserInfo: signalMethod<{ name: string; email: string }>((userInfo) => {
      patchState(state, {
        userName: userInfo.name,
        userEmail: userInfo.email,
        userLoggedIn: true,
      })
    }),

    signOut: signalMethod(() => {
      patchState(state, {
        userName: '',
        userEmail: '',
        userLoggedIn: false,
        cart: [],
        wishlist: [],
      })
    }),
  })),
)
