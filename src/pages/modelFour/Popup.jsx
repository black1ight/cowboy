import React from "react";

const Popup = (props) => {
  const clickClosePopup = () => {
    props.closePopup(false);
  };

  console.log(props.popupText);
  return (
    <div className="absolute z-[60] w-full h-full top-0 left-0 bg-zinc-950/50 backdrop-blur-[10px]">
      <div
        onClick={clickClosePopup}
        className="absolute max-sm:top-4 top-10 max-sm:right-4 right-10 z-[200]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-slate-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="w-full h-full flex justify-center items-center relative">
        <img className="" src={props.imgLink} alt="popupImg" />
        <p className="absolute bg-zinc-950/40 max-sm:left-4 max-sm:right-auto top-20 right-20 text-slate-200 max-w-[300px] p-[6px] rounded-md">
          {props.popupText}
        </p>
      </div>
    </div>
  );
};

export default Popup;
