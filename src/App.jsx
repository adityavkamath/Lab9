import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const linkClass = ({ isActive }) =>
    `text-lg px-4 py-2 rounded-lg transition-all duration-300 
    ${isActive ? 'text-blue-600 font-bold bg-blue-100' : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'}`;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="px-6 py-4 flex justify-center gap-6 bg-white shadow-lg sticky top-0 z-50">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;