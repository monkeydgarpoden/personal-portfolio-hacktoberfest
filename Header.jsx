import React from 'react';
import logo from '../src/images/new.gif';
// import logo1 from '../src/images/CK.gif';
const Header=()=>{
  return (
    <>
    <div className="header">
    <img className='logo' src={logo} alt='logo'/>
    
    <h1>Cyphon-Tech</h1>
    </div>
    </>
  )
};

export default Header;