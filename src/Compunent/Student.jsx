import React from 'react';
import Navebar from './Navebar';

const Student = ({ studentsData }) => {
  return (
    <>
      <Navebar />
      <div style={{ width: "15rem", height: "100vh" }} className=' bg-dark'>
        <div>
          <h4 className='text-center' style={{ color: "white" }}>Admin Dashboard</h4>
        </div>
        <div>
          <ul style={{ margin: "3rem 0 3rem 0" }}>
            {studentsData.map((student, index) => (
              <li key={index} style={{ margin: "3rem 0 3rem 0" }}>
                {student.name}
                <button onClick={() => console.log("Student details:", student)}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Student;
