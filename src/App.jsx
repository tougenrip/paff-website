import { useState } from 'react';
import { Link, Outlet, Route, Routes, Router, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Journey from './pages/journey';
import Book from './pages/bookinside';
import CoverBook from './pages/book';
import DaoNew from './pages/daonew';
import ProjectsPage from './pages/projects';
import Navbar from './components/navbar';




function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/insidebook' element={<Book/>}/>
        <Route path='/book' element={<CoverBook/>}/>
        <Route path='/dao' element={<DaoNew/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
