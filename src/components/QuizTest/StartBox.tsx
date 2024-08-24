import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

interface StartBoxProps {
  classNames?: string;
  handleShowQuestion: () => void;
}

const StartBox = ({ classNames, handleShowQuestion }: StartBoxProps) => {
  return (
    <div
      className={cn(
        classNames,
        "card md:w-[450px] shadow-xl flex bg-[#ffff] p-6 items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px]"
      )}
    >
      <h1 className="text-xl font-semibold">Are you ready?</h1>
      <Image
        width={400}
        height={400}
        alt="Start"
        className="w-[200px]"
        src="https://img.freepik.com/free-vector/hand-drawn-starting-line-business-illustration_23-2149540609.jpg"
      />
      <p className="text-sm text-center">
        You will do the quiz consists of several questions, and each question must be
        answered within 10 seconds
      </p>
      <div className="w-full text-center">
        <button className="btn btn-primary w-full" onClick={handleShowQuestion}>
          Start
        </button>
        <div>
          <Link href={"/"} className="btn btn-active btn-link ">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartBox;
