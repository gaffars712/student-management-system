import React from 'react';
import facebook from '../Images/faceboooke.png'
import twitter from '../Images/twiter.png'
import instagram from '../Images/instagram.png'
import youytu from '../Images/linkeding.png'


const Footer = () => {
  return (
    <>
        <div style={{background:"black", paddingTop:"10rem" , width:"100%"}}>
            <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img src={facebook} width={'60px'}  style={  { borderRadius:"50%",marginLeft:"1rem",marginRight:"1rem"}}></img>
                    <img src={twitter}width={'60px'} style={{ borderRadius:"50%", marginLeft:"1rem",marginRight:"1rem"}}></img>
                    <img src={instagram}width={'60px'} style={{ borderRadius:"50%", marginLeft:"1rem",marginRight:"1rem"}}></img>
                    <img src={youytu}width={'60px'} style={{ borderRadius:"50%", marginLeft:"1rem",marginRight:"1rem"}}></img>


                </div>
                <div style={{textAlign:"center", marginTop:"3rem"}}>

                <input style={{width:"15rem",borderRadius:"1%",outline:" 1px solid blue",border:"1px solid red"}} type='email' name='email' placeholder='Enter Your Email' ></input>
            </div>
            <p style={{color:"white", marginTop:"1rem"}}>
            © 2023 Shaikh Gaffar. All rights reserved.
            </p>
            </div>
        </div>
      
    </>
  )
}

export default Footer;
