import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, youtubeVideoById } from '../utils/constant';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [videoInfo, setVideoInfo] = useState();


  const getVideoDetails = async () => {
    const data = await fetch(`${youtubeVideoById}${searchParams.get("v")}&key=` + GOOGLE_API_KEY);
    const json = await data.json();
    setVideoInfo(json?.items[0]);

  }
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, [])
  return (
    // <div className='flex flex-col ml-36'>
    //   <div className='flex px-5 '>
    //     <div>
    //       <iframe
    //         className=' rounded-2xl'
    //         width="650"
    //         height="400"
    //         src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    //         title="YouTube video player"
    //         frameBorder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         referrerpolicy="strict-origin-when-cross-origin"
    //         allowfullscreen>
    //       </iframe>
    //     </div>
    //   </div>
    //   <div>
    //     <LiveChat />
    //   </div>
    //   {/* <div className='w-[660px]'>
    //     <h1 className='mt-2 font-bold text-xl ml-2'>{videoInfo?.snippet?.title}</h1>
    //     <h1 className='mt-2 font-semibold ml-2'>{videoInfo?.snippet?.channelTitle}</h1>
    //   </div> */}
    //   <CommentsContainer />
    // </div>

    <div className="flex flex-col box-border">
      <div className="px-5 flex w-full">
        <div className="">
          <iframe
            className='rounded-2xl ml-36 mt-1'
            width="650"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
           <div className='w-[660px] ml-36'>
         <h1 className='mt-2 font-bold text-xl ml-2'>{videoInfo?.snippet?.title}</h1>
         <h1 className='mt-2 font-semibold ml-2'>{videoInfo?.snippet?.channelTitle}</h1>
      </div> 
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className='ml-36'>
      <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage