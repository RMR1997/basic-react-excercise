import React from 'react'
import Label from '../../atom/Label'

export default function Navbar(props) {
    const {children} = props;
  return (
        <div className='  bg-red-700 p-5 w-full text-white top-0 text-3xl font-bold'>{children}</div>
    
  )
}

 