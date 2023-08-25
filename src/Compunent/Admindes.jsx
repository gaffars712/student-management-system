import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Admindes = () => {
    const navigat = useNavigate();

  const useselect = useSelector((state) => state.users);

    useEffect(()=>{
        alert("Admin Login Success")
    },)

    const handelclick = () =>{
        alert("LogOut Secces")
        navigat('/')
    }
  return (
    <div style={{marginTop:"6rem", display: "", justifyContent: "",height:"100vh" }}>
     
      <div style={{width:"100%"}} >
        <h2 className='text-center' style={{ borderBottom: "solid 1px gray", boxShadow: "5px 10px 5px #888888", paddingBottom: "1rem" }}>Student Management System</h2>
      </div>
      <br></br>
    <br></br>
      <div style={{ marginTop:"-2rem",background:""}}>
        <h3 style={{paddingLeft:"3rem",color:"black", fontWeight:"bold"}}>Dashbord </h3>
    
        
    
        <div  style={{display:"flex",justifyContent:"space-evenly"}}>
            <div  style={{border :" 1px solid black",backgroundColor:"white",width:"18rem", marginTop:"0.8rem"}}> 
                <h3 style={{color:"black",textAlign:"center", }}>Admin</h3>
                <div>
                    <hr style={{color:"black", width:"",height:"20px"}}/>
                    <p  style={{color:"black",textAlign:"center"}}>Total :- 01</p>

                </div>
            </div>

            <div  style={{border :" 1px solid black",backgroundColor:"white",width:"18rem", marginTop:"0.8rem"}}> 
                <h3 style={{color:"black",textAlign:"center", }}>Studant's</h3>
                <div>
                    <hr style={{color:"black", width:"",height:"20px"}}/>
                    
                    <p   style={{color:"black",textAlign:"center"}}>
                    Total :- {useselect.length} </p>
                    

                </div>
                <div style={{margin:"auto", textAlign:"center"}}>
                <Link to={'/login/admindes/managestud'}> <button className='btn btn-primary ' style={{textAlign:"", width:'80%',marginBottom:"1rem",borderRadius: "2%"}}>Manage Students</button>
                </Link> </div>
            </div>

            <div  style={{border :" 1px solid black",backgroundColor:"white",width:"18rem", marginTop:"0.8rem"}}> 
                <h3 style={{color:"black",textAlign:"center", }}>classes</h3>
                <div>
                    <hr style={{color:"black", width:"",height:"20px"}}/>
                    <p  style={{color:"black",textAlign:"center"}}>Total :- 10</p>

                </div>
            </div>
        </div>

        <div>
            <div >
                <h3 style={{marginTop:"3rem", paddingLeft:"3rem",fontWeight:"bold",}}>List Of Admins</h3>
            </div>
            <div className='container'>
                <table style={{width:"100%",marginTop:"-5rem"}}>
                    <tr style={{borderBottom:"1px solid black",height:"3rem"}}>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr style={{borderBottom:"1px solid black",height:"3rem"}}>
                        <td>admin@gmail.com</td>
                        <td>admin</td>
                    </tr>
                </table>
            </div>
        </div>
        <div style={{textAlign:"center"}}>
            <button className='btn btn-danger' onClick={handelclick}>Logout</button>
        </div>
       
      </div>
    </div>
  );
}

export default Admindes;
