import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faHandHoldingDollar, faClockRotateLeft,faTruckFast} from '@fortawesome/free-solid-svg-icons';

export default function IconBar() {
    return (
    <div className='w-100 position-relative' style={{backgroundColor:"var(--main-color)", height:"96px"}}>
        <div className='row text-light fs-2 text-center center w-100'>
            <div className='col'>
            <FontAwesomeIcon className="me-3" style={{color:"var(--icon-color)"}} 
            icon={faTruckFast} />
            <span>Lorem Ipsum</span>
            </div>
            <div className='col'>
            <FontAwesomeIcon className="me-3" style={{color:"var(--icon-color)"}}
            icon={faClockRotateLeft} />
            <span>Lorem Ipsum</span>
            </div>
            <div className='col'>
            <FontAwesomeIcon className="me-3" style={{color:"var(--icon-color)"}}
            icon={faHandHoldingDollar} />
            <span>Lorem Ipsum</span>
            </div>
            <div className='col'>
            <FontAwesomeIcon className="me-3" style={{color:"var(--icon-color)"}}
            icon={faPercent} />
            <span>Lorem Ipsum</span>
            </div>
        </div>
    </div>
    )
}