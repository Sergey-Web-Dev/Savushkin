"use client";

import React from "react";
import Header from "../../components/Header";
import { MouseParallax } from "react-just-parallax";
import Footer from "../../components/Footer";
import Head from "next/head";

const Fotootchet = () => {
  return (
    <>
      <Head>
        <title>Облака Молока</title>
        <meta
          name="description"
          content="Захватывающее молочное приключение от компании «Савушкин продукт». Встречаемся 26 июля в парке Мира!"
        />
      </Head>
      <Header />
      <main>
        <section className="relative w-full mb:h-[400px] h-screen ">
          <MouseParallax
            isAbsolutelyPositioned={true}
            enableOnTouchDevice={true}
            strength={0.05}
            zIndex={20}
          >
            <img
              className="absolute mb:w-[150px] w-[500px] mb:h-[75px] h-[270px] mb:top-[5rem] top-[1rem] mb:left-[-3rem] left-[-10rem]"
              src="/cloud.svg"
              alt="cloud.svg"
            />
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
            >
              <img
                className="absolute mb:w-[150px] w-[250px] mb:h-[75px] h-[136px] mb:top-[5rem] top-[1rem] mb:right-[-1rem] right-[7rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <span className="w-0 h-0 opacity-0">
              This code was created by Sergey Lobodin @Sergey_Lobodin
            </span>
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
              zIndex={2}
            >
              <img
                className="absolute mb:w-[150px] w-[250px]  mb:h-[75px] h-[136px] mb:top-[23rem] top-[25rem] mb:left-[-2rem] left-[5rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
              zIndex={2}
            >
              <h1 className="absolute z-10 font-rotonda mb:text-[20px] mb:w-full text-[70px] font-bold uppercase mb:-top-[-11rem] -top-[10rem] mb:left-[82%] left-1/2 -translate-x-1/2 translate-y-[350%]  text-blue-600 group-hover:text-rose-700">
                фотоотчет
              </h1>

              <img
                className="absolute  mb:w-[250px] w-[791px] mb:h-[200px] h-[431px]  mb:top-[5rem] -top-[10rem] left-1/2 -translate-x-1/2 translate-y-1/2"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
              zIndex={0}
            >
              <img
                className="absolute mb:w-[250px] w-[728px]  mb:h-[200px] h-[400px] mb:top-[25rem] top-[15rem] mb:right-[-6rem] right-[-15rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
          </MouseParallax>
          <span className="w-0 h-0 opacity-0">
            This code was created by Sergey Lobodin @Sergey_Lobodin
          </span>
        </section>
        <section className="container flex flex-col justify-center gap-12 mb-24">
          <div className="relative p-12 w-full flex flex-wrap justify-center items-center gap-6">
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <img src="Rectangle.png" alt="img.png" className="opacity-50" />
            <div className="absolute w-full h-full top-0 left-0 bg-[#3457A7] opacity-50 "></div>
            <p className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-3/4 text-white font-rotonda mb:text-[35px] text-[70px] uppercase w-[40%] z-10">
              скоро здесь будут фото :&#41;
            </p>
          </div>
        </section>
        <span className="w-0 h-0 opacity-0">
          This code was created by Sergey Lobodin @Sergey_Lobodin
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Fotootchet;
