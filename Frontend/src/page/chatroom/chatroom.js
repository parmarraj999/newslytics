import React from 'react'
import './chatroom.css';
import Chatlist from './chatlist';
import Message from '../messages/message';

function Chatroom() {
  return (
    <div className='chatroom_container' >
      <Chatlist/>
      <Message/>
    </div>
  )
}

export default Chatroom