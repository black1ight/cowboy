import React from "react";
import { myContext } from "../../App";
import style from "./ModelFour.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Preloader from "../../utilits/Preloader";

const ModelFour = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bikes, setBikes] = React.useState("");
  const [whiteCheck, setWhiteCheck] = React.useState(false);
  const [blackCheck, setBlackCheck] = React.useState(true);
  const [blueCheck, setBlueCheck] = React.useState(false);
  const [pinkCheck, setPinkCheck] = React.useState(false);
  const [pudrCheck, setPudrCheck] = React.useState(false);
  const [checkedColor, setCheckedColor] = React.useState("black");
  const { headerSticky } = React.useContext(myContext);

  const currentBike = () => {
    const findBike = bikes.find((obj) => checkedColor === obj.name);
    props.setCurrentBike(findBike);
  };

  const onClickWhite = () => {
    setWhiteCheck(true);
    setCheckedColor("white");
    setBlackCheck(false);
    setBlueCheck(false);
    setPudrCheck(false);
    setPinkCheck(false);
  };
  const onClickBlack = () => {
    setBlackCheck(true);
    setCheckedColor("black");
    setWhiteCheck(false);
    setBlueCheck(false);
    setPudrCheck(false);
    setPinkCheck(false);
  };
  const onClickBlue = () => {
    setBlueCheck(true);
    setCheckedColor("blue");
    setWhiteCheck(false);
    setBlackCheck(false);
    setPudrCheck(false);
    setPinkCheck(false);
  };
  const onClickPink = () => {
    setPinkCheck(true);
    setCheckedColor("pink");
    setWhiteCheck(false);
    setBlackCheck(false);
    setBlueCheck(false);
    setPudrCheck(false);
  };
  const onClickPudr = () => {
    setPudrCheck(true);
    setCheckedColor("pudr");
    setPinkCheck(false);
    setWhiteCheck(false);
    setBlackCheck(false);
    setBlueCheck(false);
  };

  React.useEffect(() => {
    async function fetchBikes() {
      try {
        const { data } = await axios.get(
          `https://63f67ab959c944921f74dd84.mockapi.io/bikes?model=${id}`
        );
        setBikes("");
        setBikes(data);
      } catch {
        alert("Error");
        navigate("/");
      }
    }

    fetchBikes();
  }, []);

  return (
    <div className={style.root}>
      <div className={`${style.wrapper} ${headerSticky ? "pt-0" : "pt-20"}`}>
        <div className={style.header}>
          <p>
            Stealth looks<span>pure speed</span>
          </p>
        </div>
        <div className={style.bikeContainer}>
          {id === "1" ? (
            <div className="max-xl:absolute max-xl:-top-10 max-xl:left-[50%] max-xl:-translate-x-[50%] max-xl:rotate-90 px-1 inline-block py-[6px] rounded-full bg-neutral-800/50 h-[66px] xl:my-auto">
              <div
                onClick={onClickWhite}
                className="w-6 h-6 mb-2 rounded-full bg-slate-100"
              >
                {whiteCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <div
                onClick={onClickBlack}
                className="w-6 h-6 rounded-full bg-zinc-950"
              >
                {blackCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
            </div>
          ) : (
            <div className="max-xl:absolute max-xl:-top-[70px] max-xl:left-[50%] max-xl:-translate-x-[50%] max-xl:rotate-90 px-1 inline-block py-[6px] rounded-full bg-neutral-800/50 my-auto text">
              <div
                onClick={onClickBlue}
                className="w-6 h-6 mb-2 rounded-full bg-blue-300"
              >
                {blueCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <div
                onClick={onClickPink}
                className="w-6 h-6 mb-2 rounded-full bg-rose-300"
              >
                {pinkCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <div
                onClick={onClickPudr}
                className="w-6 h-6 mb-2 rounded-full bg-rose-400"
              >
                {pudrCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <div
                onClick={onClickWhite}
                className="w-6 h-6 mb-2 rounded-full bg-slate-100"
              >
                {whiteCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <div
                onClick={onClickBlack}
                className="w-6 h-6 rounded-full bg-zinc-950"
              >
                {blackCheck && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6 max-xl:-rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
            </div>
          )}
          <div className={style.imgBlock}>
            {bikes ? (
              bikes.map((obj) => {
                if (whiteCheck && obj.name === "white") {
                  return <img src={obj.link} key={obj.link} alt="whiteBike" />;
                } else if (
                  blackCheck &&
                  obj.name === "black" &&
                  obj.type === "1"
                ) {
                  return <img src={obj.link} key={obj.link} alt="blackBike" />;
                } else if (
                  blueCheck &&
                  obj.name === "blue" &&
                  obj.type === "1"
                ) {
                  return <img src={obj.link} key={obj.link} alt="blueBike" />;
                } else if (
                  pinkCheck &&
                  obj.name === "pink" &&
                  obj.type === "1"
                ) {
                  return <img src={obj.link} key={obj.link} alt="pinkBike" />;
                } else if (
                  pudrCheck &&
                  obj.name === "pudr" &&
                  obj.type === "1"
                ) {
                  return <img src={obj.link} key={obj.link} alt="pudrBike" />;
                }
              })
            ) : (
              <Preloader />
            )}
          </div>
          <div className="flex flex-col justify-between max-xl:max-w-[600px] max-xl:mx-auto">
            <div className={style.textBlock}>
              <h3 className={style.textItem}>Cowboy 4</h3>
              <p>
                The iconic frame brought to a new performance height as an
                active, agile ride.
              </p>
            </div>
            <div className="text-2xl text-slate-100 font-light my-2">
              €2.990 or €250/mo
            </div>
            <div className="flex gap-6 my-2">
              <Link
                to="/order"
                onClick={currentBike}
                className="max-xl:w-[150px] bg-orange-700/80 text-slate-200 px-4 py-2 w-1/3 flex justify-center items-center  rounded-lg hover:bg-orange-700 hover:shadow-link hover:shadow-orange-700/50 hover:text-slate-50 cursor-pointer transition-colors"
              >
                Order Now
              </Link>
              <Link to={`/bikes/${id}/info`} className={style.link}>
                More info
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
        </div>
      </div>
    </div>
  );
};

export default ModelFour;
