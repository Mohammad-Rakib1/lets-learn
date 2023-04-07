import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer position='top-center'/>
    </div>
    
  );
}

export default App;
