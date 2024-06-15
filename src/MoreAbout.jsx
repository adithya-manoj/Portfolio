import React from 'react';
import './MoreAbout.css';
import { Outlet } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { Row, Col } from 'react-bootstrap';


function MoreAbout() {
  const certifications = [
    {
      title: 'Google Advanced Data Analytics',
      desc: "Obtained proficiency in advanced data analytics techniques through Google's certification program. Skilled in utilizing tools like BigQuery, Dataflow, Dataprep, and TensorFlow to analyze large datasets and derive actionable insights for business growth."
    },
    {
      title: 'Excel Skills by JPMorgan Chase & Co',
      desc: 'Acquired proficient command of Excel functionalities and data analysis techniques, data cleansing, manipulation, and conditional formatting techniques.'
    },
    {
      title: 'Data Analytics by CISCO Networking Academy',
      desc: 'Transform data using analytics tools, Analyse data using basic statistical and data preparation techniques with hands-on lab using Excel, SQL, Tableau and other tools.'
    },
    {
      title: 'Machine Learning with Python',
      desc: 'Cognitive class. ai Powered by IBM Developer Skills Network.'
    }
  ];

  return (
    <div className='MainContainer m-5 p-5'>
      <div className='EduContainer'>
        <h2>Education</h2>
        <div className=' w-100 rounded-4 p-4 my-4'>
          <Row>
            <Col md={2} className="d-flex justify-content-center align-items-center">
              <FaGraduationCap size="3rem" />
            </Col>
            <Col md={10}>
              <div className='text-dark fw-light'>2021-2023</div>
              <div className='fs-4 fw-bolder '>M.Sc Computer Science</div>
              <div className='fs-5 fw-bold text-muted'>Pondicherry University</div>
            </Col>
          </Row>
        </div>
        <div className=' w-100 rounded-4 p-4 my-4'>
          <Row>
            <Col md={2} className="d-flex justify-content-center align-items-center">
              <FaGraduationCap size="3rem" />
            </Col>
            <Col md={10}>
              <div className='text-dark fw-light'>2018-2021</div>
              <div className='fs-4 fw-bolder '>B.Sc Computer Science</div>
              <div className='fs-5 fw-bold text-muted'>College of Applied Sciences IHRD, Kozhikode</div>
            </Col>
          </Row>
        </div>

      </div>

      <h2>Certifications</h2>
      {certifications.map((item, index) => (
        <div className='EducationCont' key={index}>
          <div className=' w-100 rounded-4 p-2 my-4'>
          <Row>
            <Col md={2} className="d-flex justify-content-center align-items-center">
              <LiaCertificateSolid size="3rem" />
            </Col>
            <Col md={10}>
              <div className='fs-4 fw-bolder '>{item.title}</div>
              <div className='fs-6 fw-bold text-muted'>{item.desc}</div>
            </Col>
          </Row>
        </div>
        </div>
      ))}

      <Outlet />
    </div>
  );
}

export default MoreAbout;