import React from 'react';
import QuizOption from '../QiuzOption/QuizOption';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';

const Quiz = ({quizes,name,index}) => {
    const {question,options,correctAnswer} = quizes;
    // console.log(quizes.id);

    const totalAnswers = [];
    
    const handleQuizAnswer = (answer,id) => {

        totalAnswers.push(id);
        
        // const data = totalAnswers.filter(data => console.log(data));
        console.log(totalAnswers);

        if(answer === correctAnswer){
            toast.success('Correct Answer!',{autoClose : 500});
        }else{
            toast.warning('Wrong Answer!',{autoClose:500});
        }
    }

    const handleAnswerIcon = () => {
        toast.info(`Correct Answer is: ${correctAnswer}`,{autoClose:2000});
    }
    

    return (
        <div>
            <div className='p-4 card container shadow mb-5 d-flex align-items-center position-relative' style={{width: '65%'}}>
                    <svg onClick={handleAnswerIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="position-absolute" style={{width:'4%',top:'5%',right: '3%',color:'rgb(66,66,230)'}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                <div className="m-auto text-center " style={{width: '85%'}}>
                    <p className='text-center p-2 fw-bold' style={{fontSize:'2vw',color:'rgb(66,66,230)'}}> Quiz {index+1}: {question}</p>
                    <Form className='row'>
                            {
                                options.map((opt,index) => <QuizOption quizId = {quizes.id} handleQuizAnswer={handleQuizAnswer} index={index} opt={opt} key={index}></ QuizOption>)
                            }
                    </Form>
            </div>
        </div>
        </div>
    );
};

export default Quiz;