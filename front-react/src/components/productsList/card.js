import React from 'react'
import "./../../pages/style.css";
import Product from './../../assets/pictures/product.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';


export default function Card() {
    return (
    <div className="card rounded position-relative shadow" style={{width: "18rem"}}>
        <div className="position-absolute  position-relative rounded bg-white shadow" 
        style={{width:"39px",height:"36px", top:"10px",right:"10px"}}>
        <FontAwesomeIcon className="text-secondary fs-4 center" icon={faHeart} />
        </div>
        <img className="card-img-top" src={Product} alt="Card image cap"/>
        <div className="card-body" style={{backgroundColor:"var(--card-color)"}}>
          <h4 className="card-title" style={{color:"var(--text-color)"}}>Product Name</h4>
          <p className="card-text fs-3 fw-bold" style={{color:"var(--main-color)"}}><span>165 </span> 
          <FontAwesomeIcon icon={faDollarSign} /></p>
          <a href="#" class="btn text-light fs-4"
           style={{backgroundColor:"var(--icon-color)",marginLeft:"150px",width:"104px",height:"40px"}}>
          <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
    </div>
    )
}