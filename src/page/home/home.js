import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import Tabs from '../tabs/tabs'
import Header from '../../component/header/header'
import axios from 'axios'
import { SingleData } from '../../provider/context'
import LatestCard from '../../component/latestCard/latestCard'


function Home() {

  const   API_KEY = "frpBJggXT8Xuh6zPedIG8Gpb4mgtZrCUJKoBD223"
  const   [search,setSearch] = useState('india');

  const singleData = useContext(SingleData)

  const [data,setData] = useState([])


  const fetchNews = () => {
    const response = axios.get(`https://gnews.io/api/v4/search?q=${search}&lang=en&apikey=e47627e886576648a6b7a99bb092fdbf`)
    .then((res)=>{
      console.log(res)
      console.log(res.data.articles[0])
      singleData.setSingleData(res.data.articles[0])
      setData(res.data.articles)
    })
  } 

  useEffect(()=>{
    fetchNews();
  },[])
  useEffect(()=>{
    fetchNews();
  },[search])

  return (
    <div className='home-container' >
      <div className='nav-container' >
        <div>
            <h3>Newlytics</h3>
        </div>
        <div className='input-container'>
        <svg onClick={fetchNews} style={{width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
            <input placeholder='Ex. Technology' onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        </div>
        <Tabs setSearch={setSearch} />
        <Header/>
          <h3 style={{marginTop:"2rem",fontSize:"24px"}}>Latest News</h3>
        <div className='latest-card-container'>
          {
            data.map((data)=>{
              return(
                <LatestCard data={data} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Home