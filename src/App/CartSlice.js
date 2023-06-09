import {createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [], // Let Suppose Database
    cartTotalAmount: 0,
    cartTotalQantity: 0,
};



const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

           if (itemIndex >= 0) {
               state.cartItems[itemIndex].cartQuantity += 1;
               toast.success(`Item QTY Increased `);
           } else {
               const temp = {...action.payload, cartQuantity: 1};
               state.cartItems.push(temp);

               toast.success(` ${action.payload.title} added to Cart`)
           }
           localStorage.setItem("cart",JSON.stringify(state.cartItems));
        }
    },
})

export const {setOpenCart, setCloseCart,setAddItemToCart} = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;

