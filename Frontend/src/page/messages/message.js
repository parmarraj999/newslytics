import React from 'react';
import './message.css';

function Message() {
    return (
        <div className='message_container' >
            <div className='message_header' >
                <div className='message_user_detail' >
                    <div className='chat_user_profile' >
                        <img src='https://i.pinimg.com/736x/37/cf/4f/37cf4fc9a666f04726b926b1b42bf4a4.jpg' />
                    </div>
                    <div>
                        <h2>User Name</h2>
                        <p>Blah Blah</p>
                    </div>
                </div>
                <div>
                    <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>
                </div>
            </div>
            <div className='chat_container' >

            </div>
            <div className='chat_input_container' >
                <div className='chat_input' >
                    <input placeholder='Your message' />
                    <div className='send_button' >
                        <svg style={{ width: "30px", color: "grey" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message