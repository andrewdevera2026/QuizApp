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
   {
    qnum: 4,
    question: "What does TypeScript add to JavaScript?",
    options: ["Static types", "A database", "Faster internet", "Image editing"],
    answer: "Static types",
  },
  {
    qnum: 5,
    question: "What is data passed from a parent to a child component called?",
    options: ["Props", "Cookies", "Tags", "Loops"],
    answer: "Props",
  },
];

function QuestionComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = (selectedOption: string) => {
    // 1. Check the answer
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    // 2. Go to the next question, or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="quiz-container">
        <h1>Congratulations!!</h1>
        <p>
          Your score: {score} out of {questions.length}
        </p>
        <button className="btn" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <QuizComponent
      currQuestion={questions[currentIndex]}
      total={questions.length}
      isLast={currentIndex === questions.length - 1}
      onNext={handleNext}
    />
  );
}

export default QuestionComponent;