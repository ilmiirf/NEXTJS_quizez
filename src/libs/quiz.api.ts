import type { CategoryType, QuizType } from "@/types";

export const getCategory = async () => {
  try {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data: { trivia_categories: CategoryType[] } = await res.json();
    return data?.trivia_categories;
  } catch (error) {
    console.log(error);
  }
};

export const getQuiz = async (level: string, category_id: number) => {
  try {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${category_id}&difficulty=${level}&type=multiple`
    );
    const data: { results: QuizType[]; response_code: number } =
      await res.json();
    return data.results;
  } catch (error) {
    console.log({ error: "error server is occured : " + error });
  }
};
