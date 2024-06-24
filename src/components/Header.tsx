import React from "react";

const Header = () => {
  return (
    <header className="w-full fixed flex justify-center items-center gap-12 font-rotonda pt-6 z-20">
      <div className="relative w-[187px] h-[100px] group hover:cursor-pointer">
        <h1 className="absolute z-10 text-xl font-semibold uppercase top-[50%] translate-y-[-25%] translate-x-[20%] text-blue-600 group-hover:text-rose-700">
          О фестивале
        </h1>
        <img
          className="absolute z-1 group-hover:drop-shadow-3xl"
          src="/cloud.svg"
          alt="cloud.svg"
        />
      </div>

      <div>
        <img src="/logo.png" alt="logo.png" />
      </div>

      <div className="relative w-[187px] h-[100px] group hover:cursor-pointer">
        <h1 className="absolute z-10 text-xl font-semibold uppercase top-[50%] translate-y-[-25%] translate-x-[30%] text-blue-600 group-hover:text-rose-700">
          Программа
        </h1>
        <img
          className="absolute z-1 group-hover:drop-shadow-3xl"
          src="/cloud.svg"
          alt="cloud.svg"
        />
      </div>
    </header>
  );
};

export default Header;
