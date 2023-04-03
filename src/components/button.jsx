import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-red-600 text-white font-[Jura] pb-24 pt-16 md:py-1 md:px-10 rounded-3xl md:rounded-full hover:bg-red-400 duration-500 w-[80vw] md:w-auto'>
      {props.children}
    </button>
  )
}

export default Button