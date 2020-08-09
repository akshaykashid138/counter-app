import React, { Component } from 'react'

//stateless functional component

const Navbar = (props)=>{
    return (
        <div className="container">
<nav className="navbar navbar-light bg-light">
            <a href="#" className="nvabr-brand">Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav>
        </div>
        
      );
}

 
export default Navbar;