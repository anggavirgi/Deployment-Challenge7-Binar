import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center gap-20 py-6 bg-sky-700 font-medium text-white shadow-md">
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer hover:underline"
      >
        Home
      </div>
      <div
        onClick={() => navigate("/responsive")}
        className="cursor-pointer hover:underline"
      >
        Responsive
      </div>
    </div>
  );
};
