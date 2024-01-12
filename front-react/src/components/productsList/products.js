import React from 'react'
import Card from './card';
import Product from './../../assets/pictures/product.png'

export default function ProductsList() {
    const products = [{id:0,name:"Product Name",price:500,image:Product},
    {id:1,name:"Product Name",price:50,image:Product},
    {id:2,name:"Product Name",price:450,image:Product},
    {id:3,name:"Product Name",price:60,image:Product},
    {id:4,name:"Product Name",price:76,image:Product},
    {id:5,name:"Product Name",price:114,image:Product},
    {id:6,name:"Product Name",price:1500,image:Product},
    {id:7,name:"Product Name",price:87,image:Product}]
    return (
    <div className='mb-5 pb-5'>
        <h2 className='my-5 mx-auto text-center' style={{color:"var(--text-color)"}}>Products</h2>
        <div className="container row row-cols-1 row-cols-md-4 g-4 m-auto">
          {products?.map((product, index) => {
            return (
              <div className="col" key={product.id}>
                <Card productData={product}/>
              </div>
            );
          })}
        </div>
    </div>
    )
}