import React from "react";
import { Header } from "./Header";
import profile from "../assets/img/profile.jpg";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      {<Header />}
      <div className="h-[90vh] flex flex-col gap-6 justify-center items-center">
        <div className="font-semibold text-2xl">
          CHALLENGE CHAPTER 7 - BINAR
        </div>
        <div>
          <img
            src={profile}
            alt=""
            className="w-36 h-36 object-cover rounded-full"
          />
        </div>
        <div className="font-medium text-purple-500">
          Dwi Angga Virgi Danianto - FEJS 2
        </div>
        <div className="border border-purple-500 rounded py-3 px-10 w-[70%] text-center">
          <div>
            Sesuai perintah captain, untuk challenge chapter 7 cukup membuat
            nama atau sebagainya saja{" "}
            <span className="font-medium italic">
              yang penting dihosting di vercel
            </span>
            .
          </div>
          <div>
            Karena untuk chapter ini sebagaian besar membahas deployment, CI/CD
            & testing. Kemudian kemarin sempat terdapat tugas untuk membuat
            responsive page, oleh karena itu, tugas tersebut saya masukkan ke
            dalam halaman ini. Bisa dicek pada menu navigasi diatas, berlabel
            "responsive". Atau klik link dibawah ini.
          </div>
          <div>=====================</div>
          <div className="flex gap-2 justify-center">
            ===
            <span
              onClick={() => navigate("/responsive")}
              className="italic cursor-pointer font-medium text-purple-500 hover:text-purple-700"
            >
              Halaman Responsive
            </span>
            ===
          </div>
          <div>=====================</div>
        </div>
      </div>
    </div>
  );
};
