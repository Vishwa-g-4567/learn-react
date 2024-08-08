import React, { useState } from "react";

const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library for building user interfaces or UI components.",
  },
  {
    id: 2,
    question: "What are the benefits of React?",
    answer:
      "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering",
  },
  {
    id: 3,
    question: "What are the main concepts of React?",
    answer:
      "Some of the main concepts of react are: components, props, state , hooks, lifecycle methods, and JSX.",
  },
];

const FaqAccordion = ({ data }) => {
  return (
    <div className="max-w-[800px] mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4">FAQs</h2>
      {data.map((item) => (
        <FaqItems key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FaqItems = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-5 border border-[#7f8fa6] rounded overflow-hidden">
      <div
        className="bg-[#718093] text-white p-4 cursor-pointer text-lg hover:bg-[#7f8fa6] transition-colors duration-[0.3s]"
        onClick={() => setShow(!show)}
      >
        {question}
      </div>
      <div
        className={`bg-white max-h-0 overflow-hidden transition-[max-height] duration-[0.3s] ${
          show && "max-h-[300px]"
        }`}
      >
        <div className="p-4 text-[#555]">{answer}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <FaqAccordion data={data} />
    </>
  );
};

export default App;
