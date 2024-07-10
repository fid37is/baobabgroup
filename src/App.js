import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Foundation from './components/Foundation';
import Post from './components/Post';
import BaobabChat from './components/BaobabChat';
import './App.css';

function App() {
  return (
    <><BaobabChat />
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/" element={<Navigate to="/home" />} /> 
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
