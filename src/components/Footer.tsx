import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full h-full ">
      <nav className="w-full h-full overflow-hidden pb-24 pt-56 relative z-10">
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={350}
          height={190}
          className="absolute bottom-[3rem] left-[13rem] z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={555}
          height={300}
          className="absolute -bottom-[7rem] -left-[10rem] z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={720}
          height={391}
          className="absolute -bottom-56 -right-40 overflow-y-hidden z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={348}
          height={189}
          className="absolute -bottom-32 right-[30rem] overflow-y-hidden z-0"
        />
        <img
          src="/cloud.svg"
          alt="cloud.svg"
          width={486}
          height={284}
          className="absolute -bottom-0 -right-40 overflow-y-hidden z-0"
        />
        <ul className="relative container flex justify-between items-center text-[#3457A7] z-20">
          <li className="flex flex-col items-start uppercase">
            <p>ОАО "Савушкин продукт"</p>
            <p>г.Брест, ул. Янки Купалы, 118</p>
            <p>унп: 200030514</p>
          </li>
          <li className="flex justify-center items-center gap-4">
            <Link href="#" className="hover:opacity-50 transition-all">
              <img src="/vk.png" alt="vk.png" />
            </Link>
            <Link href="#" className="hover:opacity-50 transition-all">
              <img src="/odnoclass.png" alt="odnoclass.png" />
            </Link>
            <Link href="#" className="hover:opacity-50 transition-all">
              <img src="/insta.png" alt="insta.png" />
            </Link>
            <Link href="#" className="hover:opacity-50 transition-all">
              <img src="/fb.png" alt="fb.png" />
            </Link>
          </li>
          <li>+375 (162) 29 91 23</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
