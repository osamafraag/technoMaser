import React from 'react'
import { useDispatch } from "react-redux";
import {truncateCart} from "./../../store/slices/cart";

export default function Form(props) {
    const {confirm} = props
    const dispatch = useDispatch();
    return (
    <div className="" style={{marginBottom:"75px"}}>
        <h3 className='text-center my-3' style={{color:"var(--main-color)"}}>Location</h3>
        <div className='mx-auto' 
        style={{width:"543px", height:"395px",color:"var(--main-color)"}}>
            <form style={{color:"var(--main-color)"}}>
                <div className="form-group my-2">
                    <label className='m-2 fs-4' htmlFor="name">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" style={{height:"48px"}}/>
                </div>
                <div className="form-group my-2">
                    <label className='m-2 fs-5' htmlFor="phone">Phone Number</label>
                    <input type="text" className="form-control" id="phone" placeholder="Phone" style={{height:"48px"}}/>
                </div>
                <div className="form-group my-2">
                    <label className='m-2 fs-5' htmlFor="address">Address</label>
                    <textarea className="form-control" id="address" placeholder="address" style={{height:"119px"}}/>
                </div>
            </form>
        </div>
        <a className="btn text-light text-center fs-3 mt-5" 
            onClick={()=>{confirm(); dispatch(truncateCart())}}
            style={{width:"359px",height:"56px",backgroundColor:"var(--icon-color)",marginLeft:"535px"}}>Confirm Payment</a>
    </div>
    )
}