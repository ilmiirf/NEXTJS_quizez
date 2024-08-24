import Link from "next/link";
import React, { useRef } from "react";

interface ResultBoxProps {
  correctAnswer: number;
  totalQuestion: number;
}

const ResultBox = ({ correctAnswer, totalQuestion }: ResultBoxProps) => {
  
  const percentage = Math.round((correctAnswer / totalQuestion) * 5);
  const starRef = useRef<HTMLDivElement>(null);

  return (
    <div className="card max-w-[450px] w-[80%] shadow-xl flex bg-[#ffff] p-6 items-center gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-xl font-semibold">Congratulation</h1>
      <p>You have completed the quiz</p>
      <div className="rating rating-lg" >
        <input type="radio" name="rating-10" className="rating-hidden" />
        {[...Array(5)].map((_, index) =>{
          if (index+1 === percentage) {
            return (
              <input
              key={index}
              type="radio"
              name="rating-1"
              className="mask mask-star bg-orange-400"
              defaultChecked
            />
            )
          }else{
            return (
                <input
                  key={index}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-orange-400"
                />
            )
          }
          
        })}
      </div>
      <div className="w-full inline-flex justify-center">
        <p>Score <strong>{correctAnswer}/{totalQuestion}</strong></p>
      </div>
      <Link href={"/"} className="btn btn-active btn-link ">
        Back To Home
      </Link>
    </div>
  );
};

export default ResultBox;
