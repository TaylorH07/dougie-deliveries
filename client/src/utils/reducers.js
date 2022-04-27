import { useReducer } from "react";

import {
    PRODUCT_UPDATE,
    ADD_ITEMS,
    ADD_MULTIPLE_ITEMS,
    REMOVE_ITEMS,
    CLEAR_ALL_ITEMS,
    CART_QUANTITY_UPDATE,
    CART_TOGGLE,
    CATEGORY_UPDATE,
    CURRENT_CATEGORY_UPDATE
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE:
            return {
                ...state,
                products: [...action.products],
            };
        
        case ADD_ITEMS:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        
        case ADD_MULTIPLE_ITEMS:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };
        case CART_QUANTITY_UPDATE:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity
                    }
                    return product
                })
            };
        case REMOVE_ITEMS:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        case CLEAR_ALL_ITEMS:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        case CART_TOGGLE:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        case CATEGORY_UPDATE:
            return {
                ...state,
                categories: [...action.categories],
            };
        case CURRENT_CATEGORY_UPDATE:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
        
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}