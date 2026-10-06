import { useState } from "react";

type QuizQuestion = {
  qnum: number;
  question: string;
  options: string[];
};

type QuizComponentProps = {
  currQuestion: QuizQuestion;
  onNext: () => void;
};

function QuizComponent({ currQuestion, onNext }: QuizComponentProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextClick = () => {
    setSelectedOption(""); // clear the chosen answer for the next question
    onNext();
  };

  return (
    <>
      <div className="quiz-container">
        <h1>Question #{currQuestion.qnum}</h1>
        <p>{currQuestion.question}</p>
        <ul>
          {currQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${currQuestion.qnum}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
}

export default QuizComponent;