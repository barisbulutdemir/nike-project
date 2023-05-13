import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import {useDispatch} from "react-redux";
import {setAddItemToCart} from "../../App/CartSlice.js";

const Item = ({ifExist, id, color, shadow, title, text, img, btn, rating, price }) => {

  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = {id, title, text, img, color, shadow,price};
    dispatch(setAddItemToCart(item));
  }



  return (
    <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center
      ${ ifExist ? 'justify-items-start' : 'justify-items-center'} 
        rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 `}>
      <div className={`grid items-center  ${ ifExist ? 'justify-items-start' : 'justify-items-center'} `}>
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow ">{title} </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>

        {/* Price start */}
        <div className="flex items-center mt-2">
          <div className="flex items-center justify-between w-28">

            <h1 className="flex items-center bg-white/80 rounded px-1 ml-5 font-medium blur-effect-theme">${price}</h1>
          </div>
          <div className="mr-3">
            <h1 className=" flex items gap-1 text-slate-200">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4  text-slate-200" />
              {rating}
            </h1>
          </div>
        </div>

        {/* Price end */}


        {/* Button start */}

        <div className="flex items-center gap-3 my-2 ml-8">
          <button type="button" className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          onClick={() => onAddToCart()
          }>
            <ShoppingBagIcon className="icon-style text-slate-900" />{" "}
          </button>
          <button type="button" className="bg-white/90 blur-effect-theme button-theme px-2 shadow shadow-sky-200 text-black ">
            {btn}
          </button>
        </div>
        {/* Button end */}
      </div>
      <div className={`flex items-center ${ifExist ? 'absolute top-5 right-1' : 'justify-center'} `}>
        <img src={img} alt={`img/item-img/${id}`} className={` h-36 w-64 transitions-theme hover:rotate-12 ${ifExist ? 'h-auto w-64 lg-w-56 md:w-48 -rotate-[35deg]':'h-36 w-64 '}`} />
      </div>
    </div>
  );
};

export default Item;
