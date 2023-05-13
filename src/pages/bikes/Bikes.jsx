import React from "react";
import style from "./Bikes.module.scss";
import { Link } from "react-router-dom";

const Bikes = () => {
  return (
    <div className={style.root}>
      <Link to="/bikes/1" className={style.bikeItem}>
        <img
          className={style.bikeImg}
          src="https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4-black_871x@2x.png?v=74742678978058371101678365212"
          alt="changeBike"
        />
        <div className={style.descr}>
          <span>Delivered from 10 days</span>
          <h2 className={style.title}>Cowboy 4</h2>
          <p>
            Meet the C4 and you've found one agile ride with an incredibly swift
            side. Gain serious power on an electric bike that's built around
            you.
          </p>
        </div>
      </Link>
      <Link to="/bikes/2" className={style.bikeItem}>
        <img
          className={style.bikeImg}
          src="https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4-st-lavender_871x@2x.png?v=84537269507994072911678338076"
          alt="changeBike"
        />
        <div className={style.descr}>
          <span>Delivered from 10 days</span>
          <h2 className={style.title}>Cowboy 4 ST</h2>
          <p>
            Meet the C4 ST for a modern spin on a comfortable classic. A smooth
            stride will find your easygoing side on an electric bike that's
            built around you.
          </p>
        </div>
      </Link>
      <div className={style.footer}>
        <h4>Two models to choose, either one to try</h4>
      </div>
      <span
        className={`flex absolute -bottom-1/4 left-[50%] -translate-x-[50%] bg-orange-700 blur-main opacity-70 w-96 h-96 rounded-full -z-10`}
      />
    </div>
  );
};

export default Bikes;
