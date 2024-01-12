import React from 'react'
import "./../../pages/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign} from '@fortawesome/free-solid-svg-icons';


export default function Order(props) {
    const { total,showForm ,showButton} = props;
    return (
    <div className="shadow border rounded fs-4" style={{width:"449px", height:"576px",color:"var(--text-color)"}}>
        <h3 className='text-center mt-4' style={{color:"var(--main-color)"}}>Order Summary</h3>
        <div className='m-4 d-flex'>
            <div className='w-50'>Cart total</div>
            <span className='' style={{marginLeft:"30%"}}>{total} <FontAwesomeIcon icon={faDollarSign} /></span>
        </div>
        <div className='m-4 d-flex'>
            <div className='w-50'>Tax</div>
            <span className='' style={{marginLeft:"30%"}}>{total*0.05}<FontAwesomeIcon icon={faDollarSign} /></span>
        </div>
        <div className='m-4 d-flex'>
            <div className='w-50' >Delivery</div>
            <span className='' style={{marginLeft:"30%"}}>10<FontAwesomeIcon icon={faDollarSign} /></span>
        </div>
        <div className='border shadow my-2 mx-5'></div>
        <div className='m-4 d-flex'>
            <div className='w-50'>Total</div>
            <span className=''  style={{marginLeft:"30%",color:"var(--main-color)"}} >{total+total*0.05+10}<FontAwesomeIcon icon={faDollarSign} /></span>
        </div>
        {showButton?<a className='btn text-light text-center fs-4 my-5' 
        onClick={()=>{showForm()}}
        style={{width:"270px",height:"56px",backgroundColor:"var(--icon-color)", marginLeft:"89px"}}>
            Check Out
        </a>:<></>}
        
    </div>
    )
}