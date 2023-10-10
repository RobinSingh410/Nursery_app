import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_CART,INCREMENT,DECREMENT } from "./constants";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST,ADD_ADDRESS,DELETE_ADDRESS } from "./constants";
import { ADD_ORDER,DELETE_ORDER } from "./constants";

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        data: item,
    }
}

export function removeFromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item,
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART,
        
    }
}

export function addToWishlist(item) {
    return {
        type: ADD_TO_WISHLIST,
        data: item,
    }
}

export function removeFromWishlist(item) {
    return {
        type: REMOVE_FROM_WISHLIST,
        data: item,
    }
}

export function addAddress(item) {
    return {
        type: ADD_ADDRESS,
        data: item,
    }
}

export function removeAddress(item) {
    return {
        type: DELETE_ADDRESS,
        data: item,
    }
}

export function increment(item) {
    return {
        type: INCREMENT,
        data: item,
    }
}

export function decrement(item) {
    return {
        type: DECREMENT,
        data: item,
    }
}

export function addorder(item) {
    return {
        type: ADD_ORDER,
        data: item,
    }
}

export function deleteorder(item) {
    return {
        type: DELETE_ORDER,
        data: item,
    }
}