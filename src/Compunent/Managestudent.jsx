import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Managestudent = () => {
  const useselect = useSelector((state) => state.users);

  return (
    <div className='container'>
      <div className='text-center mt-5'>
        <h1>Student Details</h1>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <Link to={'/login/admindes/managestud/createstud'}>
        <button to={'/login/admindes/managestud/createstud'} className='btn btn-success'>Create</button>
        </Link>
      </div>
      <div className='mt-3'>
        <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {useselect.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className='btn btn-sm btn-primary me-2 mb-2'>Edit</button>
                    <button className='btn btn-sm btn-danger mb-2'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Managestudent;
