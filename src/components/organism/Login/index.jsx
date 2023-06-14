import React from 'react'
import InputForm from '../../molecules/InputForm'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <form action="">
        <InputForm label="Email" type="email" placeholder="Masukan Email"/>
        <InputForm label="Password" type="password" placeholder="Masukan Password"/>
        <Button color="bg-blue-500"><Link to="/homePage" className='text-white-500 font-bold'>LOGIN </Link></Button>
    </form>
  )
}
