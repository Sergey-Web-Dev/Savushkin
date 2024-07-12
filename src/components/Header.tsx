import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Header = ({ className }: { className?: string }) => {
  return (
    <header className={clsx(className, "relative w-full z-[21]")}>
      {/* <div className="relative w-full  flex mb:flex-wrap justify-center items-center gap-12 font-rotonda pt-6 pl-48 mb:pl-0"> */}
      <div className="relative w-full  flex  mb:flex-wrap justify-center items-center mb:gap-4 gap-12 font-rotonda pt-6 mb:pl-0">
        <div className="relative mb:w-0 mb:h-0 w-[187px]  h-[100px] text-center group  opacity-0">
          <h1 className="z-10 mb:text-[0.6rem] text-xl font-semibold uppercase  text-blue-600 group-hover:text-rose-700"></h1>
          <img
            className="absolute z-1 group-hover:drop-shadow-3xl mb:w-0 mb:h-0"
            src="/cloud.svg"
            alt="cloud.svg"
          />
        </div>

        <Link
          href="./o_festivale.html"
          className="mb:w-[25%] flex  relative mb:h-[50px] w-[187px] h-[100px] text-center flex-col justify-center group hover:cursor-pointer font-rotonda"
        >
          <h1 className=" z-10 mb:text-[0.6rem] text-xl font-semibold uppercase text-blue-600 group-hover:text-rose-700">
            о фестивале
          </h1>
          <img
            className="absolute z-1 group-hover:drop-shadow-3xl"
            src="/cloud.svg"
            alt="cloud.svg"
          />
        </Link>

        <Link
          href="/"
          className="mb:w-[25%] mb:flex mb:flex-col mb:justify-center"
        >
          <div>
            <img src="/logo.png" alt="logo.png" />
          </div>
        </Link>

        <Link
          href="./programm.html"
          className="mb:w-[25%] flex  relative mb:h-[50px] w-[187px] h-[100px] text-center flex-col justify-center group hover:cursor-pointer font-rotonda"
        >
          <h1 className=" z-10 mb:text-[0.6rem] text-xl font-semibold uppercase text-blue-600 group-hover:text-rose-700">
            программа
          </h1>
          <img
            className="absolute z-1 group-hover:drop-shadow-3xl"
            src="/cloud.svg"
            alt="cloud.svg"
          />
        </Link>

        <Link
          href="./photootchet.html"
          className="mb:w-[25%] flex  relative mb:h-[50px] w-[187px] h-[100px] text-center flex-col justify-center group hover:cursor-pointer font-rotonda"
        >
          <h1 className=" z-10 mb:text-[0.6rem] text-xl font-semibold uppercase text-blue-600 group-hover:text-rose-700">
            фотоотчёт
          </h1>
          <img
            className="absolute z-1 group-hover:drop-shadow-3xl"
            src="/cloud.svg"
            alt="cloud.svg"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
