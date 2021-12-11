import React, { useState } from "react";
import TextBox from "../TextBox/TextBox";
import "./Question.css";
import arrowDown from "../../public/Arrow-down.svg";

const Question = ({ question, answer }) => {
    const [showText, setShowText] = useState(false);
    const [questionContainerClass, setQuestionContainerClass] =
        useState("question-container");
    const [expandClass, setExpandClass] = useState("expanded-back");

    const onType = (e) => {
        question.answer = e.target.value;
    };
    const handleExpand = () => {
        if (!showText) {
            setQuestionContainerClass("question-container-expanded");
            setExpandClass("expanded");
        } else {
            setQuestionContainerClass("question-container");
            setExpandClass("expanded-back");
        }
        setShowText(!showText);
    };

    return (
        <div className={questionContainerClass}>
            <span className='question'>{question.question}</span>
            {showText && <TextBox classN={""} onChange={onType} />}
            <div className='expand-container'>
                <img
                    src={arrowDown}
                    alt='expand'
                    className={expandClass}
                    onClick={handleExpand}
                />
            </div>
        </div>
    );
};

export default Question;
