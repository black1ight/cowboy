import React from "react";
import OrderPopup from "./OrderPopup";

const OrderNow = (props) => {
  const [orderBike, setOrderBike] = React.useState(props.currentBike);
  const [sendForm, setSendForm] = React.useState(false);
  const [inputName, setInputName] = React.useState(false);
  const [inputPhone, setInputPhone] = React.useState(false);
  const [inputMail, setInputMail] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  React.useEffect(() => {
    if (orderBike) {
      localStorage.setItem("orderData", JSON.stringify(orderBike));
    }
    const dataItem = JSON.parse(localStorage.getItem("orderData"));
    dataItem ? setOrderBike(dataItem) : setOrderBike(props.currentBike);
  }, []);

  const onChangeName = (event) => {
    event.target.value ? setInputName(true) : setInputName(false);
  };
  const onChangePhone = (event) => {
    event.target.value.length >= 12
      ? setInputPhone(true)
      : setInputPhone(false);
  };
  const onChangeMail = (event) => {
    event.target.value.match(pattern)
      ? setInputMail(true)
      : setInputMail(false);
  };

  const errorStyle = {
    border: "1px solid red",
  };

  const clickSendForm = () => {
    if (inputName && inputPhone && inputMail) {
      setSendForm(true);
      setTimeout(() => setSendForm(false), 3000);
    } else {
      setShowError(true);
    }
  };

  return (
    orderBike && (
      <div className="w-full h-full relative">
        {sendForm ? <OrderPopup /> : ""}
        <div className="w-full lg:h-full lg:flex justify-between items-center max-lg:py-20 lg:overflow-hidden px-4 xl:px-20">
          <img className="max-lg:py-10 lg:w-2/4" src={orderBike.link} alt="" />
          <div className="lg:w-2/4 lg:pl-4">
            <div className="flex gap-10">
              <div>
                <h2>Bike</h2>
                <h3>Model:</h3>
                <h4>Color:</h4>
              </div>
              <div className="text-orange-600">
                <h2>Cowboy</h2>
                <h3 className="">{orderBike.model === 1 ? "4" : "4 ST"}</h3>
                <h4 className="">{orderBike.name}</h4>
              </div>
            </div>
            <h4 className="max-lg:mt-2 lg:mt-6">
              Fill out this order form and we will contact you
            </h4>
            <form className="mt-4 flex flex-col justify-between gap-2">
              <div className="flex justify-between gap-2">
                <div className="relative w-2/4">
                  <input
                    onChange={onChangeName}
                    className={`w-full h-10 rounded-sm p-2 text-slate-200 bg-zinc-950/30 placeholder:font-light placeholder:text-slate-400/50 focus:outline-none ${
                      !inputName && showError
                        ? "border-[1px] border-red-700"
                        : ""
                    }`}
                    placeholder="name"
                  />
                  {!inputName && showError && (
                    <span className="absolute -top-5 left-0 text-xs text-red-700">
                      incorrect email
                    </span>
                  )}
                </div>
                <div className="w-2/4 relative">
                  <input
                    onChange={onChangePhone}
                    className={`w-full h-10 rounded-sm p-2 text-slate-200 bg-zinc-950/30 placeholder:font-light placeholder:text-slate-400/50 focus:outline-none ${
                      !inputPhone && showError
                        ? "border-[1px] border-red-700"
                        : ""
                    }`}
                    placeholder="phone"
                    type="number"
                  />
                  {!inputPhone && showError && (
                    <span className="absolute -top-5 left-0 text-xs text-red-700">
                      incorrect phone
                    </span>
                  )}
                </div>
              </div>
              <div className="relative">
                <input
                  onChange={onChangeMail}
                  className={`block w-full h-10 rounded-sm p-2 text-slate-200 bg-zinc-950/30 placeholder:font-light placeholder:text-slate-400/50 focus:outline-none ${
                    !inputMail && showError ? "border-[1px] border-red-700" : ""
                  }`}
                  placeholder="mail"
                  type="email"
                />
                {!inputMail && showError && (
                  <span className="absolute -bottom-4 left-0 text-xs text-red-700">
                    incorrect mail
                  </span>
                )}
              </div>
              <button
                onClick={clickSendForm}
                type="button"
                className="block mt-4 bg-orange-800 h-10 rounded-sm text-slate-300 hover:text-slate-100 hover:bg-orange-600 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderNow;
