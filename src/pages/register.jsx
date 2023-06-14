import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'
import Register from '../components/organism/Register'

export default function RegisterPage() {
    return (
  
        <>
        
        <div >
            <Navbar>PROJECT NAME</Navbar>
        </div>

    <div className='flex gap-5 h-2/3'>
    <div >
            <img src="public/images/rubick.jpg" alt="gambar" className='rounded-lg max-w-4xl p-10 ml-44 mt-20' />
    </div>

    <div className='mt-10 mt-28'>
        <AuthLayout title="Register" desc="Register" type="register">   
        <Register/>
        </AuthLayout>
       </div>
    </div>

    <div className='text-center bg-red-700'> 
        <Footer>YOUR NAME</Footer>
    </div>


        </>

       
    

    )
}




