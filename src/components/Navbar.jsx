import React, {useEffect} from 'react';
import {MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png"
import {useDispatch} from "react-redux";
import {setOpenCart} from "../App/CartSlice.js";


const Navbar = () => {

    const [navState, setNavState] = React.useState(false);
    const dispatch = useDispatch();
    const [isCartOpen, setIsCartOpen] = React.useState(false);


    const onCartToggle = () => {
        setIsCartOpen(!isCartOpen);
        dispatch(setOpenCart({
            cartState: !isCartOpen
        }));
    };
    const onNavScroll = () => {
        if(window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',onNavScroll);
        return () => window.removeEventListener('scroll',onNavScroll);
    },[])

  return (
     <>
        <header className={!navState  ? 'absolute top-7 left-0 right-0 z-50 opacity-100' :
        'fixed top-0 left-0 right-0  h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
        }>

            <nav className="flex items-center justify-between nike-container">
                <div className="flex items-center">
                    <img
                    src={logo}
                    alt="logo/img"
                    className={`w-16 h-auto ${navState && 'filter brightness-0'}`}/>
                </div>
                <ul className="flex items-center justify-center gap-2">
                    <li className="grid items-center">
                        <MagnifyingGlassIcon className={`icon-style ${navState && " text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className="grid items-center">
                        <HeartIcon className={`icon-style ${navState && " text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className="grid items-center">
                        <button type="button" onClick={onCartToggle} className="border-none outline-none active:scale-110 transition-all duration-300 relative">
                            <ShoppingBagIcon className={`icon-style ${navState && " text-slate-900 transition-all duration-300"}`}/>
                            <div className={`right-0 top-4 shadow absolute w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex justify-center items-center hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'} `}>{/* Cart item count */}</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>

     </>
      )
}

export default Navbar;