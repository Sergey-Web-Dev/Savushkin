import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-full font-fry">
      <nav className="w-full h-full overflow-hidden pb-24 mb:pt-24 pt-56 relative z-10">
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={350}
          height={190}
          className="absolute mb:w-[320px] mb:h-[200px] mb:bottom-1/2 bottom-[3rem] mb:left-1/2 mb:-translate-y-1/4 mb:-translate-x-1/2 left-[13rem] z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={555}
          height={300}
          className="absolute mb:w-[240px] mb:h-[150px] mb:bottom-0 -bottom-[7rem] mb:left-1/2 mb:-translate-y-1/4  mb:-translate-x-1/2 -left-[10rem] z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={720}
          height={391}
          className="absolute mb:w-[240px] mb:h-[150px] -bottom-56 -right-40 overflow-y-hidden z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={348}
          height={189}
          className="absolute mb:w-[240px] mb:h-[150px] -bottom-32 right-[30rem] overflow-y-hidden z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={486}
          height={284}
          className="absolute mb:w-[240px] mb:h-[150px] mb:-bottom-[20px] -bottom-0 -right-40 overflow-y-hidden z-0"
        />
        <ul className="relative container text-sm flex mb:flex-wrap mb:text-center justify-between mb:gap-24 items-center text-[#3457A7] z-20">
          <li className="class flex mb:w-full flex-col mb:items-center items-start uppercase">
            <p>ОАО «Савушкин продукт»</p>
            <p>г.Брест, ул. Янки Купалы, 118</p>
            <p>унп: 200030514</p>
          </li>
          <li className="flex mb:w-full justify-center items-center gap-4">
            <Link
              href="https://vk.com/savushkin_product"
              className="hover:opacity-50 transition-all"
            >
              <img src="/vk.png" alt="vk.png" />
            </Link>
            <Link
              href="https://ok.ru/groupsavushkin"
              className="hover:opacity-50 transition-all"
            >
              <img src="/odnoclass.png" alt="odnoclass.png" />
            </Link>
            <Link
              href="https://www.instagram.com/savushkin_product/"
              className="hover:opacity-50 transition-all"
            >
              <img src="/insta.png" alt="insta.png" />
            </Link>
            <Link
              href="https://www.facebook.com/savushkin.product"
              className="hover:opacity-50 transition-all"
            >
              <img src="/fb.png" alt="fb.png" />
            </Link>
          </li>
          <li className="mb:w-full">+375 (162) 30-45-45 </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
