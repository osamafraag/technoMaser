import React from 'react'
import Completed from './../assets/pictures/completed.png'

export default function NotFound() {
    return (
<div className="mx-auto m-5 shadow" style={{width:"675px",height:"480px",justifyContent: 'center', textAlign:'center',color:"var(--main-color)",backgroundColor:"#ECECEC"}}> 
<h4 className='text-center pt-5 pb-3'>Your order is on its way</h4>
<h5 className='text-center mb-4'>Thank you for contacting with us</h5>
<img src={Completed} style={{width:"310px",height:"310px"}}></img>
</div>
    )
}