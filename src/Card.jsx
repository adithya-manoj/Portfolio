import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardComp(props) {
  return (
     <>
<div className='d-flex justify-content-center align-items-center '>

        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
            <Button className='bg-white'><Link to='/MoreAbout'>More Details</Link></Button>
          </Card.Body>
        </Card>
</div>
        </>
  );
}

export default CardComp;
