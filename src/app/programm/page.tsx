"use client";

import React from "react";
import Header from "../../components/Header";
import { MouseParallax } from "react-just-parallax";
import Footer from "../../components/Footer";
import Head from "next/head";

const Programm = () => {
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
              className="absolute mb:w-[100px] w-[500px] mb:h-[75px] h-[270px] mb:top-0 top-[150px] mb:left-[-13rem] left-[-10rem]"
              src="/cloud.svg"
              alt="cloud.svg"
            />
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
            >
              <img
                className="absolute mb:w-[150px] w-[250px] mb:h-[75px] h-[136px] mb:top-[50px] top-[1rem] mb:right-[-1rem] right-[7rem]"
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
              <span className="w-0 h-0 opacity-0">
                This code was created by Sergey Lobodin @Sergey_Lobodin
              </span>
              <img
                className="absolute mb:w-[150px] w-[250px]  mb:h-[75px] h-[136px] mb:top-[90px] top-[25rem] mb:left-[-2rem] left-[5rem]"
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
              <h1 className="absolute z-10 font-rotonda mb:text-[20px] mb:w-full text-[70px] font-bold uppercase mb:-top-[-90px] -top-[10rem] mb:left-[83%] left-1/2 -translate-x-1/2 translate-y-[350%]  text-blue-600 group-hover:text-rose-700">
                программа
              </h1>

              <img
                className="absolute  mb:w-[250px] w-[791px] mb:h-[200px] h-[431px]  mb:top-[0rem] -top-[10rem] left-1/2 -translate-x-1/2 translate-y-1/2"
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
                className="absolute mb:w-[150px] w-[728px]  mb:h-[100px] h-[400px] mb:top-[280px] top-[15rem] mb:right-[-20px] right-[-15rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
          </MouseParallax>
        </section>
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center text-[50px] mb-24">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">Малая сцена</h2>
            <h2 className="">12:00-21:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Музыка и танцы под зажигательные ритмы в самом сердце фестиваля.
            <br />
            Выступления детских и взрослых коллективов.
          </p>
        </section>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-3xl text-[50px] text-center">Активности</h1>
            <div className="flex flex-col justify-center font-fry gap-10 text-center text-[20px]">
              <div className="flex flex-col justify-center mb:gap-4">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:30; 13:30; 15:30; 17:20
                </h1>
                <p className=" mb:text-xl text-[30px]">
                  Мини-диско с СуперКидом
                </p>
              </div>

              <div className="mb:text-3xl flex flex-col justify-center">
                <h1 className="mb:text-3xl text-[50px] text-center">16:00</h1>
                <p className="mb:text-xl text-[30px]">
                  Торжественное открытие семейного фестиваля «Облака Молока»
                </p>
              </div>

              <div className="mb:text-3xl flex flex-col justify-center">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  18:00; 19:15
                </h1>
                <p className="mb:text-xl text-[30px]">
                  Выступление кавер-бэнда
                </p>
              </div>

              <div className="mb:text-3xl flex flex-col justify-center">
                <h1 className="mb:text-3xl text-[50px] text-center">21:00</h1>
                <p className="mb:text-xl text-[30px]">
                  Прямая трансляция концерта со сцены стадиона «Юность» на
                  экране в парке Мира
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* This code was created by Sergey Lobodin @Sergey_Lobodin */}
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">ФУДКОРТ</h2>
            <h2 className="">12:00-22:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Горячая еда, блинчики, молочные коктейли, популярный бабл ти,
            десерты, мороженое и многое другое.
          </p>
        </section>
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">САВУШКИН</h2>
            <h2 className="">12:00-21:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Хотите знать много нового и интересного о молочных продуктах? Тогда
            вам на территорию «Савушкин».
          </p>
        </section>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-3xl text-[50px] text-center">Активности</h1>
            <div className="flex flex-col justify-center font-fry gap-24 text-center text-[20px]">
              <div className="flex flex-col justify-center gap-6">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">Колесо фортуны</p>
                <p className="mb:text-xl text-[30px]">Активация Milk Memory</p>
                <p className="mb:text-xl text-[30px]">Роботы-молочники</p>
                <p className="mb:text-xl text-[30px]">Почтовое отделение</p>
                <p className="mb:text-xl text-[30px]">Портрет одного города</p>
                <p className="mb:text-xl text-[30px]">дерево желаний</p>
                <p className="mb:text-xl text-[30px]">галерея молока</p>
                <p className="mb:text-xl text-[30px]">пятнистый лаундж</p>
                <p className="mb:text-xl text-[30px]">молочные игры</p>
                <p className="mb:text-xl text-[30px]">
                  Любимая корова фестиваля
                </p>
                <p className="mb:text-xl text-[30px]">Молочная доставка</p>
                <p className="mb:text-xl text-[30px]">Зона отдыха</p>
                <p className="mb:text-xl text-[30px]">кафе бар «сырочки»</p>
                <p className="mb:text-xl text-[30px]">Фотозоны</p>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">Молочный университет</p>
                <p className="mb:text-xl text-[30px]">
                  выступления блогеров и лекции от врачей диетологов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">БРЕСТ-ЛИТОВСК</h2>
            <h2 className="">12:00-21:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Окунитесь в атмосферу старого города
            <br />и узнайте секреты сыроварения
          </p>
          <span className="w-0 h-0 opacity-0">
            This code was created by Sergey Lobodin @Sergey_Lobodin
          </span>
        </section>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-3xl text-[50px] text-center">Активности</h1>
            <div className="flex flex-col justify-center font-fry gap-24 text-center text-[20px]">
              <div className="flex flex-col justify-center gap-6">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">Сыроварня</p>
                <p className="mb:text-xl text-[30px]">Винтажные игры</p>
                <p className="mb:text-xl text-[30px]">
                  Уличный театр и музыканты
                </p>
                <p className="mb:text-xl text-[30px]">
                  Мини брест Исторический
                </p>
                <p className="mb:text-xl text-[30px]">ожившие скульптуры</p>
                <p className="mb:text-xl text-[30px]">Фотозоны</p>
              </div>

              <div className="mb:text-3xl flex flex-col justify-center">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">
                  Сырная лавка с лекциями и дегустациями
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* This code was created by Sergey Lobodin @Sergey_Lobodin */}
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">TEOS</h2>
            <h2 className="">12:00-21:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Зона для активного отдыха <br /> и спортивных состязаний. С Teos все
            возможно!
          </p>
        </section>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-3xl text-[50px] text-center">Активности</h1>
            <div className="flex flex-col justify-center font-fry gap-24 text-center text-[20px]">
              <div className="mb:text-3xl flex flex-col justify-center">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">
                  Показательные выступления спортивных секций и школ Бреста
                </p>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">Полоса препятствий</p>
                <p className="mb:text-xl text-[30px]">Настольные игры</p>
                <p className="mb:text-xl text-[30px]">Бар TEOS</p>
                <p className="mb:text-xl text-[30px]">Фотозона</p>
              </div>
            </div>
          </div>
        </section>
        {/* Этот код был создан Сергеем Лободиным */}
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">СУПЕРКИД</h2>
            <h2 className="">12:00-21:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Самая яркая и активная зона <br /> для маленьких гостей фестиваля
          </p>
        </section>
        <span className="w-0 h-0 opacity-0">
          This code was created by Sergey Lobodin @Sergey_Lobodin
        </span>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-3xl text-[50px] text-center">Активности</h1>
            <div className="flex flex-col justify-center font-fry gap-10 text-center text-[20px]">
              <div className="flex flex-col justify-center gap-6">
                <h1 className="mb:text-3xl text-[50px] text-center">
                  12:00 – 21:00
                </h1>
                <p className="mb:text-xl text-[30px]">
                  Логические игры для детей разного возраста
                </p>
                <p className="mb:text-xl text-[30px]">Академия СуперКид</p>
                <p className="mb:text-xl text-[30px]">
                  Изучение космоса и 3D ручки
                </p>
                <p className="mb:text-xl text-[30px]">Активные игры</p>
                <p className="mb:text-xl text-[30px]">
                  Картонополис и спагеттиктура
                </p>
                <p className="mb:text-xl text-[30px]">Веревочный городок</p>
                <p className="mb:text-xl text-[30px]">конструктор голберга</p>
                <p className="mb:text-xl text-[30px]">облачный кинотеатр</p>
                <p className="mb:text-xl text-[30px]">большая раскраска</p>
                <p className="mb:text-xl text-[30px]">большая рогатка</p>
                <p className="mb:text-xl text-[30px]">киннект игра</p>
                <p className="mb:text-xl text-[30px]">подвижные игры</p>
                <p className="mb:text-xl text-[30px]">суперпопрыгунчики</p>
                <p className="mb:text-xl text-[30px]">Фотозоны</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center text-[50px] m-24 mx-auto">
          <div className="mb:text-3xl flex flex-col justify-center">
            <h2 className="">главная сцена</h2>
            <h2 className="">21:00-23:00</h2>
          </div>
          <p className="mb:text-lg text-3xl">
            Фестиваль «Облака молока» завершит яркое концертное шоу на сцене
            стадиона «Юность». Специальный гость — автор хитовой «Ягоды-малинки»
            — певец Хабиб! Трансляцию концерта можно будет увидеть и в парке —
            на большом экране. <br />А в 22:45 всех ждет красочный фейерверк.
          </p>
        </section>
      </main>
      <span className="w-0 h-0 opacity-0">
        This code was created by Sergey Lobodin @Sergey_Lobodin
      </span>
      <Footer />
    </>
  );
};

export default Programm;
