import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { deletestudent } from '../UserReduce';

const Managestudent = () => {
  const useselect = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handledelet =(id)=>{
    dispatch(deletestudent({
      id:id
    }));

  }

  return (<>
    <div className='container' style={{marginTop:"4rem", color:"black" , fontWeight:"bold" ,  fontSize:"2rem"}}> Student Details
    
    <Link to={'/login/admindes/managestud/createstud'}>
        <button to={'/login/admindes/managestud/createstud'} className='btn btn-success'>Create</button>
        </Link> </div>
    <div className='container'>
      
      <div className='' style={{marginTop:"-2.5rem"}}>
        <div className='table-responsive' style={{textAlign:"center" , margin:"auto", alignItems:"center"}}>
          <table className='table table-bordered' style={{width:"100%"}}>
            <thead>
              <tr style={{textAlign:"center" , }}>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Addres</th>
                <th>Class</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {useselect.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.Class}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link to={`/login/admindes/managestud/editestud/${user.id}`} className='btn btn-sm btn-primary me-2 mb-2'>Edit</Link>
                    <button onClick={()=>handledelet(user.id)} className='btn btn-sm btn-danger mb-2'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
      
      </div>
    </div></>
  );
};

export default Managestudent;
