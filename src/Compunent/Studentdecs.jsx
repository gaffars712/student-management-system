import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import gaffar from '../Images/gaffarphoto.jpg';
import { Link, useNavigate  } from 'react-router-dom';

const Studentdecs = () => {
    const navigat = useNavigate();
  const useselect = useSelector((state) => state.users);
  useEffect(()=>{
    alert("Student Login Success")
},[ ])
const handleclick = () =>{
    alert("LogOut Secces")
   
}

const handleclic =()=>{
    alert(" Please Contact  Your Admin")
}

  return (
    <>
    <div style={{marginTop:"6rem"}}>
        <div style={{width:"100%", textAlign:"center"}}>
        <h2>{useselect[0].name}</h2>
        </div>
        <div style={{textAlign:"center",marginTop:"0rem"}}>
            <img style={{borderRadius:"50%"}} src={gaffar} width={'250px'}></img>
        </div>
        <div style={{display:"flex",justifyContent:"center",marginTop:"3rem"}}>
        <table style={{width:"50%",border:"1px solid black"}} className='table table-bordered'>
            <tr>
            <th>ID</th>
            <th>Class</th>
            <th>Address</th>
            <th>Age</th>
            </tr>
            <tr>
            <td>{useselect[0].id}</td>
            <td>{useselect[0].Class}</td>
            <td>{useselect[0].address}</td>
            <td>{useselect[0].age}</td>
            </tr>
        </table>
        </div>
        <div style={{display:"flex" , justifyContent:"center",  marginTop:"2rem"}}>
        <Link onClick={handleclic} style={{marginLeft:'1rem',marginRight:"1rem"}}  to={''}>
          <button className='btn btn-success ms-2'>Edite Details</button>
        </Link>
        <Link style={{marginLeft:'1rem',marginRight:"1rem"}}  to={'/'}>
          <button onClick={handleclick}  className='btn btn-success ms-2'>Logout</button>
        </Link>
        </div>
    </div>
      
    </>
  )
}

export default Studentdecs;
