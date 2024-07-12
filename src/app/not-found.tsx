import Head from "next/head";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Облака Молока</title>
        <meta
          name="description"
          content="Захватывающее молочное приключение от компании «Савушкин продукт». Встречаемся 26 июля в парке Мира!"
        />
      </Head>
      <div>
        <img src="/разработка.png" alt="" className="w-full h-full" />
      </div>
    </>
  );
};

export default NotFound;
