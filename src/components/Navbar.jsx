import React from 'react'
import { Gamepad2, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';


const Navbar = () => {
  return (
    <nav className="navbar">
  <div className="navbar-left">
    <Gamepad2 className="navbar-icon" />
    <div className="navbar-title">
      Game<span className="text-gradient">Space</span>
    </div>
  </div>
  <div className="navbar-right">
    <ThemeToggle />
    <button className="btn-primary">Login</button>
    <button className="btn-secondary">Signup</button>
  </div>
</nav>
  );
}


export default Navbar