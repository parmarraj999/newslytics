import React from 'react'
import '../chatroom/chatroom.css'

function Chatlist() {
    return (
        <div style={{display:'flex',flexDirection:"column",gap:"1rem",}} >
            <div className='chat_search_bar'>
                <input placeholder='Search' />
            </div>
            <div className='chat_user_list' >
                <div className='user_list' >
                    <div className='user_profile' >
                        <img src='https://i.pinimg.com/736x/37/cf/4f/37cf4fc9a666f04726b926b1b42bf4a4.jpg' />
                    </div>
                    <div className='user_detail' >
                        <h2>User Name</h2>
                        <p>user text profile blah blah</p>
                    </div>
                </div>
                <div className='user_list' >
                    <div className='user_profile' >
                        <img src='https://i.pinimg.com/736x/bb/8a/91/bb8a91a047deaa78f7a89228f80d92da.jpg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatlist