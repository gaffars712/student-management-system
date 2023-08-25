import React from 'react';
import '../Compunent/Login.css'
import home from '../Images/home.jpg'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const userId = location.state ? location.state.id : null;
    return (
        <>
            <div className=' container  ' >
                <div className=' container55'>
                    <div>
                    {userId && <h1>Welcome, User {userId}</h1>}
                        <h1>Help Students Reach Their Potential</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi tempora qui, officiis, dignissimos impedit molestias vitae optio eligendi cumque eius nostrum accusantium iure debitis quae dicta perferendis culpa earum provident ut exercitationem. Maiores mollitia cum </p>
                    </div>
                    <div>
                        <h5 className='text-primary  ' style={{cursor:"pointer"}}>Learn More</h5>
                    </div>
                </div>
                <div className='container44'>
                    <div>
                        <img src={home}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
