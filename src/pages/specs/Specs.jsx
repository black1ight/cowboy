import React from "react";

const Specs = () => {
  return (
    <div className="h-full w-full flex max-sm:justify-center p-2 overflow-hidden relative">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-zinc-900 to-zinc-700 after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/30">
        <img
          className="absolute bottom-0 scale-110 max-xl:scale-[1.5] max-sm:scale-[2.5] translate-x-[10%] max-xl:-translate-x-[2%] max-sm:-translate-x-[20%] -translate-y-[5%] max-xl:-translate-y-[10%] max-sm:-translate-y-[70%]"
          src="https://cdn.shopify.com/s/files/1/1772/1703/t/24/assets/cowboy-4--hero-atc_1920x@2x.png?v=76720704000224421131678268070"
        />
      </div>
      <div className="absolute h-full sm:max-w-[420px] z-10 left-0 top-0 p-2 md:p-4 pt-[100px] md:pt-[100px] overflow-y-auto scrollBarr-off">
        <ul className="flex flex-col gap-2 max-sm:m-2">
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Size</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Wheel size: 27,5"</li>
              <li>Tire size: 44-50mm (width) x 584 (diameter) tire</li>
              <li>Rider height Cowboy 4: optimized from 170 to 195cm</li>
              <li>Rider height Cowboy 4 ST: optimized from 165 to 190cm</li>
              <li>Seat post diameter: 27.2mm</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Weight</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Cowboy 4: 18.9 kg / 41.67 lbs (including battery)</li>
              <li>Cowboy 4 ST: 19.2kg / 42.33 lbs (including battery)</li>
              <li>Maximum load for the luggage rack: 27kg / 59.52 lbs</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Color</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Black, Khaki, Sand</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Motor</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Brand: Custom design by Cowboy</li>
              <li>Type: Rear hub motor</li>
              <li>Power: 250W</li>
              <li>Torque: 45Nm</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Battery</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Brand: Custom design by Cowboy</li>
              <li>Weight: 2.4kg</li>
              <li>Range: Up to 70km</li>
              <li>Charging time: 3.5h</li>
              <li>Watt hours: 360Wh</li>
              <li>Capacity: 10Ah</li>
              <li>Life: 500 cycles</li>
              <li>Technology: Lithium-ion</li>
              <li>
                Please note that this battery is a dangerous good (UN 3480).
                When shipping by air, make sure the carrier is compliant with
                the appropriate legislation.
              </li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Charger</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Voltage: 36V</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Speed</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Up to 25km/h (20 mph in the USA)</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Transmission</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Type: Gates carbon belt transmission</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Gear ratio</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Cowboy 4: 60 front/21 back = 2.8:1</li>
              <li>Cowboy 4 ST: 57 front/21 back = 2.7:1</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Lights</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>
                Front and rear LED lights. The rear light intensifies as brakes
                are used
              </li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Grips</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Custom-designed Cowboy Grips</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Tires</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>
                Custom-designed Cowboy puncture-resistant tires with a 47mm
                width and 584mm diameter
              </li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Inner Tubes</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>
                Presta valve inner tube compatible with 584x47 tires (27.5")
              </li>
              <li>ETRTO: 30/47 584</li>
            </ul>
          </li>
          <li className="p-4 pl-6 w-fit border-[1px] border-orange-900 rounded-lg bg-zinc-950/20 backdrop-blur-[3px]">
            <h3 className="font-semibold text-slate-100">Brakes</h3>
            <ul className="font-light list-[circle] text-xs lg:text-sm text-slate-100 flex flex-col">
              <li>Front and rear hydraulic disc brakes</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Specs;
