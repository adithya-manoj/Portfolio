import React from 'react'
import './MoreAbout.css'
import { Outlet } from 'react-router-dom'

function MoreAbout() {
  return (
    <div className='MainContainer m-5 p-5'>
      <h1>Full Stack Developer | Data Analyst</h1>
      <h2>Experience</h2>
      <div className='EducationCont'>
      <h6>Full Stack Intern</h6>
      <p>Softroniics IT Solutions</p>
      
      </div>

      <div className='EduContainer'>

      <h2>Education</h2>

      <div className='EducationCont'>
      <h6>Master's Degree</h6>
      <p>Computer Science</p>
      <p>Pondicherry University</p>
      <p>2021-2023</p>
      </div>

      <div className='EducationCont'>
      <h6>Bachelor's Degree</h6>
      <p>Computer Science</p>
      <p>College of Applied Sciences IHRD, Kozhikode</p>
      <p>2018-2021</p>
      </div>

      </div>
      <h2 className='Title'>Disciplines</h2>

      <div className='EducationCont'>
      <p className='Item'>End-to-end Product Design</p>
      <p className='Item'>Interface Design</p>
      <p className='Item'>User Experience Design</p>
      <p className='Item'>Design Systems</p>
      <p className='Item'>Motion Design</p>
      <p className='Item'>Interaction Design</p>
      <p className='Item'>Consulting</p>
      <p className='Item'>Front-End</p>
      </div>

      <h2>Certifications</h2>
      <div className='EducationCont'>
        <h5>Google Advanced Data Analytics</h5>
      <p className='Item'>Google</p>

      </div>


      
    </div>
  )
}

export default MoreAbout