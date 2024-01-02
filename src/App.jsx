import React, { useState } from 'react';
import './App.css'
import Buttons from'./Buttons'

const questions = [
  {
    id:1,
    category: 'html',
    question: 'What does HTML stand for?',
    options: ['Hypermedia Markup Language', 'Hypertext Markup Language', 'Hyperscript Markup Language', 'Hypertext Manipulation Language'],
    answer: 'Hypertext Markup Language'
  },
  {
    id:2,
    category: 'html',
    question: 'Which attribute is used to provide additional information about an HTML element?',
    options: ['all of the above ', 'id', 'class', 'style'],
    answer: 'all of the above '
  },
  {
    id:3,
    category: 'html',
    question: 'Which attribute is used to set the background color in HTML?',
    options: ['color', 'bgcolor', 'style', 'background-color'],
    answer: 'background-color'
  },
  {
    id:4,
    category: 'html',
    question: 'What does the target attribute in an anchor tag specify?',
    options: ['The color of the link', 'The location where the link opens', 'The size of the link', 'The font of the link'],
    answer: 'The location where the link opens'
  },
  {
    id:5,
    category: 'html',
    question: 'What is the correct way to add a comment in CSS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '/* This is a comment */'
  },
  {
    id:6,
    category: 'css',
    question: 'What is the correct way to add a comment in JS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '// This is a comment '
  },
  {
    id:7,
    category: 'css',
    question: 'What is the correct way to add a comment in HTML?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', '<!-- This is a comment -->'],
    answer: '<!-- This is a comment -->'
  },
  {
    id:8,
    category: 'css',
    question: 'What does HTML stand for?',
    options: ['Hypermedia Markup Language', 'Hypertext Markup Language', 'Hyperscript Markup Language', 'Hypertext Manipulation Language'],
    answer: 'Hypertext Markup Language'
  },
  {
    id:9,
    category: 'css',
    question: 'Which attribute is used to provide additional information about an HTML element?',
    options: ['all of the above ', 'id', 'class', 'style'],
    answer: 'all of the above '
  },
  {
    id:10,
    category: 'css',
    question: 'Which attribute is used to set the background color in HTML?',
    options: ['color', 'bgcolor', 'style', 'background-color'],
    answer: 'background-color'
  },
  {
    id:11,
    category: 'javascript',
    question: 'What does the target attribute in an anchor tag specify?',
    options: ['The color of the link', 'The location where the link opens', 'The size of the link', 'The font of the link'],
    answer: 'The location where the link opens'
  },
  {
     
    id: 12,
    category: 'javascript',
    question: 'What is the correct way to add a comment in CSS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '/* This is a comment */'
  },
  {
    id: 13,
    category: 'javascript',
    question: 'What is the correct way to add a comment in JS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '// This is a comment '
  },
  {
    id:14,
    category: 'javascript',
    question: 'What is the correct way to add a comment in HTML?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', '<!-- This is a comment -->'],
    answer: '<!-- This is a comment -->'
  },
  {
    id:15,
    question: 'What does HTML stand for?',
    options: ['Hypermedia Markup Language', 'Hypertext Markup Language', 'Hyperscript Markup Language', 'Hypertext Manipulation Language'],
    answer: 'Hypertext Markup Language'
  },
  {
    id: 16,
    question: 'Which attribute is used to provide additional information about an HTML element?',
    options: ['all of the above ', 'id', 'class', 'style'],
    answer: 'all of the above '
  },
  {
    id:17,
    category: 'react',
    question: 'Which attribute is used to set the background color in HTML?',
    options: ['color', 'bgcolor', 'style', 'background-color'],
    answer: 'background-color'
  },
  {
    id:18,
    category: 'react',
    question: 'What does the target attribute in an anchor tag specify?',
    options: ['The color of the link', 'The location where the link opens', 'The size of the link', 'The font of the link'],
    answer: 'The location where the link opens'
  },
  {
    id:19,
    category: 'react',
    question: 'What is the correct way to add a comment in CSS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '/* This is a comment */'
  },
  {
    id:20,
    category: 'react',
    question: 'What is the correct way to add a comment in JS?',
    options: ['/* This is a comment */', ' // This is a comment', ' # This is a comment', 'no comment'],
    answer: '// This is a comment '
  },
 
  
];





const App = () => {
  const [render, setRender] = useState(false);
  const [nQuiz, setNquiz] = useState(false);
  const [newGame, setNewgame] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const container = document.querySelector(".card")
  const lineTime=document.querySelector(".line-inside")
  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const renderPage = () => {
    setRender(!render);
  };
  const newQuiz = () => {
     setNquiz(!nQuiz)
  }
  const newButton = () => {
    setNewgame(true)
  }
  const handleMode = () => {
    container.classList.toggle("active")
  }
  const time = () => {
    lineTime.classList.toggle ("start-time")
  }
  return (
    <div className='card flex flex-col  gap-4  primary-content'>
      <div className='flex items-start justify-between w-full'>
        <h1 className='mb-6 font-serif red '>Frontend Quiz</h1>
        <label className="cursor-pointer grid place-items-center">
          <input type="checkbox" onClick={handleMode} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
      {!render && <button className='flex flex-col gap-4' onClick={renderPage}><Buttons /></button>}
      {render && <div className="quiz-app">
        {showScore ?(
          <div className="score-section flex flex-col">
            {nQuiz==false? render&& <h4 className='mb-4'>You scored {score} out of {questions.length}</h4>:""}
            {nQuiz==false? render&& <button className='btn btn-outline btn-success' onClick={newQuiz}>New Quiz</button>:""}
            {nQuiz == true ? render && <button className='flex flex-col gap-4' onClick={newButton}><Buttons /></button> : ""}
          </div>
        ) : (
        <>
          <div className="question-section ">
            <div className="question-count mb-5 flex items-center justify-center">
              <span className='text-center'>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text mb-5 flex items-center justify-center">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section flex flex-col items-center justify-center gap-4">
                {questions[currentQuestion].options.map((option) => (
              <div>
                <button className="btn btn-outline btn-warning w-[480px]"
                  key={option}
                      onClick={() => {
                        handleAnswerOptionClick(option);
                        time()
                      }}
                >
                  {option}
                </button>
              </div>
            ))}
                <div className='line'>
                  <div className='line-inside'></div>
                </div>
          </div>
        </>
      )}
    </div>}
    </div>
  );
};

export default App;