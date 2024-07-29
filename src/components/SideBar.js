import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null; 

  return (
    <div className='p-5 shadow-lg w-48'>
      <Link to="/">
      <h1 className='font-bold'>Home</h1>
      </Link>
      <h1 className='font-bold'>Shorts</h1>
      <h1 className='font-bold'>PlayList</h1>

      <h1 className='font-bold'>Subscriptions </h1>
      <ul>
        <li>Cricbuzz</li>
        <li>NewFunkTown</li>
        <li>KIDzzEE</li>
        <li>JsCoach</li>

      </ul>
      <h1 className='font-bold pt-3'>Trending</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>

      </ul>
    </div>

  )
}

export default SideBar