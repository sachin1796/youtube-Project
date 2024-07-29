import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex'>
        <button className= 'px-5  m-2 bg-slate-300 rounded-xl'>{name}</button>
    </div>
  )
}

export default Button