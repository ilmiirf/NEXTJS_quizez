export type CategoryType = {
  id: number;
  name: string;
};

export type QuizType = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuizResultType = {
  number: number;
  result: boolean;
};
