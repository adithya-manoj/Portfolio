import React from 'react'
import { Col } from 'react-bootstrap'

export const Skill = (props) => {
  return (
    <>
        <Col sm={4}>
        <div className='skill'>
        <div>{props.skill}</div>
        <div>{props.icon}</div>
        </div>
        </Col>
    </>
  )
}
