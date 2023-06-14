import React from 'react'
import CardProduct from '../components/organism/CardProduct'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import Label from '../components/atom/Label'

const data = [{
  id:1,
  image: "public/images/rubick.jpg",
  title: "RUBICK",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 45000,
},

{
  id:2,
  image: "public/images/rubick.jpg",
  title: "GRAND",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 55000,
},

{
  id:3,
  image: "public/images/rubick.jpg",
  title: "MAGUS",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
  price: 75000,
},
{
    id:4,
    image: "public/images/rubick.jpg",
    title: "GRAND",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 55000,
  },
  
  {
    id:5,
    image: "public/images/rubick.jpg",
    title: "MAGUS",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 75000,
  },
  {
    id:6,
    image: "public/images/rubick.jpg",
    title: "GRAND",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 55000,
  },
  
  {
    id:7,
    image: "public/images/rubick.jpg",
    title: "MAGUS",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 75000,
  },
  {
    id:8,
    image: "public/images/rubick.jpg",
    title: "GRAND",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 55000,
  },
  
  {
    id:9,
    image: "public/images/rubick.jpg",
    title: "MAGUS",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 75000,
  },
  {
    id:10,
    image: "public/images/rubick.jpg",
    title: "GRAND",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 55000,
  },
  
  {
    id:11,
    image: "public/images/rubick.jpg",
    title: "MAGUS",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 75000,
  },
  {
    id:12,
    image: "public/images/rubick.jpg",
    title: "GRAND",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore expedita, quis minus modi",
    price: 55000,
  }

]

export default function HomePage() {
  return (
    <>
    <Navbar>PROJECT NAME</Navbar>
    <div className='text-cyan-500 text-center p-6 font-bold'>
    <label className='text-5xl'>CARD LIST</label>
    </div>
    
      <div className="flex flex-wrap justify-center items-center min-h-screen gap-7">
        
    {data.map((product) => (

      <CardProduct keys={product.id}>
      <CardProduct.Header image={product.image}></CardProduct.Header>
      <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
      <CardProduct.Footer price={product.price}>BELI</CardProduct.Footer>

      </CardProduct>

    ))}
    </div>
      <div className='text-center bg-red-700'> 
      <Footer>YOUR NAME</Footer>
  </div>
    </>
  


  )
}
