import React, { useState } from "react";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
    const [questions] = useState([
        {
            id: 1,
            question: "Question 1....",
            answer: "",
        },
        {
            id: 2,
            question: "Question 2....",
            answer: "",
        },
        {
            id: 3,
            question: "Question 3....",
            answer: "",
        },
        {
            id: 4,
            question: "Question 4....",
            answer: "",
        },
        {
            id: 5,
            question: "Question 5....",
            answer: "",
        },
    ]);
    return (
        <div className='questions'>
            {questions.map((question) => (
                <Question question={question} key={question.id} />
            ))}
        </div>
    );
};

export default Questions;
