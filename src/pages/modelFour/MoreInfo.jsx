import React from "react";
import { useParams } from "react-router-dom";

const MoreInfo = (props) => {
  const pageRef = React.useRef();

  const { id } = useParams();
  const clickImg1 = React.useRef();
  const clickImg2 = React.useRef();
  const clickImg3 = React.useRef();
  const clickImg4 = React.useRef();
  const clickImg5 = React.useRef();

  const title1 = React.useRef();
  const title2 = React.useRef();
  const title3 = React.useRef();
  const title4 = React.useRef();
  const title5 = React.useRef();

  const openPopup1 = () => {
    props.showPopup(true);
    props.currentImgLink(clickImg1.current.src);
    props.setPopupText(title1.current.innerText);
  };
  const openPopup2 = () => {
    props.showPopup(true);
    props.currentImgLink(clickImg2.current.src);
    props.setPopupText(title2.current.innerText);
  };
  const openPopup3 = () => {
    props.showPopup(true);
    props.currentImgLink(clickImg3.current.src);
    props.setPopupText(title3.current.innerText);
  };
  const openPopup4 = () => {
    props.showPopup(true);
    props.currentImgLink(clickImg4.current.src);
    props.setPopupText(title4.current.innerText);
  };
  const openPopup5 = () => {
    props.showPopup(true);
    props.currentImgLink(clickImg5.current.src);
    props.setPopupText(title5.current.innerText);
  };

  return (
    <div ref={pageRef} className="overflow-auto relative h-full scrollBarr-off">
      <div className="absolute z-50 max-lg:top-[25rem] lg:top-[45%] max-sm:right-4 right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-arrDown"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="max-lg:mt-20 max-lg:flex max-lg:flex-col max-lg:gap-4 lg:grid grid-cols-6 grid-rows-3 gap-1 pt-1">
        <div
          onClick={openPopup1}
          className="row-span-1 col-span-2 relative bg-zinc-950 cursor-zoom-in"
        >
          <img
            ref={clickImg1}
            className="max-w-full h-auto object-cover aspect-[1/1]"
            src={
              id === "1"
                ? "https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--detail-5_black_1440x@2x.png?v=141453029843062657981678337988"
                : "https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-4-st--detail-5_lavender_587x@2x.png?v=41677337426501691401678339375"
            }
            alt="gridImg"
          />
          <p className="absolute bottom-4 left-4 text-slate-50 font-semibold max-w-[300px]">
            Saddle
            <span
              ref={title1}
              className="block text-sm text-slate-400 font-normal"
            >
              Selle Royal seat fit comfort and durability atop a custom seat
              post.
            </span>
          </p>
        </div>
        <div
          onClick={openPopup2}
          className="row-span-2 col-span-4 relative bg-zinc-950 cursor-zoom-in"
        >
          <img
            ref={clickImg2}
            className="max-w-full h-auto aspect-[1/1] object-cover"
            src={
              id === "1"
                ? "https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--detail-3_black_1440x@2x.png?v=1932703019337219391678338005"
                : "https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-4-st--detail-3_lavender_1193x@2x.png?v=70903549037863304351678339351"
            }
            alt="gridImg"
          />
          <p className="absolute bottom-4 max-lg:left-4 lg:right-4 text-slate-50 font-semibold max-w-[250px]">
            Integrated lights
            <span
              ref={title2}
              className="block text-sm text-slate-400 font-normal"
            >
              Headlight and rear light aligned to the frame let you see and be
              seen.
            </span>
          </p>
        </div>
        <div
          onClick={openPopup3}
          className="row-span-1 col-span-2 relative bg-zinc-950 cursor-zoom-in"
        >
          <img
            ref={clickImg3}
            className="max-w-full h-auto aspect-[1/1] object-cover"
            src={
              id === "1"
                ? "https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--detail-2_black_1440x@2x.png?v=86437375745174371421678337974"
                : "https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-4-st--detail-2_lavender_587x@2x.png?v=184246798704726332561678339251"
            }
            alt="gridImg"
          />
          <p className="absolute bottom-4 left-4 text-slate-50 font-semibold max-w-[300px]">
            Carbon belt
            <span
              ref={title3}
              className="block text-sm text-slate-400 font-normal"
            >
              High-mileage bicycle drive with a single loop of carbon for a
              cleaner, quieter ride.
            </span>
          </p>
        </div>
        <div
          onClick={openPopup4}
          className="row-span-1 col-span-3 relative bg-zinc-950 cursor-zoom-in"
        >
          <img
            ref={clickImg4}
            className="max-w-full h-auto aspect-[3/2] object-cover"
            src={
              id === "1"
                ? "https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--detail-4_black_1440x@2x.png?v=62497801568362509501678338022"
                : "https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-4-st--detail-4_lavender_1193x@2x.png?v=121633186961070136121678339220"
            }
            alt="gridImg"
          />
          <p className="absolute bottom-4 left-4 text-slate-50 font-semibold max-w-[300px]">
            Brakes
            <span
              ref={title4}
              className="block text-sm text-slate-400 font-normal"
            >
              Hydraulic disc brakes with Cowboy spur details on the lever stop
              your tracks.
            </span>
          </p>
        </div>
        <div
          onClick={openPopup5}
          className="row-span-1 col-span-3 relative bg-zinc-950 cursor-zoom-in"
        >
          <img
            ref={clickImg5}
            className="max-w-full h-auto aspect-[3/2] object-cover"
            src={
              id === "1"
                ? "https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--detail-1_black_1440x@2x.png?v=41618864538522760911678337973"
                : "https://cdn.shopify.com/s/files/1/1772/1703/t/25/assets/cowboy-4-st--detail-1_lavender_587x@2x.png?v=41618864538522760911678339364"
            }
            alt="gridImg"
          />
          <p className="absolute bottom-4 left-4 text-slate-50 font-semibold max-w-[300px]">
            Tire & mudguard
            <span
              ref={title5}
              className="block text-sm text-slate-400 font-normal"
            >
              Puncture-resistent tires fit with mudguards for when rain is right
              around corner.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
