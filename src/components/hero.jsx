import React from "react";
import Clips from "./utils/Clips.jsx";
import SocialLinks from "./utils/SocialLinks.jsx";

const Hero = ( {heroapi : {title, subtitle ,btntext, img, sociallinks, videos}}) =>{

    return(
        <>
            <div className="relative h-auto w-auto flex flex-col  mb-16">
                <div className="bg-theme clip-path h-[85vh]
                 lg:h-[75vh] md:h-[65vh] sm:h-[55vh]
                  w-auto absolute top-0 left-0 right-0 opacity-100 z-10  "></div>
                <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
                    <div className="grid items-center justify-items-center mt-28 md:mt-24">
                        <h1 className="text-6xl font-extrabold text-slate-200 drop-shadow-sm
                        lg:text5xl md:text-4xl sm:text-3xl xsm:text-2xl">{title}</h1>
                        <h1 className="text-6xl font-extrabold text-slate-200 drop-shadow-sm
                        lg:text5xl md:text-4xl sm:text-3xl xsm:text-2xl">{subtitle}</h1>
                        <button className="button-theme bg-slate-200 shadow-slate-200  rounded-xl my-5" type="button">{btntext}</button>
                        <div className=" ">
                            <div className=" grid items-center  gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] sm:top-[22vh]
                        left-[11%] xl:left-0 w-auto h-auto  ">
                            {videos?.map((val, i ) => (
                            <Clips
                                key={i}
                                imgsrc={val.imgsrc}
                                clip={val.clip}
                            />
                        ))}</div>
                        </div>
                        <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
                            {sociallinks?.map((val, i) => (
                            <SocialLinks
                            key={i}
                            icon={val.icon}/>
                        ))}</div>
                    </div>
                    <div>
                        <img src={img} alt="hero-img/img" className="w-auto h-[45vh] lg:h-[35vh]
                        sm:h-[20vh] xsm:h-[15vh] md:h-[25vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;