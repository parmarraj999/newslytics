import React, { useState } from 'react'
import './tabs.css'

function Tabs({setSearch}) {

    const [tab, setTab] = useState("For You")

    const array = [
        "For You",
        "Global News",
        "Business",
        "Health",
        "Education",
        "Technology",
        "Sports",
        "Science",
        "Entertainment",
        "Gaming",
        "Cryptocurrency"
    ]

    const setData = (text) =>{
        setSearch(text)
        setTab(text)
    }

  return (
    <div className='tabs-container' >
        {
            array.map((text)=>{
                return(
                    <div style={tab === text ? {background:"black",color:"white"}:{}} className='tabs' 
                    onClick={()=>setData(text)}
                    >
                        {text}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tabs