import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const FooterComp = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-content-center bg-dark text-white h-50'>
                <a href={'https://www.linkedin.com/in/adithya-manojv1156/'} target="_blank" rel="noopener noreferrer">
                    <div className='p-3 m-2'><FaLinkedinIn /></div>
                </a>

                <a href={'https://www.instagram.com/adhi__v?igsh=MThkamFsOHZ3c2E2aA%3D%3D&utm_source=qr'} target="_blank" rel="noopener noreferrer">
                <div className='p-3 m-2'><FaInstagram /></div>
                </a>

                <a href={'https://github.com/adithya-manoj'} target="_blank" rel="noopener noreferrer">
                <div className='p-3 m-2'><FaGithub /></div>
                </a>

            </div>
        </>
    )
}
export default FooterComp