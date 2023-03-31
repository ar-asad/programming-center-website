import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
