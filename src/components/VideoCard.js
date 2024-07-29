import React from 'react'

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-80 shadow-sm rounded-lg'>
      <img
        className='rounded-lg'
        alt='thumbnail'
        src={thumbnails.medium.url}></img>
      <ul >
        <li className='font-medium py-1'>{title}</li>
        <li className='font-light'>{channelTitle}</li>
      </ul>
    </div>
  )
};

export default VideoCard