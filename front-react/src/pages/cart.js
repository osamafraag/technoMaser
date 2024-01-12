import React, { useState } from 'react'
import Order from "./../components/cart/order"
import Card from "./../components/cart/card"

export default function Cart() {
  return (
    <div className="">
      <h3 className="text-center m-5" style={{color:"var(--main-color)"}}>Cart</h3>
      <div className='d-flex' style={{marginLeft:"140px"}}>
        <div>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className='mx-4'>
          <Order/>
        </div>
      </div>
    </div>
  )
}