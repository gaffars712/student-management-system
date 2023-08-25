import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Compunent/Login';
import Home from './Compunent/Home';
import Navebar from './Compunent/Navebar';
import Signup from './Compunent/Signup';
import Admindes from './Compunent/Admindes';
import Managestudent from './Compunent/Managestudent';
import Createstudent from './Compunent/Createstudent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navebar/>
    <Routes>
      <Route  path='/login' element={ <Login/>}></Route>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login/admindes' element={<Admindes/>}></Route>
      <Route path='/login/admindes/managestud' element={<Managestudent/>}></Route>
      <Route path='/login/admindes/managestud/createstud' element={<Createstudent/>}> </Route>


    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
