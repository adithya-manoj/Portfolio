import React from 'react'
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dp from './images/favicon.png'
import { HiDownload } from "react-icons/hi";
import { Link } from 'react-router-dom';
import resume from './Resume.pdf'


function NavbarComp() {
  const handleDownload =()=>{
    const pdfPath = resume;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'resume.pdf';
    // Append the anchor to the body and click it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Navbar bg="white" data-bs-theme="white" fixed="top">
        <Container className='p-0'>
          <Link to='/App' style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home" > <img src={dp} style={{ width: '55px', height: '50px' }} className='img-fluid rounded-pill ' /> Adithya Manoj V</Navbar.Brand>
          </Link>
          
          <Nav>
            <Nav.Link onClick={handleDownload}>Resume <HiDownload /></Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>

  )
}

export default NavbarComp