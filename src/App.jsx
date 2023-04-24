import { useState } from 'react';
import { Link, Outlet, Route, Routes, Router, BrowserRouter, useLocation  } from "react-router-dom";
import './App.css';
import Dash from './pages/dash';
import Journey from './pages/journey';
import Book from './pages/bookinside';
import CoverBook from './pages/book';
import DaoNew from './pages/threejsbased';
import ComingSoon from './pages/comingsoon';
import Vote from './pages/vote';
import Core from './pages/core';
import User from './pages/user';
import Community from './pages/community';
import JourneyOld from './pages/journey-old';
import About from './pages/about';
import Navbar from './components/navbar';
import ComingSoonNavbar from './components/comingSoonNav';





function App() {  
  const [count, setCount] = useState(0)



  return (
    <>
      <BrowserRouter>
        { location.pathname === '/comingsoon' ? <ComingSoonNavbar /> : <Navbar /> } {/* conditionally render the specialized navbar */}
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
          <Route path='/soon' element={<ComingSoon/>}/>
          <Route path='/journeyold' element={<JourneyOld/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/vote' element={<Vote/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
