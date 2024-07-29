import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName,generateRandomText } from '../utils/helper';
import { useState } from 'react';

const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector(store=> store.chat.messages);
  const [liveMessage , setLiveMessage] = useState("");


  useEffect(() => {
    const i = setInterval(() => {
      // Api polling
      console.log("api polling");
      dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomText(10),
      }))
    },2000);

    return () => clearInterval(i);
  },[])


  return (
    <>
    <div className=' ml-7 mt-[6px]'>
        <div className='flex p-1 h-[32px] flex-row bg-gray-300 border border-gray-500 w-[350px] rounded-t-2xl border-b-0 justify-evenly'>
        <h1 className='font-bold'>Top chat ⬇️</h1>
        <button 
        className='ml-40'
        >❌</button>
        </div>
        <div className='h-[330px] w-[350px] border border-gray-500  border-t-0 overflow-y-scroll flex flex-col-reverse'> 
         {
          chatMessages.map((c , index) =>
          <ChatMessages
          key={index} name={c.name} message={c.message}/>  
          ) 
         }
        </div> 
        <div className='flex p-1 h-[32px] flex-row bg-gray-300 border border-gray-500 w-[350px] rounded-b-2xl border-t-0 justify-evenly'>
        <h1 className='font-bold'>Subscriber Mode ❕</h1>
        </div> 
    </div>
    <div className='flex flex-row'>
      <form 
      onSubmit={(e) => {e.preventDefault();
        console.log(liveMessage)
        dispatch(
          addMessage({
            name:"Sachin Vishwakarma",
            message:liveMessage,
          })
        );
        setLiveMessage("");    
      }}
      >
      <input
      value={liveMessage}
      onChange={(e) => {
        setLiveMessage(e.target.value)
      }}
      type='text'
      className='w-[310px] h-[36px] p-2 ml-7 bg-slate-100 mt-2 rounded-2xl rounded-r-none  border border-gray-600 outline-none'
      placeholder='Enter your chat message'></input>
      <button className='bg-slate-100 border h-[36px] border-gray-600 rounded-2xl mt-2 rounded-l-none p-1 border-l-0'>Send</button>
      </form>
    </div>
    </>
  )
}

export default LiveChat