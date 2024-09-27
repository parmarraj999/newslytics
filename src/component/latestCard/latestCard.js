import React from 'react'
import './latestCard.css'

function LatestCard(data) {

    console.log(data)

  return (
    <div className='latest-card' >
        <div className='latest-card-image' >
            <img src={`${data.data.image}`} />
        </div>
        <div className='latesh-card-content' >
            <h3>{data.data.title}</h3>
        </div>
    </div>
  )
}

export default LatestCard