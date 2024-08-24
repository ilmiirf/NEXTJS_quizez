"use client";

import { CategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface QuizListProps {
  categories: CategoryType[] | undefined;
}

type QuizSelectorType = [string, CategoryType];

const QuizList = ({ categories }: QuizListProps) => {
  const [categoriesData, setCategoriesData] = React.useState(
    categories
  );

  

  return (
    <>
    {/* <div className="w-full flex justify-end mb-10 gap-6">
      <label className="form-control w-full max-w-md">
        <div className="label">
          <span className="label-text">Select Category</span>
        </div>
        <select className="select select-bordered">
          <option>All</option>
          {categories?.map((category: CategoryType) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
    </div> */}
    <div className="flex flex-wrap  justify-center gap-4">
      {categories?.map((category, index) => (
        <Link
          key={index} 
          href={`/category/${category.id}`}
          className="card lg:w-[300px] md:w-[230px] w-[160px] bg-base-100 shadow-xl image-full hover:scale-105 transition-all"
        >
          <figure>
            <Image
              width={400}
              height={400}
              src="https://img.freepik.com/premium-vector/woman-reading-book-drinking-hot-coffee-learn-sains-math-artist-modern-vector-flat-illustration_720185-23.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body p-4  justify-between">
            <div className="w-full flex justify-center h-full items-center k">
              <h1 className="card-title lg:text-3xl md:text-2xl text-lg text-center">
                {category.name
                  .replace("Entertainment: ", "")
                  .replace("Science: ", "")}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default QuizList;
