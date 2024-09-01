import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";




const Header = () => {
  return (
    <>
<nav className="navbar bg-light fixed-top px-4" style={{ boxShadow: '3px 3px 10px gray' }} id="sticky">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com/">pr.developer.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end form_width" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body form_width">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-2 form">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#About_me">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#MySkill">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#project">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#problemsolving">Solves</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#certificate">Certificate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Get in touch">Get in Touch</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

{/* <a className='imgWhatup' herf="https://wa.link/0x62oc" aria-label="WhatsApp"><IoLogoWhatsapp /></a> */}
<a href="https://wa.link/0x62oc" aria-label="Facebook"><FaWhatsapp className="imgWhatup "  /></a>

    </>
  );
}

export default Header;
