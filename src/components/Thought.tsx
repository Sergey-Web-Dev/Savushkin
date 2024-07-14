import React from "react";

const Thought = ({
  text,
  time,
  paragraph,
}: {
  text: string;
  time: string;
  paragraph: string;
}) => {
  return (
    <div className="relative bg-[url('/thought.png')] bg-no-repeat bg-cover mb:min-w-[0px] mb:min-h-[0px] mb:w-[95px] mb:h-[95px] min-w-[340px] min-h-[340px] mb:mt-2 bg-center mb:left-[-5%] mb:translate-y-[-15%]">
      <div className="mb:pt-6 pt-20 flex flex-col justify-center items-center text-blue-600  font-fry text-center mb:gap-[0.2rem] gap-2">
        <h1 className="uppercase mb:text-[0.25rem] mb:leading-[0.25rem] text-xl mb:px-0 px-12">
          {text}
        </h1>
        <p className="uppercase font-rotonda font-normal mb:text-[0.25rem] mb:leading-[0.25rem]  text-[15px]">
          {time}
        </p>
        <p className="font-rotonda font-normal mb:text-[0.25rem] mb:leading-[0.25rem] w-1/2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
{
}
export default Thought;
