import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import style from "./TestRide.module.scss";

const accordion = [
  {
    title: "1. Find a break in your day",
    subtitle: "Fits your own location",
    listItem1: "Pick your own location",
    listItem2: "Choose among the C4 or C4 ST",
    listItem3: "Find a date and time that works for you",
  },
  {
    title: "2. Meet a test rider",
    subtitle: "Local experts in your city",
    listItem1: "Greets you at your location",
    listItem2: "Choose among the C4 or C4 ST",
    listItem3: "Flexible if you need to reschedule",
  },
  {
    title: "3. Experience it first hand",
    subtitle: "Ready for you to try it yourself",
    listItem1: "Learn all about Cowboy bikes",
    listItem2: "Mount on and feel the difference",
    listItem3: "Ask any question you might have",
  },
];
const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: "550px",
  height: "450px",
  borderRadius: "4px",
};

const center = {
  lat: 50.45466,
  lng: 30.5238,
};

const TestRide = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="mt-20 flex justify-between px-4 gap-4">
      <div className="w-2/4">
        <h2 className="text-xl">
          Try one of our bikes to discover how it fits your style and the way
          you like to ride. A test rider will come to you to show you the new
          way of cycling in and around the city.
        </h2>
        <div className="flex flex-col mt-8 h-[330px] gap-1">
          {accordion.map((obj, id) => {
            return (
              <div
                key={id}
                className={
                  id === activeIndex
                    ? `${style.infoItem} ${style.active}`
                    : style.infoItem
                }
                onClick={() => {
                  setActiveIndex(id);
                }}
              >
                <div
                  className={`border-b ${
                    id === activeIndex
                      ? "border-orange-800"
                      : "border-orange-900"
                  } pb-2`}
                >
                  <h3 className={style.infoTitle}>{obj.title}</h3>
                  <span className="font-light">{obj.subtitle}</span>
                </div>
                <ul className="pt-2 font-light text-slate-100">
                  <li className={style.listItem}>{obj.listItem1}</li>
                  <li className={style.listItem}>{obj.listItem2}</li>
                  <li className={style.listItem}>{obj.listItem3}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-full w-2/4">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TestRide;
