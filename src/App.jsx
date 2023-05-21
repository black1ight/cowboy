import React from "react";
import { createContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Bikes from "./pages/bikes/Bikes";
import Header from "./components/header/Header";
import ModelFour from "./pages/modelFour/ModelFour";
import MoreInfo from "./pages/modelFour/MoreInfo";
import Popup from "./pages/modelFour/Popup";
import OrderNow from "./pages/order/OrderNow";
import Services from "./pages/services/Services";
import Specs from "./pages/specs/Specs";

export const myContext = createContext();

function App() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [currentImg, setCurrentImg] = React.useState("");
  const [popupText, setPopupText] = React.useState("");
  const [currentBike, setCurrentBike] = React.useState();

  const [headerSticky, setHeaderSticky] = React.useState(false);

  const onScroll = (event) => {
    event.currentTarget.scrollTop > 80
      ? setHeaderSticky(true)
      : setHeaderSticky(false);
  };

  return (
    <div className="bg-zinc-950 h-screen w-screen flex justify-center items-center overflow-hidden relative">
      <span className="triangle500" />
      <span className="triangle700" />
      {showPopup && (
        <Popup
          closePopup={setShowPopup}
          imgLink={currentImg}
          popupText={popupText}
        />
      )}
      <myContext.Provider value={{ headerSticky, setHeaderSticky }}>
        <div
          onScroll={onScroll}
          className={`w-full h-full md:w-3/4 md:h-3/4 text-gray-400 bg-zinc-900 shadow-main md:rounded-xl overflow-y-auto overflow-x-hidden  relative`}
        >
          <Header />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/bikes" element={<Bikes />} />
              <Route
                path="/bikes/:id"
                element={<ModelFour setCurrentBike={setCurrentBike} />}
              />
              <Route
                path="/order"
                element={<OrderNow currentBike={currentBike} />}
              />
              <Route
                path="/bikes/:id/info"
                element={
                  <MoreInfo
                    showPopup={setShowPopup}
                    currentImgLink={setCurrentImg}
                    setPopupText={setPopupText}
                  />
                }
              />
              <Route path="/services" element={<Services />} />
              <Route path="/specs" element={<Specs />} />
              {/* <Route path="/test" element={<TestRide />} /> */}
            </Routes>
          </HashRouter>
        </div>
      </myContext.Provider>
    </div>
  );
}

export default App;
