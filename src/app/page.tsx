"use client";

import Header from "@/components/Header";
import { MouseParallax } from "react-just-parallax";
import Thought from "@/components/Thought";
import "../components/thought.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full h-screen font-fry text-[#3457A7] flex-col items-center justify-between bg-[#5d91e7]">
        <section className="relative mb-72">
          <img src="/mainLogo.png" alt="mainLogo.png" />
          <MouseParallax isAbsolutelyPositioned={true}>
            <img
              className="absolute w-[500px] h-[270px] top-[1rem] left-[-20rem]"
              src="/cloud.svg"
              alt="cloud.svg"
            />
            <MouseParallax isAbsolutelyPositioned={true}>
              <img
                className="absolute w-[600px] h-[326px] top-[1rem] right-[-27rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <MouseParallax isAbsolutelyPositioned={true}>
              <img
                className="absolute w-[600px] h-[326px] top-[1rem] right-[-27rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <MouseParallax isAbsolutelyPositioned={true}>
              <h1 className="absolute z-10 font-rotonda text-3xl font-bold uppercase top-[40rem] left-[5rem] text-blue-600 group-hover:text-rose-700">
                Специальный гость
              </h1>
              <h2 className="absolute z-10 font-rotonda text-7xl font-bold uppercase top-[42rem] left-[5rem] text-blue-600 group-hover:text-rose-700">
                Хабиб
              </h2>
              <img
                className="absolute w-[728px] h-[400px] top-[30rem] left-[-10rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
            <MouseParallax isAbsolutelyPositioned={true}>
              <h1 className="absolute z-10 font-rotonda text-7xl font-bold uppercase top-[42rem] right-[2rem] text-blue-600 group-hover:text-rose-700">
                26 июля
              </h1>
              <h2 className="absolute z-10 font-rotonda text-3xl font-bold uppercase top-[47rem] right-[2rem] text-blue-600 group-hover:text-rose-700">
                парк мира
              </h2>
              <h2 className="absolute z-10 font-rotonda text-3xl font-bold uppercase top-[49rem] right-[2rem] text-blue-600 group-hover:text-rose-700">
                12:00-23:00
              </h2>
              <img
                className="absolute w-[728px] h-[400px] top-[30rem] right-[-15rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
          </MouseParallax>
        </section>

        <section className="w-[95%] mt-6 bg-[#e6faff] rounded-3xl">
          <div className="w-full">
            <div className="relative p-6 flex justify-center items-center">
              <img src="/map.png" alt="map.png" className="w-full h-auto" />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[20%] left-[22%]">
                    <img src="/photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Супергеройские снимки на память!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[37%] left-[14%]">
                    <img src="/киннект.png" alt="киннект.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="киннект-игра"
                      time="12:00-23:00"
                      paragraph="Активное движение для супергероев!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[43%] left-[16%]">
                    <img
                      src="/логические игры.png"
                      alt="логические игры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="логические игры"
                      time="12:00-23:00"
                      paragraph="Проверь свою логику и смекалку!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[49%] left-[12%]">
                    <img
                      src="/кинотеатр.png"
                      alt="кинотеатр.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="облачный кинотеатр"
                      time="12:00-23:00"
                      paragraph="Мультфильмы среди облаков!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[57%] left-[12%]">
                    <img
                      src="/потеряшки.png"
                      alt="потеряшки.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="потеряшки"
                      time="12:00-23:00"
                      paragraph="Мамуля, я здесь!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[67%] left-[14%]">
                    <img
                      src="/академия суперкид.png"
                      alt="академия суперкид.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Академия `Cуперкид`"
                      time="12:00-23:00"
                      paragraph="Учимся быть настоящими супергероями!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[70%] left-[10%]">
                    <img
                      src="/инфоцентр.png"
                      alt="инфоцентр.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="инфоцентр"
                      time="12:00-23:00"
                      paragraph="Мы поможем!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[74%] left-[17%]">
                    <img
                      src="/подвижные игры.png"
                      alt="подвижные игры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="подвижные игры"
                      time="12:00-23:00"
                      paragraph="Игры и веселье на свежем воздухе!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[64%] left-[18%]">
                    <img
                      src="/веревочный комплекс.png"
                      alt="веревочный комплекс.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="веревочный комплекс"
                      time="12:00-23:00"
                      paragraph="Испытай свою ловкость в преодолении препятствий!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[71%] left-[22%]">
                    <img
                      src="/большая рогатка.png"
                      alt="большая рогатка.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="волшебная рогатка"
                      time="12:00-23:00"
                      paragraph="Прицелься и стреляй волшебными шарами!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[64%] left-[26%]">
                    <img src="/3d ручки.png" alt="3d ручки.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="3d ручки"
                      time="12:00-23:00"
                      paragraph="Рисуй в объеме и создавай удивительные вещи!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[60%] left-[24%]">
                    <img
                      src="/путешествие в космос.png"
                      alt="путешествие в космос.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="путешествие в космос"
                      time="12:00-23:00"
                      paragraph="Космические приключения ждут тебя!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[50%] left-[22%]">
                    <img
                      src="/картонополис.png"
                      alt="картонополис.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="картонополис"
                      time="12:00-23:00"
                      paragraph="Построй город мечты!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[46%] left-[23%]">
                    <img
                      src="/спагеттиктура.png"
                      alt="спагеттиктура.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="спагеттиктура"
                      time="12:00-23:00"
                      paragraph="Архитектурные чудеса из обычных макарон!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[39%] left-[25%]">
                    <img
                      src="/детская площадка.png"
                      alt="детская площадка.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="детская площадка"
                      time="12:00-23:00"
                      paragraph="Игры и веселье на свежем воздухе!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[35%] left-[30%]">
                    <img src="/photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Фотосессии с любимой коровой"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[75%] left-[34%]">
                    <img src="/photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Фотосессии с любимой коровой"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[42%] left-[30%]">
                    <img
                      src="/молочные игры.png"
                      alt="молочные игры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="молочные игры"
                      time="12:00-23:00"
                      paragraph="Кубик решает всё - молочные игры ждут тебя!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[58%] left-[30%]">
                    <img
                      src="/любимая корова.png"
                      alt="любимая корова.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="любимая корова фестиваля"
                      time="12:00-23:00"
                      paragraph="Стань лучшим дояром фестиваля!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[49%] left-[35%]">
                    <img
                      src="/колесо фортуны.png"
                      alt="колесо фортуны.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="колесо фортуны"
                      time="12:00-23:00"
                      paragraph="Испытай удачу!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[65%] left-[35%]">
                    <img
                      src="/молочный университет.png"
                      alt="молочный университет.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="молочный университет"
                      time="12:00-23:00"
                      paragraph="Узнай все о молочных продуктах!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[70%] left-[38%]">
                    <img
                      src="/пятнистый лаундж.png"
                      alt="пятнистый лаундж.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="пятнистый лаундж"
                      time="12:00-23:00"
                      paragraph="Комфорт и релакс для всех!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[77%] left-[38%]">
                    <img
                      src="кафе _сырочки_.png"
                      alt="кафе _сырочки_.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="кафе сырочки"
                      time="12:00-23:00"
                      paragraph="Отведай вкуснейшего!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[60%] left-[45%]">
                    <img
                      src="дерево желаний.png"
                      alt="дерево желаний.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="дерево желаний"
                      time="12:00-23:00"
                      paragraph="Мечты сбываются!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[67%] left-[45%]">
                    <img
                      src="портрет города.png"
                      alt="портрет города.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="портрет одного города"
                      time="12:00-23:00"
                      paragraph="Добавь красок! Твори!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[64%] left-[48%]">
                    <img src="фотоКвест.png" alt="фотоКвест.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фото-квест"
                      time="12:00-23:00"
                      paragraph="А ты сможешь решить все загадки?"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[64%] left-[50%]">
                    <img
                      src="выдача призов.png"
                      alt="выдача призов.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="выдача призов"
                      time="12:00-23:00"
                      paragraph="Забери свой приз!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[73%] left-[47%]">
                    <img
                      src="галерея молока.png"
                      alt="галерея молока.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="галерея молока"
                      time="12:00-23:00"
                      paragraph="Выставка молочных шедевров!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[72%] left-[50%]">
                    <img
                      src="зона отдыха.png"
                      alt="зона отдыха.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="место для отдыха"
                      time="12:00-23:00"
                      paragraph="Зона для релакса и комфорта!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[72%] left-[55%]">
                    <img
                      src="зона отдыха.png"
                      alt="зона отдыха.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="место для отдыха"
                      time="12:00-23:00"
                      paragraph="Зона для релакса и комфорта!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[77%] left-[64%]">
                    <img src="инфокубик.png" alt="инфокубик.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="инфокуб"
                      time="12:00-23:00"
                      paragraph="Ответы на все ваши вопросы!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[68%] left-[62%]">
                    <img
                      src="настольные игры.png"
                      alt="настольные игры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="настольные игры"
                      time="12:00-23:00"
                      paragraph="Настольные битвы ждут тебя!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[55%] left-[58%]">
                    <img src="беседочка.png" alt="беседочка.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="беседка"
                      time="12:00-23:00"
                      paragraph="Уютный уголок для отдыха!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[51%] left-[62%]">
                    <img
                      src="стадион теос.png"
                      alt="стадион теос.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="стадион TEOS"
                      time="12:00-23:00"
                      paragraph="Здоровый и активный образ жизни"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[48%] left-[58%]">
                    <img
                      src="йогурт бар.png"
                      alt="йогурт бар.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="йогурт бар"
                      time="12:00-23:00"
                      paragraph=""
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[48%] left-[55%]">
                    <img
                      src="гантеля.png"
                      alt="гантеля.png"
                      className=""
                      width={20}
                      height={20}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="тренажеры"
                      time="12:00-23:00"
                      paragraph="Фитнес-зона для всех желающих!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[45%] left-[50%]">
                    <img src="сценка.png" alt="сценка.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="сцена"
                      time="12:00-23:00"
                      paragraph="Творчество! Эмоции! Сюрпризы"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[40%] left-[45%]">
                    <img
                      src="мини брест.png"
                      alt="мини брест.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="мини брест исторический"
                      time="12:00-23:00"
                      paragraph="Городок миниатюр с большой историей!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[32%] left-[48%]">
                    <img
                      src="винтажные игры.png"
                      alt="винтажные игры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="винтажные игры"
                      time="12:00-23:00"
                      paragraph="Развлечения из прошлого века!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[24%] left-[48%]">
                    <img src="сыроварня.png" alt="сыроварня.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="сыроварня"
                      time="12:00-23:00"
                      paragraph="Секреты сыроварения – учись и делай!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[27%] left-[54%]">
                    <img
                      src="ожившие скульптуры.png"
                      alt="ожившие скульптуры.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="ожившие скульптуры"
                      time="12:00-23:00"
                      paragraph="Скульптуры, которые оживают!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[36%] left-[40%]">
                    <img
                      src="уличный театр.png"
                      alt="уличный театр.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="уличный театр"
                      time="12:00-23:00"
                      paragraph="Веселые спектакли на свежем воздухе!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[20%] left-[40%]">
                    <img
                      src="уличные музыканты.png"
                      alt="уличные музыканты.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="уличные музыканты"
                      time="12:00-23:00"
                      paragraph="Живые выступления под открытым небом!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[20%] left-[30%]">
                    <img src="photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Исторические снимки на память!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[34%] left-[52%]">
                    <img
                      src="лавка сыр и хлеб.png"
                      alt="лавка сыр и хлеб.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="лавка `сыр и хлеб`"
                      time="12:00-23:00"
                      paragraph="Дегустация лучших продуктов!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[35%] left-[63%]">
                    <img
                      src="полоса препятствий.png"
                      alt="полоса препятствий.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="тренажеры"
                      time="12:00-23:00"
                      paragraph="Преодолевай и побеждай!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[32%] left-[58%]">
                    <img src="photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Мир наоборот - твоя креативная фотка!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[15%] left-[59%]">
                    <img src="инфоцентр.png" alt="инфоцентр.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="инфоцентр"
                      time="12:00-23:00"
                      paragraph="Мы поможем!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[37%] left-[35%]">
                    <img
                      src="/почтовое отделение.png"
                      alt="почтовое отделение.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="почтовое отделение"
                      time="12:00-23:00"
                      paragraph="Молочные приветы близким!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[50%] left-[43%]">
                    <img
                      src="/молочная доставка.png"
                      alt="молочная доставка.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="молочная доставка"
                      time="12:00-23:00"
                      paragraph="Управляй настоящим молоковозом!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[55%] left-[19%]">
                    <img src="/photo.png" alt="photo.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="фотозона"
                      time="12:00-23:00"
                      paragraph="Супергеройские снимки на память!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[22%] left-[19%]">
                    <img src="/castle.png" alt="castle.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Городок Полесье"
                      time="12:00-23:00"
                      paragraph="Строй и играй в волшебном городке!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[29%] left-[17%]">
                    <img
                      src="/wallPicture.png"
                      alt="wallPicture.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Стена-раскраска"
                      time="12:00-23:00"
                      paragraph="Раскрась мир по-своему!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[35%] left-[23%]">
                    <img
                      src="/superJump.png"
                      alt="superJump.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Суперпопрыгунчики"
                      time="12:00-23:00"
                      paragraph="Высокий прыжок – максимум веселья!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[30%] left-[25%]">
                    <img src="/беседка.png" alt="беседка.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Беседка"
                      time="12:00-23:00"
                      paragraph="Уютный уголок для отдыха!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[30%] left-[10%]">
                    <img
                      src="/констуркторГолберга.png"
                      alt="констуркторГолберга.png"
                      className=""
                    />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="конструктор голберга"
                      time="12:00-23:00"
                      paragraph="Гениальные изобретения в действии!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="absolute top-[18%] left-[13%]">
                    <img src="/инфоКуб.png" alt="инфоКуб.png" className="" />
                  </TooltipTrigger>
                  <TooltipContent className="relative">
                    <Thought
                      text="Инфокуб"
                      time="12:00-23:00"
                      paragraph="Ответы на все ваши вопросы!"
                    />
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex justify-evenly items-stretch">
            {/* первый блок */}
            <div className="flex flex-col justify-between items-center">
              <div className="relative w-[187px] h-[100px] ">
                <h1 className="absolute z-10 text-xl font-rotonda uppercase top-[50%] translate-y-[-25%] translate-x-[50%]">
                  Суперкид
                </h1>
                <img
                  className="absolute z-1 group-hover:drop-shadow-3xl"
                  src="/желтое.png"
                  alt="желтое.png"
                />
              </div>
              <div className="flex justify-between items-stretch gap-8">
                <div className="flex flex-col justify-between items-stretch">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/ps1.png" alt="ps1.png" />
                    </div>
                    <h2 className="uppercase">Киннект игра</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/рогатка.png" alt="рогатка.png" />
                    </div>
                    <h2 className="uppercase">Большая рогатка</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фотогруп.png" alt="фотогруп.png" />
                    </div>
                    <h2 className="uppercase">фотозона</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/академия.png" alt="академия.png" />
                    </div>
                    <h2 className="uppercase">Академия "Суперкид"</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/куб-цепи.png" alt="куб-цепи.png" />
                    </div>
                    <h2 className="uppercase">констурктор Голберга</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/узел.png" alt="узел.png" />
                    </div>
                    <h2 className="uppercase">Веревочный комплекс</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/снимок.png" alt="снимок.png" />
                    </div>
                    <h2 className="uppercase">Облачный кинотеатр</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/стенаРаскраска.png" alt="стенаРаскраска.png" />
                    </div>
                    <h2 className="uppercase">Стена раскраска</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/логика.png" alt="логика.png" />
                    </div>
                    <h2 className="uppercase">логические игры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/ножницы.png" alt="ножницы.png" />
                    </div>
                    <h2 className="uppercase">картонополис</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/кисть.png" alt="кисть.png" />
                    </div>
                    <h2 className="uppercase">спагеттиктура</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/ракета.png" alt="ракета.png" />
                    </div>
                    <h2 className="uppercase">путешествие в космос</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/ручка.png" alt="ручка.png" />
                    </div>
                    <h2 className="uppercase">3d ручки</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/замчище.png" alt="замчище.png" />
                    </div>
                    <h2 className="uppercase">городок Полесье</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/батут.png" alt="батут.png" />
                    </div>
                    <h2 className="uppercase">Суперпопрыгунчики</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/близнецы.png" alt="близнецы.png" />
                    </div>
                    <h2 className="uppercase">потеряшки</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/кубики.png" alt="кубики.png" />
                    </div>
                    <h2 className="uppercase">детская площадка</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/футболМяч.png" alt="футболМяч.png" />
                    </div>
                    <h2 className="uppercase">подвижные игры</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* второй блок */}
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-[187px] h-[100px] ">
                <h1 className="absolute z-10 text-xl font-rotonda uppercase top-[50%] translate-y-[-25%] translate-x-[50%]">
                  савушкин
                </h1>
                <img
                  className="absolute z-1 group-hover:drop-shadow-3xl"
                  src="/голубое.png"
                  alt="голубое.png"
                />
              </div>
              <div className="flex justify-between items-stretch gap-8">
                <div className="flex flex-col justify-between items-stretch">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/шляпа.png" alt="шляпа.png" />
                    </div>
                    <h2 className="uppercase">Молочный университет</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/рогатка.png" alt="рогатка.png" />
                    </div>
                    <h2 className="uppercase">Большая рогатка</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/колесо.png" alt="колесо.png" />
                    </div>
                    <h2 className="uppercase">колесо фортуны</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/почта.png" alt="почта.png" />
                    </div>
                    <h2 className="uppercase">почтовое отделение</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/портрет.png" alt="портрет.png" />
                    </div>
                    <h2 className="uppercase">портрет одного города</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/бант.png" alt="бант.png" />
                    </div>
                    <h2 className="uppercase">дерево желаний</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фотогруп.png" alt="фотогруп.png" />
                    </div>
                    <h2 className="uppercase">фотозона</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/галерея.png" alt="галерея.png" />
                    </div>
                    <h2 className="uppercase">галерея молока</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/шезлонг.png" alt="шезлонг.png" />
                    </div>
                    <h2 className="uppercase">пятнистый лаундж</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/кубикМонополия.png" alt="кубикМонополия.png" />
                    </div>
                    <h2 className="uppercase">молочные игры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/корова.png" alt="корова.png" />
                    </div>
                    <h2 className="uppercase">любимая корова фестиваля</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/молоковоз.png" alt="молоковоз.png" />
                    </div>
                    <h2 className="uppercase">dj молоковоз</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/скутер.png" alt="скутер.png" />
                    </div>
                    <h2 className="uppercase">молочная доставка</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/тарелка.png" alt="тарелка.png" />
                    </div>
                    <h2 className="uppercase">кафе "сырочки"</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* третий блок */}
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-[187px] h-[100px] ">
                <h1 className="absolute z-10 text-white text-xl font-rotonda uppercase top-[50%] right-1/2 translate-y-[-25%] translate-x-[50%]">
                  теос
                </h1>
                <img
                  className="absolute z-1 group-hover:drop-shadow-3xl"
                  src="/синее.png"
                  alt="синее.png"
                />
              </div>
              <div className="flex justify-between items-stretch gap-8">
                <div className="flex flex-col justify-between items-stretch">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/баскетбол.png" alt="баскетбол.png" />
                    </div>
                    <h2 className="uppercase">стадион теос</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/бег.png" alt="бег.png" />
                    </div>
                    <h2 className="uppercase">полоса препятствий</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фишки.png" alt="фишки.png" />
                    </div>
                    <h2 className="uppercase">настольные игры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фотогруп.png" alt="фотогруп.png" />
                    </div>
                    <h2 className="uppercase">фотозона</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/гантеля.png" alt="гантеля.png" />
                    </div>
                    <h2 className="uppercase">тренажеры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/йогурт.png" alt="йогурт.png" />
                    </div>
                    <h2 className="uppercase">йогурт бар</h2>
                  </div>

                  <div className="flex justify-center items-center mt-36">
                    <div className="relative w-[187px] h-[100px] ">
                      <h1 className="text-center absolute z-10 text-white text-xl font-rotonda uppercase top-[50%] right-1/2 translate-y-[-40%] translate-x-[50%]">
                        брест-литовск
                      </h1>
                      <img
                        className="absolute z-1 group-hover:drop-shadow-3xl"
                        src="/оранжевое.png"
                        alt="оранжевое.png"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фотогруп.png" alt="фотогруп.png" />
                    </div>
                    <h2 className="uppercase">фотозона</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/сыр.png" alt="сыр.png" />
                    </div>
                    <h2 className="uppercase">сыроварня</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/дом.png" alt="дом.png" />
                    </div>
                    <h2 className="uppercase">мини брест исторический</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/крестики.png" alt="крестики.png" />
                    </div>
                    <h2 className="uppercase">винтажные игры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/гитара.png" alt="гитара.png" />
                    </div>
                    <h2 className="uppercase">уличные музыканты</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/маски.png" alt="маски.png" />
                    </div>
                    <h2 className="uppercase">уличный театр</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/скульптура.png" alt="скульптура.png" />
                    </div>
                    <h2 className="uppercase">ожившие скульптуры</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/сыры.png" alt="сыры.png" />
                    </div>
                    <h2 className="uppercase">сырная лавка</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* четвертый блок */}
            <div className="flex flex-col justify-start items-center">
              <div className="relative w-[187px] h-[100px] ">
                <h1 className="text-center absolute z-10 text-white text-xl font-rotonda uppercase top-[50%] right-1/2 translate-y-[-40%] translate-x-[50%]">
                  Главная площадка
                </h1>
                <img
                  className="absolute z-1 group-hover:drop-shadow-3xl"
                  src="/красное.png"
                  alt="красное.png"
                />
              </div>
              <div className="flex justify-between items-stretch gap-8">
                <div className="flex flex-col justify-between items-stretch">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/сцена.png" alt="сцена.png" />
                    </div>
                    <h2 className="uppercase">сцена</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/подарок.png" alt="подарок.png" />
                    </div>
                    <h2 className="uppercase">выдача призов</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/фотоквест.png" alt="фотоквест.png" />
                    </div>
                    <h2 className="uppercase">фото-квест</h2>
                  </div>

                  <div className="flex items-center gap-6 mt-[29.5rem]">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/инфокуб.png" alt="инфокуб.png" />
                    </div>
                    <h2 className="uppercase">инфокуб</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/инфоСтойка.png" alt="инфоСтойка.png" />
                    </div>
                    <h2 className="uppercase">инфостойка</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/зонаОтдыха.png" alt="зонаОтдыха.png" />
                    </div>
                    <h2 className="uppercase">зона отдыха</h2>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-[70px] h-[70px]">
                      <img src="/беседкаДом.png" alt="беседкаДом.png" />
                    </div>
                    <h2 className="uppercase">беседка</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
