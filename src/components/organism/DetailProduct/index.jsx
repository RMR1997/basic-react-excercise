import React from 'react'

export default function DetailProduct(props) {
    const {title, children} = props;
    return (
        <>
        <div className='px-5 py-4'>
        <a href="#">
            <h1 className='text-5xl font-bold text-slate-900'> {title}
            </h1>
            <p className='mt-1 text-4xl text-black text-base text-justify'> {children}</p>
        </a>
        </div>
       
        </>
    )
}
