import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { deletestudent } from '../UserReduce';

const Managestudent = () => {
  const navigat = useNavigate()
  const useselect = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const handledelet = (id) => {
    dispatch(deletestudent({id:id}));
  }
  const handelclick = () =>{
    alert("LogOut Secces")
    navigat('/')
}

  return (
    <>
      <div className='container' style={ { display:"flex", justifyContent:"space-between",alignItems:"center" , width:"100%"}}>
      <div className='text-center mb-2' style={{ color: 'black', fontWeight: 'bold', fontSize: '2rem' }}>
        Student Details
        </div>
        <div>
        <Link to={'/login/admindes/managestud/createstud'}>
          <button className='btn btn-success ms-2'>Create</button>
        </Link>
        </div>
      
      </div>
      <div className='container ' style={{marginTop:"-1rem"}}>
      <div className='table-responsive' style={{marginLeft:"2rem"}}>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Class</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {useselect.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.Class}</td>
                <td>{user.age}</td>
                <td className='d-flex justify-content-center'>
                  <Link to={`/login/admindes/managestud/editestud/${user.id}`} className='btn btn-sm btn-primary me-2 mb-2'>Edit</Link>
                  <button onClick={() => handledelet(user.id)} className='btn btn-sm btn-danger mb-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    <div style={{textAlign:"center",marginBottom:"2rem"}}>
            <button style={{}} className='btn btn-danger' onClick={handelclick}>Logout</button>
        </div></>
  );
};

export default Managestudent;
