import { createSlice } from '@reduxjs/toolkit';
import productData from '../productData';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
    likedItem: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            let findInItem = state.items.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                if (findInItem >= 0) {
                state.items[findInItem].addedCart = false;
                }
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)                        
            } else {
                if (findInItem >= 0) {
                    state.items[findInItem].addedCart = true;
                }
                state.cart.push({ ...action.payload, quantity: 1, addedCart: true });
                
            }
        },
        getCartTotal: (state) => {
            let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                const {price, quantity} = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity +=quantity;
                return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },
        increaseQuantity: (state , action ) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id){
                    return {...item , quantity : item.quantity+1}
                }
            })

        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
            let findInItem = state.items.findIndex((item) => item.id === action.payload.id)
            state.items[findInItem].addedCart = false;
        },

        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.quantity>1){
                    return {...item , quantity : item.quantity-1}
                }else{
                    alert("You reached the minimum")
                    return item
                }
            })
        },

        likedItems: (state,action) => {
            let findInLikedItems = state.likedItem.findIndex((item) => item.id === action.payload.id)
            let findInCart = state.cart.findIndex((item) => item.id === action.payload.id)
            if(findInLikedItems < 0){
                state.likedItem.push({...action.payload, liked: true})
                state.cart[findInCart].liked = true;
            } else{
                state.likedItem = state.likedItem.filter((item) => item.id !== action.payload.id)
                state.cart[findInCart].liked = false;   
                
            }
        },
    },
         
        
    }
);

export const { addToCart, increaseQuantity, decreaseQuantity , removeItem, getCartTotal, likedItems } = cartSlice.actions;

export default cartSlice.reducer;

