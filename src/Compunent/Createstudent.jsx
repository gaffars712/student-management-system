import React from 'react';
import { useState } from 'react';
import { addStudent } from '../UserReduce';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
const Createstudent = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Class, setClass] = useState('')
    const [age, setage] = useState('')
    const [address, setaddress] = useState('')
  const useselect = useSelector((state) => state.users);
  const navigat=useNavigate()


    const dispach = useDispatch()

    const handelsubmit = (event) =>{
        event.preventDefault();
        dispach(addStudent({id:useselect[useselect.length - 1].id + 1,email, name, address , age, Class}))
        navigat('/login/admindes/managestud')

    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{marginTop:'5rem'}}>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New Student</h3>
        <form onSubmit={handelsubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input onChange={(e)=>setname(e.target.value)} type='text' name='name' className='form-control'/>

            </div>
            <div>
                <label htmlFor='address'>Address:</label>
                <input  onChange={(e)=>setaddress(e.target.value)} type="text"name='addres'className='form-control'  />
            </div>
            <div>
                <label htmlFor='classes'>Class:</label>
                <input  onChange={(e)=>setClass(e.target.value)} type="text"name='classs'className='form-control'  />
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input  onChange={(e)=>setage(e.target.value)} type="text"name='age'className='form-control'  />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input  onChange={(e)=>setemail(e.target.value)} type="email"name='email'className='form-control'  />
            </div><br></br>
            <button className='btn btn-info'></button>
        </form>

      </div>
    </div>
  )
}

export default Createstudent;
