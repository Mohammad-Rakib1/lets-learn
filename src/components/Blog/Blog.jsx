import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header><p className='fw-bold m-0 p-0 fs-5'>What is the purpose of React Router??</p></Accordion.Header>
                <Accordion.Body>
                <p className='fw-semibold'>
                    React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.
                </p>.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header><p className='fw-bold m-0 p-0 fs-5'>How does Context API Work??</p></Accordion.Header>
                <Accordion.Body>
                <p className='fw-semibold'>
                    Context API can solve many problems that modern applications face, related to state management, for example, props drilling. Many solutions can solve state management issues and props drilling, but they may increase your build size and compromise your app performance. Context API is a React built-in feature, so we don't have to worry about performance overhead and library installing issues.<br/>

                    The props drilling problem occurs when you pass a prop somewhere down the tree. When a project grows, data passing through props becomes chaotic, making the code more vulnerable and complex. To tackle this problem, we use Context API. 
                </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header><p  className='fw-bold m-0 p-0 fs-5'>What is the useRef Hook??</p></Accordion.Header>
                <Accordion.Body>
                    <p className="fw-semibold">
                        The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.<br/>
                        If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>

    );
};

export default Blog;