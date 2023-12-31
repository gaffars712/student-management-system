    import React, { useState } from 'react'
    import { useDispatch, useSelector } from 'react-redux';
    import {  useNavigate, useParams } from 'react-router';
    import { updatestudent } from '../UserReduce';
    import './edit.css'

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
            <div className='d-flex justify-content-center align-items-center' style={{ marginTop: '5rem' }}>
                <div className='w-80 w-md-50 border bg-secondary text-white p-5'>
                    <h3 className='text-center mb-4'>Update Student Details</h3>
                    <form onSubmit={handleupdata}>
                        <div className='mb-3'>
                            <label htmlFor='name' className='form-label'>Name:</label>
                            <input value={uname} onChange={e => setname(e.target.value)} type='text' name='name' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='address' className='form-label'>Address:</label>
                            <input value={uaddress} onChange={e => setaddress(e.target.value)} type="text" name='address' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='classes' className='form-label'>Class:</label>
                            <input value={uClass} onChange={e => setClass(e.target.value)} type="text" name='classs' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='age' className='form-label'>Age:</label>
                            <input value={uage} onChange={e => setage(e.target.value)} type="text" name='age' className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email' className='form-label'>Email:</label>
                            <input value={uemail} onChange={e => setemail(e.target.value)} type="email" name='email' className='form-control' />
                        </div>
                        <button className='btn btn-info w-100' type='submit'>Update</button>
                    </form>
                </div>
            </div>
        )
    }

    export default Editstudent;
