import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Journey from './pages/journey';
import Book from './pages/bookinside';
import CoverBook from './pages/book';
import ProjectsPage from './pages/projects';
import Navbar from './components/navbar';
import DaoNew, { MindMap } from './pages/threejsbased';
import ComingSoon from './pages/comingsoon';




function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/insidebook' element={<Book/>}/>
        <Route path='/book' element={<CoverBook/>}/>
        <Route path='/dao' element={<DaoNew/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>  
        <Route path='/mindmap' element={<MindMap/>}/>
        <Route path='/soon' element={<ComingSoon/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
