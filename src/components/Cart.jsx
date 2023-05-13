import React from 'react';
import CartCount from "./Cart/CartCount.jsx";
import CartEmpty from "./Cart/CartEmpty.jsx";
import CartItem from "./Cart/CartItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems, selectCartState, setCloseCart} from "../App/CartSlice.js";
import item from "./utils/Item.jsx";

const Cart = () => {

    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState);
    const cartItems = useSelector(selectCartItems);

    console.log(cartItems);


    const onCartToggle = () => {
        dispatch(
            setCloseCart({
                cartState: false,
            })
        );
    };
    return (
        <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
            ifCartState
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible translate-x-8"
        }`}>
            <div className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
                ifCartState
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-8"
            }`}>
                <CartCount onCartToggle={onCartToggle} />

                {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
                    <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                        {cartItems?.map((item, i) => (
                            <CartItem key={i} item={item} />
                        ))}
                    </div>
                </div>}
                {cartItems?.length === 0 ? null : <CartItem item={item} />}

                <CartEmpty />
                <CartItem />

            </div>
        </div>
        </>
    )

}
export default Cart;