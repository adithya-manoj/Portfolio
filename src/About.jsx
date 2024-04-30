import React from 'react'
import './About.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, Outlet} from 'react-router-dom';
import { Skill } from './Skill';

// Icons Import
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { SiPowerbi } from "react-icons/si";
import { MdDashboard } from "react-icons/md";

function About(props) {

  let skilldata = [
    {
      skill : 'HTML',
      icon : <FaHtml5 />
    },
    {
      skill : 'CSS',
      icon : <FaCss3Alt />
    },
    {
      skill : 'BootStrap',
      icon : <FaBootstrap />
    },
    {
      skill : 'JavaScript',
      icon : <SiJavascript />
    },
    {
      skill : 'JQuery',
      icon : <BiLogoJquery />
    },
    {
      skill : 'React',
      icon : <FaReact />
    },
    {
      skill : 'Node.js',
      icon : <FaNodeJs />
    },
    {
      skill : 'Express.js',
      icon : <FaHtml5 />
    },
    {
      skill : 'MongoDB',
      icon : <SiMongodb />
    },
    {
      skill : 'SQL',
      icon : <FaDatabase />
    },
    {
      skill : 'Data Analytics',
      icon : <DiGoogleAnalytics />
    },
    {
      skill : 'PowerBI',
      icon : <SiPowerbi />
    },
    {
      skill : 'Dashboards',
      icon : <MdDashboard />
    },
    {
      skill : 'Microsoft Excel',
      icon : <FaFileExcel />
    }
  ]
  return (
    <>
    <div className='container'>

        <div className='firstcontainer'>

        <div className='headcontainer'>
            <h1 className='text-center fw-bold '>ABOUT ME</h1>
        </div>

        <div className='textcontainer'>
            <p className='text-center fw-bold '>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>

        </div>

        <Row>
        <Col md={6}>
          <Card className="p-4 border">
            <Card.Title>Get to Know Me!</Card.Title>
            <Card.Text>
              I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product.
              I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then do contact me.
            
            <p>
              
            <Link to='/MoreAbout' style={{ textDecoration: 'none', fontWeight: 'bold' }}>More About Me !</Link>
            </p>

            </Card.Text>
          </Card>
        </Col>

        {/* Skill Div Starts Here */}

        <Col md={6}>
          <Card className="p-4 border">
            <Card.Title>Skills</Card.Title>
            <div>
            <Row>
            {skilldata.map((item) => (
              <Skill
              skill = {item.skill}
              icon = {item.icon}
              />
            )
          
          )}

  
              
              
            </Row>
            </div>
          </Card>
        </Col>
      </Row>

    </div>
    </>
  )
}

export default About