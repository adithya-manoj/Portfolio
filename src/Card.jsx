// CardComponent.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import portfolioimg from './images/portfolio.png';
import deckimg from './images/deck.png';
import calcimg from './images/calcimg.png';
import cheeseimg from './images/cheeseimg.png';
import todoimg from './images/todoimg.png';
import portimg from './images/port.png';
import plantyimg from './images/planty.png';
import { CardBody } from 'react-bootstrap';
import {Container, Row, Col } from 'react-bootstrap';
function CardComponent() {
  const navigate = useNavigate();
  
  const datas = [
    {
      img: deckimg,
      title: 'Deck',
      text: 'Front-End Project Using React',
      category: 'React'
    },
    {
      img: calcimg,
      title: 'Movie Search',
      text: 'Basic JavaScript Project',
      category: 'JavaScript'
    },
    {
      img: cheeseimg,
      title: 'Cheese & Bacon',
      text: 'Front-End Project Using BootStrap',
      category: 'BootStrap'
    },
    {
      img: todoimg,
      title: 'Recipe Finder',
      text: 'Front-End Project Using JavaScript',
      category: 'JavaScript'
    },
    {
      img: plantyimg,
      title: 'Garden',
      text: 'Basic Project using BootStrap',
      category: 'BootStrap'
    },
    {
      img: portimg,
      title: 'Port',
      text: 'Front-End Project Using HTML CSS',
      category: 'BootStrap'
    }
  ];

  const handleMoreDetails = (item) => {
    navigate('/CardDisplay', { state: { project: item } });
  };

  return (
    <Container>
      <h2 className='text-center p-3 my-4'>Projects</h2>
    <Row className="justify-content-center">
      {datas.map((item, index) => (
        <Col xs={12} md={6} lg={4} key={index} className="mb-4 d-flex justify-content-center">
          <Card style={{ width: '30rem', height: '20rem' }}>
            <Card.Img variant="top" src={item.img} className='h-50'/>
            <Card.Body className='h-50'>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button className='bg-white text-dark' onClick={() => handleMoreDetails(item)}>
                More Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default CardComponent;
