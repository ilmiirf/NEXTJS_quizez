/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import cn from "classnames";
import { QuizType } from "@/types";

interface QuizBoxProps {
  classNames?: string;
  handleShowResult: () => void;
  qnaData: QuizType[];
  setCorrectAnswer: (correctAnswer: number) => void;
  correctAnswer: number;
}

const QuizBox = ({ classNames, handleShowResult, qnaData, setCorrectAnswer, correctAnswer}: QuizBoxProps) => {
  const [timer, setTimer] = useState(10);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState<string>();
  const [isDisable, setIsDisable] = useState(false);
  const [indexSelection, setIndexSelection] = useState<number>();

  if (!qnaData)
    return (
      <span
        className={cn(
          classNames,
          "loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
      ></span>
    );

  const suffleOptions = (data: QuizType) => {
    const options = [
      data?.correct_answer,
      data?.incorrect_answers[0],
      data?.incorrect_answers[1],
      data?.incorrect_answers[2],
    ];
    return options.sort();
  };

  useEffect(() => {
    setIsTimerRunning(true);
  },[])

  useEffect(() => {
    setIsTimerRunning(true);
    setIsDisable(false);
    setIndexSelection(-1);
    setAnswer("");
    setTimer(10);
  }, [currentQuestion]);

  const handleNextQuestion = () => {
    if (currentQuestion < qnaData.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000);
    } else {
      setTimeout(() => handleShowResult(), 1000);
    }
  };

  const handleAnswer = (index: number, optionAnswer: string, currentQuestion: number) => {
    if (optionAnswer === qnaData[currentQuestion]?.correct_answer) {
      setAnswer("correct");
      setIndexSelection(index);
      setIsDisable(true);
      setCorrectAnswer(correctAnswer + 1);
      handleNextQuestion();
    } else {
      setAnswer("incorrect");
      setIndexSelection(index);
      setIsDisable(true);
      handleNextQuestion();
    }
    setIsTimerRunning(false);
  };

  const handleDone = () => {
    handleShowResult();
  }

  if(isTimerRunning){
    if(timer === 0){
      setIsTimerRunning(false);
      setIsDisable(true);
      handleNextQuestion();
    }else{
      setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    }
  }

  return (
    <div
      className={cn(
        classNames,
        "card max-w-[600px] w-[90%] bg-base-200 shadow-xl flex bg-[#ffff] py-6 items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <header className="px-6 pb-4 border-b-2 border-neutral-content w-full h-fit flex justify-between items-center">
        <div className="text-md font-regular">
          <p className=" ">
            {qnaData[currentQuestion]?.category} :{" "}
            {qnaData[currentQuestion]?.difficulty}
          </p>
        </div>
        <div className="flex gap-2 items-center bg-base-200 px-4 py-2 rounded-3xl">
          <ClockIcon className="w-5 h-5" />
          <span className="text-sm font-medium w-5">{timer}s</span>
        </div>
      </header>
      <section className="px-6 pb-6  w-full h-fit">
        <div className="text-lg font-medium mb-6 ">
          <p className="break-words">{qnaData[currentQuestion]?.question}</p>
        </div>
        <div className="px-2 flex flex-col gap-2">
          {suffleOptions(qnaData[currentQuestion]).map((option, index) => (
            <button
              disabled={isDisable}
              key={index}
              onClick={() => handleAnswer(index, option, currentQuestion)}
              className={cn(
                "flex justify-between item-center border-2 border-neutral-content py-2 px-4 gap-4 rounded-lg",
                {
                  "bg-red-700" : answer === "incorrect" && indexSelection === index,
                  "bg-green-700": answer === "correct" && indexSelection === index,
                  "hover:bg-base-300" : !isDisable,
                  "text-neutral-content" : isDisable,
                }
              )}
            >
              <span>{option}</span>
            </button>
          ))}
        </div>
      </section>
      <footer className="px-6 pt-4 border-t-2 border-neutral-content w-full h-fit flex justify-between items-center">
        <p className="">
          {currentQuestion + 1} of {qnaData.length} Question
        </p>
        {currentQuestion === qnaData.length - 1 ? (
          <button className="btn btn-neutral" onClick={handleDone}>
          Done
        </button>
        ) : (
          <button className="btn btn-neutral" onClick={handleNextQuestion}>
          NEXT
        </button>
        )}
      </footer>
    </div>
  );
};

export default QuizBox;
