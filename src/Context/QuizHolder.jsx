import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "What does HTML stand for?",
        "a": "Hyper Text Preprocessors",
        "b": "Hyper Text Markup Language",
        "c": "Hyper Text Multiple Language",
        "d": "Hyper Tool Multi Language",
        "correct": "b"
    },
    {
        "question": "What does CSS stand for?",
        "a": "Common Style Sheet",
        "b": "Colorful Style Sheet",
        "c": "Computer Style Sheet",
        "d": "Cascading Style Sheet",
        "correct": "d"
    },
    {
        "question": "What does PHP stand for?",
        "a": "Hypertext Preprocessor",
        "b": "Hypertext Programming",
        "c": "Hypertext Preprogramming",
        "d": "Hometext Preprocessor",
        "correct": "a"
    },
    {
        "question": "What does SQL stand for?",
        "a": "Stylish Question Language",
        "b": "Stylesheet Query Language",
        "c": "Statement Question Language",
        "d": "Structured Query Language",
        "correct": "d"
    },
    {
        "question": "What does XML stand for?",
        "a": "eXtensible Markup Language",
        "b": "eXecutable Multiple Language",
        "c": "eXTra Multi-Program Language",
        "d": "eXamine Multiple Language",
        "correct": "a"
    },
    {
        "question": "Which of the following is used in React.js to increase performance?",
        "a": "Virtual DOM",
        "b": "Original Dom",
        "c": "Both A and B",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "Who created React.js?",
        "a": "Jordan Mike",
        "b": "Jordan Walke",
        "c": "Time Lee",
        "d": "Jordan Lee",
        "correct": "b"
    },
    {
        "question": "How far is the moon from Earth?",
        "a": "7,918 miles (12,742 km)",
        "b": "86,881 miles (139,822 km)",
        "c": "238,400 miles (384,400 km)",
        "d": "35,980,000 miles (57,910,000 km)",
        "correct": "c"
    },
    {
        "question": "JSX stands for?",
        "a": "JavaScript XML",
        "b": "JSON XML",
        "c": "JSON",
        "d": "Javascript and Angular JS",
        "correct": "a"
    },
    {
        "question": "What is ReactJS??",
        "a": "Server-Side framework",
        "b": "User-Interface framework",
        "c": "Both A and B",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "Which company developed ReactJS?",
        "a": "Apple",
        "b": "Microsoft",
        "c": "Facebook",
        "d": "Google",
        "correct": "c"
    },
    {
        "question": "React is a -------?",
        "a": "JavaScript Library",
        "b": "JavaScript Framework",
        "c": "Both A and B",
        "d": "None",
        "correct": "a"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };