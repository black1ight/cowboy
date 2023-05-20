import React from "react";
import { useNavigate } from "react-router-dom";

const OrderPopup = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    return () => {
      navigate("/");
    };
  }, []);
  return (
    <div className="w-full h-full absolute z-[200] flex bg-zinc-950/80">
      <div className="w-[270px] h-[200px] flex flex-col justify-center items-center m-auto rounded-lg bg-zinc-800/20 backdrop-blur">
        <h3 className="text-slate-100 text-4xl">Thank You!</h3>
        <h4 className="text-xl">We will call you soon.</h4>
      </div>
    </div>
  );
};

export default OrderPopup;
