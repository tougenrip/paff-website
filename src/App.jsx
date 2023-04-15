import { useState } from 'react';
import { Link, Outlet, Route, Routes, Router, BrowserRouter } from "react-router-dom";
import './App.css';
import Dash from './pages/dash';
import Journey from './pages/journey';
import Book from './pages/bookinside';
import CoverBook from './pages/book';
import DaoNew from './pages/daonew';
import Core from './pages/core';
import Community from './pages/community';
import About from './pages/about';
import Navbar from './components/navbar';




function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      { <Navbar/>}
      <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/dash' element={<Dash />} />
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/insidebook' element={<Book/>}/>
        <Route path='/book' element={<CoverBook/>}/>
        <Route path='/dao' element={<DaoNew/>}/>
        <Route path='/core' element={<Core/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
