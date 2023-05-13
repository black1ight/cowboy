import React from "react";
import { myContext } from "../../App";
import style from "./Services.module.scss";
import appStore from "../../assets/app-ios.svg";
import googlePlay from "../../assets/app-android.png";

const Services = () => {
  const { headerSticky } = React.useContext(myContext);
  const [inputValue, setInputValue] = React.useState("");
  const [validateInput, setValidateInput] = React.useState(true);
  const inputRef = React.useRef("");
  const [subscribeStatus, setSubscribeStatus] = React.useState(false);
  const [error, setError] = React.useState(false);
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    setError(false);
    event.target.value.match(pattern)
      ? setValidateInput(false)
      : setValidateInput(true);
  };

  const onClickSubscribe = () => {
    if (!validateInput) {
      setSubscribeStatus(true);
      setInputValue("");
      setTimeout(() => setSubscribeStatus(false), 3000);
    } else {
      setError(true);
    }
  };

  return (
    <div className={"w-full h-full relative" + " " + style.root}>
      <h2
        className={`text-7xl lg:text-9xl font-light absolute ${
          headerSticky ? "top-0" : "top-20"
        } w-full text-center tracking-[1rem] opacity-[.05]`}
      >
        Cowboy Care
      </h2>
      <div
        className={`max-sm:w-[150px] max-xl:w-[200px] xl:w-[230px] absolute ${
          headerSticky ? "max-sm:top-[40px]" : "max-sm:top-[120px]"
        } ${
          headerSticky ? "max-lg:top-[20px]" : "max-lg:top-[100px]"
        } lg:bottom-0 max-lg:right-0 lg:left-[50%] lg:-translate-x-[50%] drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
      >
        <img
          className={`max-w-[100%] ${style.image}`}
          src="https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-care--how-it-works-app_1920x@2x.png?v=27565939630988170911678270936"
          alt=""
        />
      </div>
      <div className={`${style.main} ${headerSticky ? "mt-0" : "mt-20"}`}>
        <div className="text-slate-100 max-lg:max-w-[70%] max-w-[40%] max-xl:p-6 xl:p-10">
          <h3 className="text-6xl text-orange-700 pb-6">How it works</h3>
          <p className="font-light pt-4">
            Whenever you need an assist with your bike, you can book an
            appointment or talk to us through the Cowboy app. Choose the service
          </p>
          <p className="mt-4">
            you need in the app, then follow the instructions to finalise your
            appointment. You'll be greeted by a technician to answer any
            questions you might have.
          </p>
        </div>
        <div className="max-xl:p-6 xl:p-10 max-lg:max-w-[70%] lg:max-w-[40%] w-[500px]">
          <span className="font-light text-sm">
            To subscribe to Cowboy Care, follow the instructions in the Cowboy
            App.
          </span>
          <form className="w-full border-b-[1px] flex py-1 my-4 relative">
            {validateInput && error && (
              <span className="absolute -top-3 text-xs text-red-700">
                incorrect email
              </span>
            )}
            <input
              onChange={onChangeInput}
              ref={inputRef}
              value={inputValue}
              placeholder={
                subscribeStatus
                  ? "Thank You for subscribe!"
                  : "Enter your email"
              }
              className="w-full bg-transparent focus:outline-none placeholder:font-light placeholder:text-slate-200 text-slate-100"
              type="email"
            />
            <button
              onClick={onClickSubscribe}
              disabled={!inputValue}
              className="hover:text-slate-100 transition-colors focus:outline-none ml-2"
              type="button"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-between max-w-[8rem]">
            <a href="https://www.instagram.com/cowboy_bikes/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                className="fill-slate-400 hover:fill-slate-100 transition-colors cursor-pointer"
              >
                {" "}
                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/CowboyHQ/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                className="fill-slate-400 hover:fill-slate-100 transition-colors cursor-pointer"
              >
                {" "}
                <path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/c/COWBOYBikes/featured">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
                className="fill-slate-400 hover:fill-slate-100 transition-colors cursor-pointer"
              >
                {" "}
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z" />
              </svg>
            </a>
          </div>
          <div className="flex justify-between gap-4 max-lg:pt-10 pt-6">
            <a
              className="hover:-translate-y-[5%] hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.1)] transition-all"
              href="https://itunes.apple.com/be/app/cowboy-electric-bikes/id1262900539?ls=1&mt=8"
            >
              <img className="w-[10rem]" src={appStore} alt="" />
            </a>
            <a
              className="hover:-translate-y-[5%] hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.1)] transition-all"
              href="https://play.google.com/store/apps/details?id=bike.cowboy.app"
            >
              <img className="w-[11rem]" src={googlePlay} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
