"use client";

import React from "react";
import Header from "../../components/Header";
import { MouseParallax } from "react-just-parallax";
import Footer from "../../components/Footer";
import Head from "next/head";

const Festival = () => {
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
              className="absolute mb:opacity-0 mb:w-[150px] w-[500px] mb:h-[75px] h-[270px] mb:top-[5rem] top-[1rem] mb:left-[-3rem] left-[-10rem]"
              src="/cloud.svg"
              alt="cloud.svg"
            />
            <MouseParallax
              isAbsolutelyPositioned={true}
              enableOnTouchDevice={true}
              strength={0.05}
            >
              <img
                className="absolute mb:opacity-0 mb:w-[150px] w-[250px] mb:h-[75px] h-[136px] mb:top-[5rem] top-[1rem] mb:right-[-1rem] right-[7rem]"
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
                className="absolute mb:opacity-0 mb:w-[150px] w-[250px]  mb:h-[75px] h-[136px] mb:top-[18rem] top-[25rem] mb:left-[-2rem] left-[5rem]"
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
              <h1 className="absolute z-10 font-rotonda mb:text-4xl mb:w-full text-[70px] font-bold uppercase mb:-top-[-5rem] -top-[10rem] mb:left-[71%] left-1/2 -translate-x-1/2 translate-y-[350%]  text-blue-600 group-hover:text-rose-700">
                о фестивале
              </h1>

              <img
                className="absolute  mb:w-full w-[791px] mb:h-full h-[431px]  mb:top-[-12rem] -top-[10rem] left-1/2 -translate-x-1/2 translate-y-1/2"
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
                className="absolute mb:opacity-0 mb:w-[250px] w-[728px]  mb:h-[200px] h-[400px] mb:top-[14rem] top-[15rem] mb:right-[-6rem] right-[-15rem]"
                src="/cloud.svg"
                alt="cloud.svg"
              />
            </MouseParallax>
          </MouseParallax>
        </section>
        <section className="container flex flex-col justify-center  gap-12 font-fry text-white uppercase text-center mb:text-3xl text-[50px] mb-24">
          <h2 className="">«ОБЛАКА МОЛОКА» снова с вами!</h2>
          <p className="mb:text-sm text-xl">
            Компания «Савушкин продукт» при поддержке Брестского городского
            исполнительного комитета приглашает жителей и гостей города посетить
            самый яркий семейный фестиваль этого лета!
          </p>
          <p className="mb:text-sm text-xl">
            В рамках празднования дня города 26 июля с 12:00 до 23:00 в парке
            Мира вас ждет насыщенная программа.
          </p>
          <p className="mb:text-sm text-xl">
            Гости любого возраста не только cмогут развлечься на многочисленных
            тематических площадках, но и узнают много нового, интересного и
            полезного о молоке и молочных продуктах.
          </p>
          <p className="mb:text-sm text-xl">
            А в завершении фестиваля на стадионе «Юность» – грандиозный
            праздничный концерт и фейерверк! Этот день будет наполнен весельем,
            новыми знаниями и отличным настроением!
          </p>
          <p className="mb:text-sm text-xl">
            Что же интересного ожидается на «ОБЛАКАХ МОЛОКА» в этом году?
          </p>
          <span className="w-0 h-0 opacity-0">
            This code was created by Sergey Lobodin @Sergey_Lobodin
          </span>
        </section>
        <section className="w-[95%] mx-auto mt-6 bg-[#e6faff] rounded-3xl">
          <div className="flex flex-col justify-center gap-16 font-rotonda uppercase text-[#3457A7] p-16  w-full">
            <h1 className="mb:text-[25px] text-[50px] text-center">
              зоны фестиваля
            </h1>
            <div className="flex flex-col justify-center font-fry gap-10 text-center  mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl   text-[50px] text-center">
                савушкин
              </h1>
              <p>
                Погрузитесь в мир вкусных и натуральных продуктов в нашем
                Молочном университете! Узнайте все о пользе молока от врачей,
                диетологов, поучаствуйте в викторинах и конкурсах, отправьте
                памятную открытку своим близким и испытайте удачу на Колесе
                фортуны.
              </p>
              <p>
                Не пропустите интерактивную фотозону с нашей любимой коровой –
                попробуйте стать лучшим дояром фестиваля! Загадайте заветную
                мечту у Дерева желаний и позвольте художникам запечатлеть ваш
                портрет.
              </p>
            </div>

            <div className="flex flex-col justify-center font-fry gap-10 text-center mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl text-[50px] text-center">
                брест-литовск
              </h1>
              <p>
                Погрузитесь в атмосферу старинного Бреста в исторической зоне
                фестиваля. Узнайте секреты сыроварения, катайте сырные головы,
                оживите застывшие скульптуры, наслаждайтесь выступлениями
                уличных актеров и музыкантов.
              </p>
              <p>
                Прочтите «свежие» новости в исторической газете и не забудьте
                заглянуть в сырную лавку, где можно будет продегустировать
                вкуснейшие сыры и узнать много интересного от сырного сомелье.
              </p>
            </div>

            <div className="flex flex-col justify-center font-fry gap-10 text-center mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl text-[50px] text-center">teos</h1>
              <p>
                Для поклонников активного образа жизни — зона TEOS.
                Преодолевайте полосу препятствий, участвуйте в спортивных
                соревнованиях, наслаждайтесь фитнес-мероприятиями и
                вдохновляйтесь нашими мастер-классами по здоровому образу жизни!
              </p>
            </div>
            <span className="w-0 h-0 opacity-0">
              This code was created by Sergey Lobodin @Sergey_Lobodin
            </span>
            <div className="flex flex-col justify-center font-fry gap-10 text-center mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl text-[50px] text-center">суперкид</h1>
              <p>
                Юных гостей фестиваля ждет территория СуперКид. Здесь можно
                прыгать на батутах, участвовать в интерактивных играх, создавать
                шедевры из картона и макарон, раскрашивать огромные раскраски и
                смотреть мультфильмы в облачном кинотеатре.
              </p>
              <p>
                Академия СуперКид поможет детям стать настоящими супергероями!
                Будем играть, учиться и расти здоровыми вместе с СуперКидом!
              </p>
            </div>

            <div className="flex flex-col justify-center font-fry gap-10 text-center mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl text-[50px] text-center">фудкорт</h1>
              <p>
                Проголодались? Попробовать блины и драники со сметаной по
                старинным рецептам, молочные коктейли, мороженое, сладости и
                многое другое можно на фудкорте фестиваля.
              </p>
            </div>

            <div className="flex flex-col justify-center font-fry gap-10 text-center mb:text-sm text-[20px]">
              <h1 className="mb:text-3xl text-[50px] text-center">
                Малая сцена
              </h1>
              <p>
                На малой сцене вас ждут яркие музыкальные и танцевальные
                выступления.Артисты будут радовать вас своим творчеством и
                заряжать хорошим настроением. Зажигаем вместе! Здесь можно и
                нужно не только смотреть, но и танцевать вместе с озорной
                танцевальной командой СуперКида.
              </p>
              <p>
                В 16:00 на малой сцене состоится торжественное открытие
                фестиваля.
              </p>
              <p>
                Сориентироваться на месте вам помогут инфостойки, инфокубы и
                указатели с планом всех локаций и детальной программой
                фестиваля, которые будут грамотно рассредоточены по всей
                территории парка. А промоутеры-облачка охотно ответят на любые
                ваши вопросы.
              </p>
              <p>
                В 21:00 на экране возле Малой сцены начнется трансляция
                праздничного концерта. Ждем вас на фестивале «ОБЛАКА МОЛОКА»!
              </p>
            </div>
            <h1 className="mb:text-2xl text-[50px] text-center">
              ждем вас на фестивале «облака-молока»!
            </h1>
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

export default Festival;
