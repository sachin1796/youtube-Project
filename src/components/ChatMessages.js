import React from 'react'

const ChatMessages = ({name , message}) => {
  return (
    <div className='flex items-center'>
      <img
        className='h-6 m-2'
        alt='userIcon'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
      <span className='mx-2 font-semibold'>{name} :</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessages