import React from 'react';
import "./style.css";
import Landing from '../components/landing/landing';
import IconBar from '../components/iconBar/iconBar';
import ProductsList from '../components/productsList/products';


export default function Home() {
  return (
    <>
        <Landing/>
        <IconBar/>
        <ProductsList/>
    </>
  )
}