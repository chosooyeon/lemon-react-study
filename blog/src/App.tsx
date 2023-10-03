import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Link } from "react-router-dom"

function App() {
  return (
    <>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/post'>Post</Link></li>
      <li><Link to='/post/:id'>Post Detail</Link></li>
      <li><Link to='/post/new'>Post New</Link></li>
      <li><Link to='/post/edit/:id'>Post Edit</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<h1>home</h1>}></Route>
      <Route path='/post' element={<h1>Post</h1>}></Route>
      <Route path='/post/:id' element={<h1>Post Detail</h1>}></Route>
      <Route path='/post/new' element={<h1>Post New</h1>}></Route>
      <Route path='/post/edit/:id' element={<h1>Post Edit</h1>}></Route>
      <Route path='/profile' element={<h1>Profile</h1>}></Route>

      {/* 다른 페이지에 갔을 때 강제로 root 페이지로 이동시켜준다 */}
      <Route path='*' element={<Navigate replace to='/'/>}></Route>
    </Routes>
    </>
  );
}

export default App;
