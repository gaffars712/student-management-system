    import React, { useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux';
    import {  useNavigate, useParams } from 'react-router';
    import { updatestudent } from '../UserReduce';

    const Editstudent = () => {
        const {id} = useParams();
    const useselect = useSelector((state) => state.users);
    const existting = useselect.filter(f => f.id === parseInt(id));

    const {name,email,Class,age,address} = existting[0]
    console.log('filter result ' + existting)
    const [uname, setname] = useState(name)
    const [uClass, setClass] = useState(Class)
        const [uage, setage] = useState(age)
        const [uaddress, setaddress] = useState(address)
    const [uemail, setemail] = useState(email)
        const dispach = useDispatch();
        const navicate = useNavigate()

        const handleupdata =(event) =>{
            event.preventDefault();
            dispach(updatestudent({
                id:id,
                name:uname,
                email:uemail,
                address:uaddress,
                Class:uClass,
                age:uage

            }))
            navicate("/login/admindes/managestud")
        }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{marginTop:'5rem'}}>
        <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update Student Details</h3>
        <form onSubmit={handleupdata} >
            <div>
                <label htmlFor='name'>Name:</label>
                <input value={uname} onChange={e=>setname(e.target.value)}  type='text' name='name' className='form-control'/>

            </div>
            <div>
                <label htmlFor='address'>Address:</label>
                <input value={uaddress}  onChange={(e)=>setaddress(e.target.value)}  type="text"name='addres'className='form-control'  />
            </div>
            <div>
                <label htmlFor='classes'>Class:</label>
                <input value={uClass} onChange={(e)=>setClass(e.target.value)}  type="text"name='classs'className='form-control'  />
            </div>
            <div>
                <label htmlFor='age'>Age:</label>
                <input value={uage} onChange={(e)=>setage(e.target.value)}   type="text"name='age'className='form-control'  />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input value={uemail} onChange={e=>setemail(e.target.value)}    type="email"name='email'className='form-control'  />
            </div><br></br>
            <button className='btn btn-info'>Updata </button>
        </form>

        </div>
    </div>
    )
    }

    export default Editstudent;
