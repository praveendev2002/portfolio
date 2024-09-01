import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";




const Fotter = () => {
  return (
    <div>
          <div className="touch" style={{ marginTop: '10%' }} id="Get in touch">
      <h1 className="mt-5" style={{ color: 'teal', textAlign: 'center' }}>Get in Touch</h1>
      
      <div className="row">
        <div className="col mt-3 d-flex justify-content-center align-self-center">
          <p className="col-lg-6" style={{ fontSize: '18px', color: 'aliceblue', textAlign: 'center' }}>
            I'm eager to join a collaborative team where I can contribute my skills and learn from others. 
            If you have an exciting project, let's discuss how I can be a valuable asset.
            I'm actively seeking a new opportunity to apply my skills and continue growing!
          </p>
        </div>
        
        <div className="mt-3" style={{ textAlign: 'center' }}>
          <button className="btn mt-4 cols border-gradient border-gradient-purple">
            Say Hello
          </button>

          <div className="icon mt-3">
            
            <a className="iconi"href="https://github.com/" aria-label="GitHub"><FaGithub/></a>
            <a className="iconi" href="https://www.linkedin.com/in/n-praveen-02b1842b4/" aria-label="LinkedIn"><FaLinkedin/></a>

            <a className="iconi"href="https://wa.link/0x62oc" aria-label="WhatsApp"><FaWhatsappSquare/></a>
            <a className="iconi" href="" aria-label="Facebook"><FaFacebookSquare/></a>

          </div>
        </div>

        <div className="design">
          <p className="ms-5 mt-5" style={{ fontSize: '18px', color: 'aliceblue' }}>
            Designed and Coded by <a className="navbar-brand" href="https://github.com/">pr.developer</a>
            . Built with React and Next.js, Module CSS and Framer Motion, Deployed with Vercel.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Fotter;
