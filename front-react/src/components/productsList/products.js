import React from 'react'
import Card from './card';

export default function ProductsList() {
    const products = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
    return (
    <div className='mb-5 pb-5'>
        <h2 className='my-5 mx-auto text-center' style={{color:"var(--text-color)"}}>Products</h2>
        <div className="container row row-cols-1 row-cols-md-4 g-4 m-auto">
          {products?.map((product, index) => {
            return (
              <div className="col" key={product.id}>
                <Card />
              </div>
            );
          })}
        </div>
    </div>
    )
}