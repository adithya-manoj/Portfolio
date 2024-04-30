import React from 'react'


function Casestudy(props) {
  return (
    <>
    <div className='containerfluid p-3 '>
<div className='headcontainer text-center '>

    <h1>{props.projectname}</h1>
</div>
    <p>This page contains the case study of {props.projectname} Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</p>

    <div className='p-3 m-2'>
    <button className='rounded-pill bg-dark text-light'>PROJECT LINK</button>
    </div>

    
    <img src={props.img} className='h-50 w-50'/>
    <div className='text-center'>

    <h2>Project Overview</h2>
    </div>

    <p>{props.projectoverview}</p>

    <div className='text-center'>
    <h2>Tools Used</h2>
    </div>

    <div>

    <img src={props.html}/>
    <img src={props.css}/>
    <img src={props.bootstrap}/>
    <img src={props.javascript}/>
    <img src={props.react}/>
    <img src={props.git}/>
    <img src={props.github}/>
    </div>
    </div>
        
    </>
  )
}

export default Casestudy