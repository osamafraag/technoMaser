import React from 'react'
import "./../../pages/style.css";
import Product from './../../assets/pictures/product.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faMinus,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';


export default function Card() {
    return (
        <div className="card mb-3 shadow" style={{width:"637px", height:"176px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Product} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{color:"var(--main-color)"}}>Product Name</h5>
              <div className='container position-relative m-5' style={{width:"270px"}}>
              <p className="card-text fs-3 fw-bold position-absolute top-50 start-0 translate-middle" 
              style={{color:"var(--main-color)"}}><span>165 </span> 
              <FontAwesomeIcon icon={faDollarSign} /></p>
              <div className='position-absolute top-50 start-100 translate-middle d-flex' 
              style={{width:"150px",height:"40px",color:"var(--main-color)"}}>
                <div className="d-flex m-1 border fw-bold" style={{width:"103px",height:"34px"}}>
                <FontAwesomeIcon className='my-auto mx-auto' icon={faPlus} />
                <span className='my-auto mx-auto fs-5'>1</span>
                <FontAwesomeIcon className='my-auto mx-auto' icon={faMinus} />
                </div>
                <div className="m-1 position-relative border" style={{width:"34px",height:"34px"}}>
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