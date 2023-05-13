import React from "react";
import style from "./Main.module.scss";
import bikeImgWhite from "../../assets/white.png";
import starIcon from "../../assets/star-full.svg";
import starIconSepar from "../../assets/star-separate.svg";
import logoFooter0 from "../../assets/logo-footer-0.svg";
import logoFooter1 from "../../assets/logo-footer-1.svg";
import logoFooter2 from "../../assets/logo-footer-2.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="text-gray-400 leading-4 h-full w-full relative flex max-lg:flex-wrap max-lg:overflow-auto overflow-hidden">
      <span className="absolute -bottom-1/4 -left-20 bg-orange-500 blur-main back opacity-70 w-96 h-96 rounded-full flex" />
      <div className="relative max-lg:w-full w-3/4 xl:w-2/4 h-full flex justify-center">
        <div className="absolute max-sm:px-4 md:w-3/4 max-md:px-4 lg:w-2/3 h-2/5 flex gap-6 flex-col justify-between top-[23%]">
          <h2 className="font-bold text-4xl text-white">
            Take the streets.
            <span className="font-bold text-3xl text-orange-700 pl-1">
              Cowboy 4
            </span>
          </h2>
          <p className="leading-6 font-light">
            <span className="font-semibold text-white">
              Shift your ride, not gears.
            </span>{" "}
            Ease your path toward the fastest way to move in the city. Free your
            mind as the bike adapts intuitively to power the speed you need.
          </p>
          <div className="text-white flex justify-end items-center font-light leading-none">
            <Link to="/bikes" className={style.btn}>
              View bikes
            </Link>
            <Link to="/specs" className={style.btn}>
              View specs
              <span className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 absolute top-[50%] -translate-y-[40%] left-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <img className={style.bikeImg} src={bikeImgWhite} alt="bike" />

        <div className="absolute bottom-10 left-2/4 w-2/5 flex justify-center items-center gap-6">
          <img
            className={style.logoFooter}
            src={logoFooter0}
            alt="logo-footer"
          />
          <img
            className={style.logoFooter}
            src={logoFooter1}
            alt="logo-footer"
          />
          <img
            className={style.logoFooter}
            src={logoFooter2}
            alt="logo-footer"
          />
        </div>
      </div>
      <div className="max-lg:w-full w-2/4 bg-stone-900 h-full relative overflow-hidden">
        <img
          className={style.bikeImgReverse}
          src="https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4-black_871x@2x.png?v=74742678978058371101678365212"
          alt="bike"
        />
        <div className="inline-block px-5 py-3 rounded-md bg-zinc-950/70 absolute right-10 top-1/3 -translate-y-full">
          <div className="flex justify-center gap-1">
            <img src={starIcon} className={style.starIcon} alt="starIcon" />
            <img src={starIcon} className={style.starIcon} alt="starIcon" />
            <img src={starIcon} className={style.starIcon} alt="starIcon" />
            <img src={starIcon} className={style.starIcon} alt="starIcon" />
            <img
              src={starIconSepar}
              className={style.starIcon}
              alt="starIconSepar"
            />
          </div>
          <span className="text-white text-xs">1000+ reviews</span>
        </div>
        <ul className="absolute bottom-8 left-0 right-0 flex justify-center gap-8">
          <li className={style.speks}>
            25 km/h<span>Assist Speed</span>
          </li>
          <li className={style.speks}>
            70 km/h<span>Battery Range</span>
          </li>
          <li className={style.speks}>
            3.5 h<span>Charging Time</span>
          </li>
          <li className={style.speks}>
            16.9 kg<span>Weight</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
