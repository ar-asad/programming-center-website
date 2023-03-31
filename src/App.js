import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogQsAnswer from './component/Home/BlogQsAnswer';

function App() {
  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Home></Home>
      <BlogQsAnswer></BlogQsAnswer>
      <ToastContainer />
    </div>
  );
}

export default App;
