import React, { useCallback, useEffect, useRef, useState } from "react";
import properties from "../../home.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anime from "animejs";
import helmetLeft from "../../../../images/hero/helmet_left.png";
import helmetFront from "../../../../images/hero/helmet_front.png";
import helmetRight from "../../../../images/hero/helmet_right.png";
import { Box, Container, Typography } from "@mui/material";
import whiteLogo from "../../../../images/logo/logo_white.png";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileView from "../../../../components/mobileview/MobileView";
import { useStateContext } from "../../../../context";
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import blur from '../../../../images/hero/blur.jpg'
import i1 from '../../../../images/hero/DSC03192.JPG'
import i2 from '../../../../images/hero/DSC03276.JPG'
import i3 from '../../../../images/hero/DSC03309.JPG'
import i4 from '../../../../images/hero/DSC03314.JPG'
import i5 from '../../../../images/hero/DSC03321.JPG'
import i6 from '../../../../images/hero/DSC03347.JPG'
import i7 from '../../../../images/hero/DSC03422.JPG'
import i8 from '../../../../images/hero/DSC03426.JPG'
import i9 from '../../../../images/hero/DSC03427.JPG'
import i10 from '../../../../images/hero/DSC03433.JPG'
import i11 from '../../../../images/hero/DSC03440.JPG'
import i12 from '../../../../images/hero/DSC04277.JPG'
import i13 from '../../../../images/hero/DSC04280.JPG'
import car from '../../../../images/hero/jeff-cooper-TsQfovTCM8E-unsplash-removebg.png'
import { Car } from "../../../../components/Car Animation/Car";
import { StaticHeader } from "../../../../components/Header";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import ScrollDown from "../../../../assets/scrolldown.gif";
import gsap from "gsap";
import useGsap from "../../../../hooks/useGsap";
import { FlowFieldCanvas } from "../../../../components";
import Header, { MenuItems } from "../../../../components/Header";
import Marquee from "react-fast-marquee";
import DividerSVG from "../../../../assets/divider.svg";
import StarSVG from "../../../../assets/star.svg";
import { getHomeData } from "../../../../services/HomeDataAPI"; //sponsors from CMS
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { Grok } from "../../../../components/Grok Animation/Grok";

const DUMMY_DATA = [
  {
    id: 0,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Maximum Performance",
    image: helmetLeft,
  },
  {
    id: 1,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Overtaking Competetion",
    image: helmetFront,
  },
  {
    id: 2,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Reliable & Aerodynamic",
    image: helmetRight,
  },
];

const Hero = ({ props }) => {
  const containerRef = useRef(null);

  return (
    <section id="home" className="overflow-hidden relative bg-black">
      <div className="root">
        <div className="absolute top-0 left-0 -z-0">
          {/* <FlowFieldCanvas /> */}
        </div>
        <div>
          <div>
            <MainItem />
          </div>
        </div>
      </div>
    </section>
  );
};

function MainItem() {
  
  //taking the screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { drawerOpen, handleOpenAndClose } = useStateContext();
  const [mobile , setView] = useState(false)

  const handleClick = ()=>{
    setView((prev)=>!prev)
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize((prevSize) => {
        const newSize = window.innerWidth;
        // Perform additional actions if needed
        // console.log(newSize);
        return newSize;
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" p-0 md:p-7 relative sm:h-screen sm:w-full sm:pl-32 sm:pr-32">
      <div className="w-full mx-auto flex flex-col items-center justify-center">
        <div className="appbar overflow-hidden">
          {screenSize < "431" ? (
            <div className="flex justify-around items-center gap-40">
              <img
                className="logo z-40 w-[100px] block"
                src={whiteLogo}
                alt="nitk racing logo"
              />
              {!drawerOpen ? (
                <RxHamburgerMenu size={24} onClick={()=>handleOpenAndClose()} />
              ) : (
                <FiX size={24} onClick={()=>handleOpenAndClose()} />
              )}
            </div>
          ) : screenSize < "900" && screenSize > "430" ? (
            <div className="flex justify-around items-center gap-80">
              <img
                className="logo z-40 w-[100px] block"
                src={whiteLogo}
                alt="nitk racing logo"
              />
              {!drawerOpen ? (
                <RxHamburgerMenu size={24} onClick={handleOpenAndClose} />
              ) : (
                <FiX size={24} onClick={handleOpenAndClose} />
              )}
            </div>
          ) : (
            <div className="pl-36 pr-36"><MenuItems /></div>
            
           
          )}
        </div>

        {drawerOpen ? <MobileView /> : <div className="pl-36 pr-36"></div>}

        {/* new hero section  */}
      
        <div className="">
          <Grok />
        </div>


         {/* <img src={car} alt="car" className="w-[1700px] h-[1000px] absolute top-[-190px] left-1/2 transform -translate-x-1/2 bg-cover bg-no-repeat bg-center"/> */}
         
         <div className="hidden lg:block">
          <Car />
         </div>
        
        {/* <div className="flex items-center justify-between pl-7 pr-7 sm:hidden mt-5 relative">
          <img src={whiteLogo} alt="logo" className="w-[100px] h-[50px] flex-shrink-0 "/>
         <RxHamburgerMenu  className="text-3xl relative  flex-shrink-0 " onClick={handleClick}/>{mobile ? (<MobileView className='absolute left-1/2 transform -translate-x-1/2 w-full'/>) : (null)}
          

        </div> */}
        
        
      </div>
    </div>
  );
}



export default Hero;

// {screenSize < "431" ? (
//           <div className="wrapper bg-red-600 py-2 relative my-10">
//             <Marquee
//               autoFill
//               className="justify-center items-center gap-5"
//               speed={20}
//             >
//               <h1 className="text-9xl font-[outfit] text-black font-bold">
//                 LIVE TO RACE
//               </h1>
//             </Marquee>
//             <img
//               src={StarSVG}
//               className="star absolute -bottom-[115px] -right-[115px] -z-10 rotating"
//             />
//           </div>
//         ) : screenSize < "900" && screenSize > "430" ? (
//           <div className="wrapper  bg-red-600 py-2 relative my-10">
//             <Marquee
//               autoFill
//               className="justify-center items-center gap-5"
//               speed={20}
//             >
//               <h1 className="text-9xl font-[outfit] text-black font-bold">
//                 LIVE TO RACE
//               </h1>
//             </Marquee>
//             <img
//               src={StarSVG}
//               className="star absolute -bottom-[115px] -right-[115px] -z-10 rotating"
//             />
//           </div>
//         ) : (
//           <div className="wrapper bg-red-600 py-16 relative my-10">
//             <Marquee
//               autoFill
//               className="justify-center items-center gap-5"
//               speed={20}
//             >
//               <h1 className="text-9xl font-[outfit] text-black font-bold">
//                 LIVE TO RACE
//               </h1>
//             </Marquee>
//             <img
//               src={StarSVG}
//               className="star absolute -bottom-[115px] -right-[115px] -z-10 rotating"
//             />
//           </div>
//         )} 

        {/* <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-10 sm:links sm:overflow-hidden">
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Explore</h1>
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Donate</h1>
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Follow</h1>
        </div> */}


