import Navbar from "@/components/Navbar";
import QuizList from "@/components/QuizList";
import { getCategory } from "@/libs/quiz.api";

export default async function Home() {
  const categories = await getCategory();

  return (
    <>
      <Navbar />
      <div className="bg-base-200 bg-opacity-30">
        <section className="w-full lg:p-8 md:p-6 p-4">
          <QuizList categories={categories} />
        </section>
      </div>
    </>
  );
}
