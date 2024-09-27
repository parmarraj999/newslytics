import React, { useContext, useEffect, useState } from 'react'
import './header.css'
import { SingleData } from '../../provider/context'

function Header() {

    const singleData = useContext(SingleData);

    useEffect(()=>{
        if(singleData){
            convertTimestamp(singleData.singleData.publishedAt)
        }
    })

    const [formattedDate, setFormattedDate] = useState('');

    const convertTimestamp = (timestamp) => {
        const dateObject = new Date(timestamp);
        const day = dateObject.getDate();
        const month = dateObject.toLocaleString('en-US', { month: 'short' });
        const year = dateObject.getFullYear();
        setFormattedDate(`${day}, ${month} ${year}`);
      };

    return (
        <div className='header-container' >
            <div className='header-img' >
                <img src={`${singleData.singleData.image}`} />
            </div>
            <div className='header-content' >
                <div style={{ display: 'flex', gap: "1rem", alignItems: 'center' }}>
                    <div className='publish-date'>published: <span>{formattedDate}</span></div>
                </div>
                <div style={{display:'flex',flexDirection:"column",gap:'1rem'}}>
                    <h5 className='article-title'>{singleData.singleData.title}</h5>
                    <p className='article-description'>{singleData.singleData.description}</p>
                </div>
                <div className='more-btn' >Read More</div>
            </div>
        </div>
    )
}

export default Header