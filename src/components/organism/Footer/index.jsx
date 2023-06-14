import React from 'react'
import Label from '../../atom/Label'

export default function Footer(props) {
    const {children} = props;
  return (
        <div className='mt-6 bg-red-700 w-screen text-white p-3 text-2xl font-bold'>{children}</div>
    
  )
}

