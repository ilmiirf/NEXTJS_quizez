/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import QuizBox from "@/components/QuizTest/QuizBox";
import StartBox from "@/components/QuizTest/StartBox";
import ResultBox from "@/components/QuizTest/ResultBox";
import { getQuiz } from "@/libs/quiz.api";
import { QuizType } from "@/types";
import React, {  useState } from "react";

interface QuizSelectorType {
  params: {
    selector: [category_id: number, level: string];
  };
}

const Home = ({
  params: {
    selector: [category_id, level],
  },
}: QuizSelectorType) => {
  const [showStart, setShowStart] = useState(true);
  const [showQuizez, setShowQuizez] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [qnaData, setQnaData] = useState<QuizType[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const quizes = async () => {
    const data = await getQuiz(level, category_id);
    setQnaData(data!);
  };

  const totalQuestion = qnaData.length;

  const handleShowQuestion = async () => {
    await quizes();
    setShowStart(false);
    setShowQuizez(true);
  };

  const handleShowResult = () => {
    setShowQuizez(false);
    setShowResult(true);
  };

  const handleRestart = () => {
    setShowQuizez(false);
    setShowResult(true);
  };

  return (
    <>
      <div className="w-full h-screen p-10 bg-base-200 bg-opacity-30 relative">
        {showStart && (
          <StartBox
          handleShowQuestion={handleShowQuestion}
        />
        )}
        {showQuizez && (
          <QuizBox
          handleShowResult={handleShowResult}
          qnaData={qnaData}
          setCorrectAnswer={setCorrectAnswer}
          correctAnswer={correctAnswer}
        />
        )}
        {showResult && (
          <ResultBox correctAnswer={correctAnswer} totalQuestion={totalQuestion}/>
        )}
      </div>
    </>
  );
};

export default Home;
