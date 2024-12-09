import { useState } from 'react';
import './App.css';
import Nav from './page/nav/nav';
import { BrowserRouter, Route, Router, Routes, useLocation } from 'react-router-dom';
import Layout from './page/layout/layout';
import Chatroom from './page/chatroom/chatroom';
import Search from './page/search/search';
import Request from './page/request/request';

function App() {


  return (
    <div className='App' >
      <BrowserRouter>
        <Nav />
        <div className='app_layout_container' >
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route path='' element={<Chatroom/>}/>
              <Route path='search' element={<Search/>}/>
              <Route path='request' element={<Request/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;