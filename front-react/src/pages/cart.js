import React, { useState } from 'react'
import Order from "./../components/cart/order"
import Card from "./../components/cart/card"
import { useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Form from './../components/form/form'
import './style.css'

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [show,setShow] = useState(false)
  var totalPrice = 0
  const form = () => {
    setShow(!show)
  }
  const navigateToHome = () => {
    navigate(`/`);
  };
  const confirmOrder = () => {
    navigate(`/completed`);
  };
  const [style, setStyle] = useState('text-muted')
  return (
    <>
    {cart.cartedProducts?.length >= 1 ?
    <div className="">
    <h3 className="text-center m-5" style={{color:"var(--main-color)"}}>Cart</h3>
    <div className='d-flex' style={{marginLeft:"140px",marginBottom:"100px"}}>
      <div>
        {cart.cartedProducts?.map((product,index)=>{
          totalPrice = totalPrice + product.price * product.count
          return(
            <Card productData={product} key={product.id}/>
          )
        })}
      </div>
      <div className='mx-4'>
        <Order total={totalPrice} showForm={form} showButton={!show}/>
      </div>
    </div>
    {show? <Form confirm={confirmOrder}/>:<></>}
    
  </div>
  :
  <div className="text-muted" style={{justifyContent: 'center', textAlign:'center', fontSize: '250px'}}>
  <FontAwesomeIcon className={style} icon={faCartPlus} 
  onMouseEnter={()=>{setStyle('text-dark')}}
  onMouseLeave={() =>{setStyle('text-muted')}}
  onClick={navigateToHome}/>
</div>
  }
  </>
    
  )
}