import React from 'react'

export default function Label(props) {
  const {htmlFor, children, size } = props;
    return (
        <label htmlFor={htmlFor} className={ ` ${size} block text-sm font-medium text-black-700 mb-1` } >
            {children}
        </label>
  )
}
