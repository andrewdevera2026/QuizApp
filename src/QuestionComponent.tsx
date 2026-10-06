import { useState } from "react";
import QuizComponent from "./QuizComponent";

interface Question {
  qnum: number;
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    qnum: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    qnum: 2,
    question: "Which language is used for web development?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript",
  },
  {
    qnum: 3,
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Einstein", "Galileo", "Tesla"],
    answer: "Einstein",
  },
];

function QuestionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const objectValues = Object.values(questions);

  const handleNext = () => {
    if (currentIndex < objectValues.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Optional: loops back to start
    }
  };

  return (
    <>
      <QuizComponent
        currQuestion={questions[currentIndex]}
        onNext={handleNext}
      />
    </>
  );
}

export default QuestionComponent;