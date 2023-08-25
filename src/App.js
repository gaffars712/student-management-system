import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Compunent/Login';
import Home from './Compunent/Home';
import Navebar from './Compunent/Navebar';
import Signup from './Compunent/Signup';
import Admindes from './Compunent/Admindes';
import Managestudent from './Compunent/Managestudent';
import Createstudent from './Compunent/Createstudent';
import { useEffect } from 'react';
import { studentlist } from './Data';
import Editstudent from './Compunent/Editstudent';
import Studentdecs from './Compunent/Studentdecs';
import Footer from './Compunent/Footer';

function App() {
  useEffect(() => {
    // Convert the array to a JSON string
    const studentlistJSON = JSON.stringify(studentlist);

    // Save the JSON string in local storage
    localStorage.setItem('studentsData', studentlistJSON);
  }, []);
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
      <Route path='/login/admindes/managestud/editestud/:id' element={<Editstudent/>}></Route>
      <Route path='/login/studentlogin/' element={<Studentdecs/>}></Route>


    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
