import React from 'react'
import "./../../pages/style.css";
import Left from './../../assets/pictures/left.png';
import Right from './../../assets/pictures/right.png';

export default function Landing() {
    return (
        <div className='landing'>
        <div className='container text-light' style={{paddingTop:"150px"}}>
            <div className='w-50 mb-5' style={{marginLeft:"230px"}}>
              <h2 className='mb-5'>Lorem Ipsum</h2>
              <div className='fs-3'>
               Lorem Ipsum is simply dummy text of the printing <br/>and typesetting industry.
              </div>
            </div>
            <div className='w-100 position-relative'>
                <img src={Left} className='position-absolute start-0'></img>
                <img src={Right} className='position-absolute end-0'></img>
            </div>
            <a className='btn text-light text-center fs-3 mt-4' 
            style={{backgroundColor: "var(--main-color)", width: "258px", height:"56px", marginLeft:"230px"}}>
            Buy Now</a>
        </div>
    </div>
    )
}