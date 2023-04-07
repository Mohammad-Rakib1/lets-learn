import { createBrowserRouter } from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from "./components/Home/Home";
import Blog from './components/Blog/Blog';
import About from './components/About/About'
import Services from "./components/Services/Services.jsx";
import getProduct from "./loaders.js";
import QuizData from './components/QuizData/QuizData.jsx'
import ErrorPage from "./ErrorPage.js";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: getProduct,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            // {
            //     path:'/about',
            //     element: <About></About>
            // },
            {
                path: '/quiz/:quizId',
                loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element: <QuizData></QuizData>,
            }
        ]
    }
]);