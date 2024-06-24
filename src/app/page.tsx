"use client";

import Header from "@/components/Header";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full h-screen flex-col items-center justify-between bg-blue-500">
        <MouseParallaxContainer
          className="static w-full h-screen"
          globalFactorX={0.1}
          globalFactorY={0.1}
        >
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.5}
            className="flex justify-center items-center mt-48"
          >
            <img src="/mainLogo.png" alt="mainLogo.png" />
            <div className="absolute w-full h-full">
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[500px] h-[270px] left-[-10rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[600px] h-[330px]  right-[-15rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[435px] h-[235px] top-[15rem] right-[-15rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[612px] h-[330px] top-[30rem] left-[-20rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[728px] h-[400px] top-[40rem] left-[0rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[600px] h-[328px] top-[30rem] right-[-5rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[667px] h-[363px] top-[43rem] right-[-10rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                className="relative"
              >
                <img
                  className="absolute w-[435px] h-[235px] top-[42rem] right-[25rem]"
                  src="/cloud.svg"
                  alt="cloud.svg"
                />
              </MouseParallaxChild>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </main>
    </>
  );
}
