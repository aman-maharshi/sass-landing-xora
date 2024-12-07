import React from 'react'

const Button = ({ icon, children }) => {
  return (
    <button className='relative p-0.5 g5 rounded-2xl shadow-500 group py-2 px-4'>
      {children}
    </button>
  )
}

export default Button