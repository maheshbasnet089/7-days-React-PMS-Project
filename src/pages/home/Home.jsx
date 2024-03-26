import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import axios from 'axios'

const Home = () => {
  const [products,setProducts] = useState([])

  const fetchProducts = async ()=>{
   const response = await axios.get('https://6601a11c87c91a11641b49f1.mockapi.io/products')
   if(response.status === 200){
    setProducts(response.data)
   }else{
    alert("Something went wrong")
   }
  }

  useEffect(()=>{
    fetchProducts()
  },[])


  return (
 <>
    <Navbar />
   <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
   {
    products.length > 0 && products.map((product)=>{
      return (
        <Card product={product} />
      )
    })
   }


   </div>

 </>
  )
}

export default Home