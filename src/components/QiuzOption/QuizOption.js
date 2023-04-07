import React from 'react';
import Form from 'react-bootstrap/Form';

const QuizOption = ({opt,handleQuizAnswer,index,quizId}) => {
    // console.log(opt.id);
    return (
        <div className='col-lg-5 col-xs-12 col-sm-12 m-auto border p-lg-3 p-sm-1 p-xs-1 mb-4 me-1'>
            <Form.Check inline label={opt} name="group1" type='radio' id={index}
            className="fw-semibold" style={{color:'rgb(66,66,230)'}} onClick={()=>handleQuizAnswer(opt,quizId)}
          />
        </div>
    );
};

export default QuizOption;