import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'
import { Link } from 'react-router-dom'
import Navbar from '../components/organism/Navbar'
import Footer from '../components/organism/Footer'

export default function LandingPage() {
    return (
  
        <>
        
        <div >
        <Navbar>PROJECT NAME</Navbar>
        </div>

    <div className='flex w-[90%] m-10 gap-10'>
    <div >
        <img src="public/images/rubick.jpg" alt="gambar" className='rounded-lg h-62 w-full' />
    </div>

    <div className='flex w-[40%] justify-center items-center'>
       <AuthLayout title="Login" desc="silahkan masuk" type="login" className="">
        <Login>
        </Login>
        {/* <p className='text-sm mt-4 text-center'>
                Don't have account? {" "}4
                
                {/* <a className='font-bold text-blue-500' href="/register">Register</a> */}

                {/* <Link className='font-bold text-blue-500' to="/registerpage">Register</Link>
            </p> */} 
        </AuthLayout>
       </div>
    </div>

    <div className='text-center'> 
        <Footer>YOUR NAME</Footer>
    </div>


        </>

       
    

    )
}




