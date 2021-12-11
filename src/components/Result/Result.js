import React, { useState } from "react";
import Button from "../Button/Button";
import "./Result.css";
const Result = () => {
    const [showResult, setShowResult] = useState(false);
    const [resultClass, setResultClass] = useState("none");

    const handleGenerate = () => {
        if (!showResult) {
            setShowResult(!showResult);
            setResultClass("result-out");
            setTimeout(() => {
                setResultClass("result");
            }, 0);
        }
        if (showResult) {
            setResultClass("result-out");
            setTimeout(() => {
                setResultClass("result");
            }, 1000);
        }
    };

    const handleClose = () => {
        setResultClass("result-out");
        setTimeout(() => {
            setResultClass("none");
            setShowResult(false);
        }, 1000);
    };
    return (
        <div className='result-container'>
            <div className='generate-btn'>
                <Button text='Generate' onClick={handleGenerate} />
            </div>
            <div className={resultClass}>
                <div className='delete' onClick={handleClose}>
                    X
                </div>
                <code>
                    hello this is result
                    <br />
                </code>
            </div>
        </div>
    );
};

export default Result;
