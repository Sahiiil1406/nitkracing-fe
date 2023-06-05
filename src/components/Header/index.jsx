import React from 'react';
import './styles.css'
import properties from "./header.module.css"
import whiteLogo from '../../images/logo/logo_white.png';
import navigation from "../../images/logo.svg"
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={`${props.isVisible?properties.active:""}`}>
          <div className={`wrapper ${properties.wrapper}`}>
              <div className={properties.logo}>
                 <div className={properties.logo_wrapper}>
                     <img className={properties.logo_img} src={whiteLogo} alt="nitk racing logo"></img>
                 </div>
              </div>
              <div className={properties.links}>

              </div>
              <div className={properties.actions}>

                  <ul className={properties.action_container}>
                      <Link to="/">
                          <li className={properties.link}>
                              Home
                          </li>
                      </Link>

                      <Link to="/About">
                          <li className={properties.link}>
                              About
                          </li>
                      </Link>
                  </ul>

              </div>

              <div onClick={props.handleDrawerOpen} className={properties.navigation}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  className={properties.navigation_logo} viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M2315 5109 c-485 -50 -943 -235 -1334 -537 -111 -85 -348 -322 -433
-433 -158 -203 -309 -474 -394 -704 -47 -128 -107 -367 -130 -520 -26 -168
-26 -541 0 -710 23 -151 83 -391 131 -521 85 -231 235 -500 393 -703 81 -105
310 -336 412 -417 205 -161 492 -324 724 -409 130 -48 370 -108 521 -131 148
-22 532 -26 670 -6 482 69 888 239 1264 530 104 80 335 308 417 412 161 204
323 491 409 724 48 130 108 370 131 521 14 90 18 179 18 355 0 176 -4 265 -18
355 -23 151 -83 391 -131 521 -87 236 -247 518 -409 724 -79 99 -300 320 -401
400 -360 285 -773 464 -1235 535 -126 19 -477 28 -605 14z m436 -609 c867 -88
1569 -736 1728 -1593 l9 -49 -347 5 c-375 5 -409 9 -580 68 -163 56 -298 142
-445 284 -187 180 -325 239 -556 239 -233 0 -373 -62 -566 -249 -136 -131
-282 -223 -444 -278 -162 -55 -200 -59 -571 -64 l-347 -5 14 77 c46 239 150
492 291 702 402 602 1102 935 1814 863z m-99 -1651 c87 -18 158 -58 223 -123
258 -259 118 -696 -244 -758 -141 -24 -280 21 -386 127 -178 176 -178 455 0
630 113 112 257 155 407 124z m-1217 -919 c502 -130 787 -652 629 -1153 -14
-43 -32 -81 -40 -84 -20 -7 -176 48 -299 106 -319 151 -592 389 -797 696 -68
103 -182 329 -175 348 6 17 204 85 299 103 99 19 279 12 383 -16z m2615 19
c85 -13 310 -88 317 -105 3 -7 -22 -69 -55 -136 -195 -398 -522 -722 -917
-909 -123 -58 -279 -113 -299 -106 -20 8 -61 142 -76 246 -68 464 252 911 720
1006 80 16 224 18 310 4z"/>
<path d="M2488 2539 c-43 -22 -78 -81 -78 -129 0 -50 35 -107 80 -130 21 -11
53 -20 70 -20 76 0 150 74 150 150 0 50 -35 107 -80 130 -49 25 -94 25 -142
-1z"/>
</g>
</svg>
              </div>

          </div>
        </header>
    );
};

export default Header;
