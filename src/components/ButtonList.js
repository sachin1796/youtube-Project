import React from 'react'
import Button from './Button';

const list = ["All" ,"Live" , "Gaming" , "Cricket" , "Diljit Dosanjh"]

const ButtonList = () => {
  return (
    <div className='flex overflow-x-auto'>
      <Button name="All" />
      <Button name="Live" />
      <Button name="Games" />
      <Button name="Indian Cricket Team" />
      <Button name="Diljit Dosanjh" /> 
      <Button name="All" />
      <Button name="Live" />
      <Button name="Games" />
      <Button name="Indian Cricket Team" />
      <Button name="Diljit Dosanjh" /> 
    </div>
  )
}

export default ButtonList