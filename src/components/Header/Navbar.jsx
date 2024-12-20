import React from 'react';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="row">
              <div className="col-md-4">
                <Logo />
              </div>
              <div className="col-md-8"></div>
            </div>
          </a>
        </div>
      </nav>
    );
  }
  

  export default Navbar;