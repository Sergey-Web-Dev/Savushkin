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
    <div className="relative bg-[url('/thought.png')] bg-no-repeat bg-cover min-w-[340px] min-h-[340px] bg-center">
      <div className="pt-20 flex flex-col justify-center items-center text-blue-600  font-fry text-center gap-2">
        <h1 className="uppercase text-xl px-12">{text}</h1>
        <p className="uppercase font-rotonda font-normal text-[15px]">{time}</p>
        <p className="font-rotonda font-normal text-[15px] w-1/2">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
{
}
export default Thought;
