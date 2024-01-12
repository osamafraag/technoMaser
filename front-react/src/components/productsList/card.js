import React,{useState} from 'react'
import "./../../pages/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { useDispatch ,useSelector} from "react-redux";
import { addProduct } from "../../store/slices/cart";

export default function Card(props) {
  const { productData } = props;
  const [loved,setLoved] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
    return (
    <div className="card rounded position-relative shadow" style={{width: "18rem"}}>
        <div className="position-absolute  position-relative rounded bg-white shadow" 
        style={{width:"39px",height:"36px", top:"10px",right:"10px"}}>
        <FontAwesomeIcon className="fs-4 center" icon={faHeart}
        onClick={()=>{setLoved(!loved)}} 
        style={loved? {color:"var(--icon-color)"}:{color:"#979797"}}/>
        </div>
        <img className="card-img-top" src={productData.image} alt="Card image cap"/>
        <div className="card-body" style={{backgroundColor:"var(--card-color)"}}>
          <h4 className="card-title" style={{color:"var(--text-color)"}}>{productData.name}</h4>
          <p className="card-text fs-3 fw-bold" style={{color:"var(--main-color)"}}><span>{productData.price}</span> 
          <FontAwesomeIcon icon={faDollarSign} /></p>
          <a class="btn text-light fs-4" onClick={()=>{dispatch(addProduct(productData))}}
          style={{backgroundColor:"var(--icon-color)",marginLeft:"150px",width:"104px",height:"40px"}}>
          <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
    </div>
    )
}