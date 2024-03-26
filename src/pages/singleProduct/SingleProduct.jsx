import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './SingleProduct.css'

const SingleProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [product,setProduct] = useState({})
  const fetchProduct = async()=>{
   const response = await axios.get("https://6601a11c87c91a11641b49f1.mockapi.io/products/" + id )
   if(response.status === 200){
    setProduct(response.data)
   }else{
    alert("Something went wrong")
   }
  }

  const deleteProduct = async ()=>{
    const response = await axios.delete("https://6601a11c87c91a11641b49f1.mockapi.io/products/" + id )
    if(response.status === 200){
      navigate("/")
    }else{
     alert("Something went wrong")
    }
  }

  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <>
    <Navbar />
    <div class="product-container">
        <div class="product-image">
            <img src={product.image} alt="Product Image" />
        </div>
        <div class="product-details">
            <h2 class="product-name">{product.name}</h2>
            <p class="product-description">{product.description}</p>
            <p class="product-price">${product.price}</p>
            <p class="product-category">{product.category}</p>
            <button class="add-to-cart-btn" onClick={deleteProduct}>Delete</button>
            <button class="add-to-cart-btn" style={{marginLeft:'10px'}}>Edit</button>
        </div>
    </div>
    </>
  )
}

export default SingleProduct