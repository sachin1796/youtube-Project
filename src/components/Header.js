import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };



    const getSearchSuggestions = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}` + `&key=` + GOOGLE_API_KEY);
        const json = await data.json();
        setSuggestions(json.items);
        dispatch(
            cacheResults({
            [searchQuery] :json.items,
        }));
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-10 cursor-pointer'
                    alt='hamburgerIcon'
                    src='https://static.vecteezy.com/system/resources/previews/009/189/919/original/eps10-red-hamburger-menu-bar-line-art-icon-or-logo-in-thick-rounded-circle-isolated-on-white-background-free-vector.jpg'>
                </img>
                <a href='/'>
                    <img
                        className='h-8 mx-3'
                        alt='youtubeLogo'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s'>
                    </img>
                </a>

            </div>
            <div className='col-span-10'>
                <div>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        className='w-1/2 ml-12 px-10 border border-gray-400 border-r-0 outline-none rounded-l-full p-2'
                        type='text'
                        placeholder='Search' />
                    <button
                        className='border border-gray-400 rounded-r-full p-2 bg-grey-100'>Search</button>
                </div>
                {showSuggestions &&
                    <div className='absolute shadow-lg rounded-lg overflow-y-auto  ml-20 mt-1 py-2 px-5 w-96 bg-white rounded-b-xl border border-gray-100'>
                        <ul>
                            {suggestions.map(s =>
                                <li key={s.snippet.title} className='py-2 shadow-sm hover:bg-gray-100 cursor-pointer'>🔎  {s.snippet.title}</li>
                            )}
                        </ul>
                    </div>
                }
            </div>
            <div className='col-span-1'>
                <img
                    className='h-10'
                    alt='userIcon'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            </div>

        </div>
    )
}

export default Header;