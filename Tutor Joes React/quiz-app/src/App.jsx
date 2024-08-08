import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(100);
  const API_KEY = "T67aKelWrDzFaEwacqJI7TudXJzQl4XdRHqPFSVi";
  useEffect(() => {
    const getQuestions = async () => {
      try {
        let URL = `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&difficulty=hard&tags=html&limit=10`;
        const response = await axios.get(URL);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching data : ", error);
      }
    };
    getQuestions();
  }, []);
  useEffect(() => {
    if (timer === 0) {
      handleAnswerOptionClick();
    }
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setTimer(100);
    } else {
      setShowScore(true);
    }
  };
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setTimer(100);
  };
  return (
    <>
      <div className="w-[650px] p-5 bg-white shadow shadow-black/50 rounded">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Your Score : {score}/10</h2>
            <button
              className="px-4 py-2.5 my-2.5 bg-[tomato] rounded-3xl text-white transition-colors duration-300 hover:brightness-110"
              onClick={restartQuiz}
            >
              Restart
            </button>
          </div>
        ) : (
          questions.length > 0 && (
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2.5 text-[#3498db]">
                Question {currentQuestionIndex + 1}
              </h2>
              <p className="font-medium">
                {questions[currentQuestionIndex].question}
              </p>
              <div className="flex flex-col w-full justify-center items-center gap-2.5 mt-5">
                {Object.entries(questions[currentQuestionIndex].answers).map(
                  ([key, value]) =>
                    value && (
                      <button
                        key={key}
                        className="w-2/3 px-4 py-2.5 bg-[#3498db] rounded-3xl text-white transition-colors duration-300 hover:brightness-110"
                        onClick={() => {
                          handleAnswerOptionClick(
                            questions[currentQuestionIndex].correct_answers[
                              `${key}_correct`
                            ] === "true"
                          );
                        }}
                      >
                        {value}
                      </button>
                    )
                )}
              </div>
              <div className="mt-5 text-lg text-[#555]">
                Time Left : <span className="font-semibold">{timer}s</span>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default App;
