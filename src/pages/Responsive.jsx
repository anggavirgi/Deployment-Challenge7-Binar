import React from "react";
import { Header } from "./Header";

export const Responsive = () => {
  return (
    <div>
      {<Header />}
      <div className="w-full h-screen p-2 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="block w-2/3 sm:hidden md:hidden lg:hidden xl:hidden"></div>
          <div className="w-1/3 sm:w-full md:w-full lg:w-full xl:w-full bg-red-500 font-bold text-xl flex justify-center items-center py-5">
            Merah
          </div>
        </div>
        <div className="flex flex-col xl:flex-row h-full w-full gap-2">
          <div className="bg-purple-500 h-2/5 w-full xl:w-1/2 xl:h-full font-bold text-xl flex justify-center items-center xl:order-first md:order-last">
            Ungu
          </div>
          <div className="h-3/5 md:w-full xl:w-1/2 xl:h-full flex flex-col gap-2">
            <div className="bg-green-500 h-full xl:h-1/2 font-bold text-xl flex justify-center items-center order-last sm:order-first md:order-first lg:order-first xl:order-first">
              Hijau
            </div>
            <div className="flex h-1/2 gap-2">
              <div className="bg-blue-500 w-1/2 font-bold text-xl flex justify-center items-center order-last sm:order-first md:order-first lg:order-first xl:order-first">
                Biru
              </div>
              <div className="bg-pink-500 w-1/2 font-bold text-xl flex justify-center items-center">
                Pink
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
