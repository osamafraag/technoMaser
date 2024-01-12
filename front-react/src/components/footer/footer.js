import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons';
import Logo from './../../assets/pictures/Rectangle 1.png';


export default function Footer() {
    return (
        <div className='text-center border-top mt-5 pt-5'
        style={{boxShadow: "0px -10px 20px 10px #d3d3d3"}}>
            <img src={Logo} className='m-2'></img>
            <p style={{color:"var(--main-color)"}} className='fs-4'>
            <FontAwesomeIcon className='' icon={faEnvelope} />
            <span className='m-2'>email@gmai.com</span>
            </p>
            <p style={{color:"var(--main-color)"}} className='fs-4'>
            <FontAwesomeIcon className='' icon={faPhoneVolume} />
            <span className='m-2'>+125699917</span>
            </p>
            <p style={{color:"var(--main-color)"}} className='m-2 fs-3'>
            <FontAwesomeIcon className='m-2' icon={faFacebook} />
            <FontAwesomeIcon className='m-2' icon={faTwitter} />
            <FontAwesomeIcon className='m-2' icon={faInstagram} />
            </p>
        </div>
    )
}