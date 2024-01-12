import React from 'react'
import "./../../pages/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faMinus,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import {decreaseCart, deleteProduct, addProduct} from "./../../store/slices/cart";


export default function Card(props) {
  const { productData } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
    return (
        <div className="card mb-3 shadow" style={{width:"637px", height:"176px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={productData.image} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{color:"var(--main-color)"}}>{productData.name}</h5>
              <div className='container position-relative m-5' style={{width:"270px"}}>
              <p className="card-text fs-3 fw-bold position-absolute top-50 start-0 translate-middle" 
              style={{color:"var(--main-color)"}}><span>{productData.price} </span> 
              <FontAwesomeIcon icon={faDollarSign} /></p>
              <div className='position-absolute top-50 start-100 translate-middle d-flex' 
              style={{width:"150px",height:"40px",color:"var(--main-color)"}}>
                <div className="d-flex m-1 border fw-bold" style={{width:"103px",height:"34px"}}>
                <FontAwesomeIcon className='my-auto mx-auto' icon={faPlus} 
                onClick={()=>{dispatch(addProduct(productData))}}/>
                <span className='my-auto mx-auto fs-5'>{productData.count}</span>
                <FontAwesomeIcon className='my-auto mx-auto' icon={faMinus} 
                onClick={productData.count <= 1 ? 
                  () => dispatch(deleteProduct(productData)):
                  () => dispatch(decreaseCart(productData))}/>
                </div>
                <div className="m-1 position-relative border" 
                style={{width:"34px",height:"34px"}} onClick={() => dispatch(deleteProduct(productData))}>
                <FontAwesomeIcon className='center' icon={faTrash} />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}