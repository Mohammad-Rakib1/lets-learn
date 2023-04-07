import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizData = () => {
    const quizInfo = useLoaderData().data;
    const name = quizInfo.name;
    // console.log(quizInfo.questions);
    return (
        <div>
            <h2 className='text-center fw-bold m-4' style={{color:'rgb(66,66,230)'}}>Quiz of {name}</h2>
            <div className=''>
                {
                    quizInfo.questions.map((quizes,index) => <Quiz key={index} index={index} name={name} quizes={quizes}></Quiz>)
                }
            </div>
        </div>
    );
};

export default QuizData;