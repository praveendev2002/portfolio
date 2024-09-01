import React from 'react';

const Project = () => {
  return (
    <div>
      
      <div className="project mt-5" id="project">
      <h1 className="mt-5" style={{ color: 'teal' }}>Projects I've Built</h1>
      <div className="row">
        <div className="col-12">
          <p className="ss mt-5" style={{ fontSize: '18px', color: 'aliceblue', width: '85%' }}>
            I have a proven track record of building projects from the ground up, including SaaS applications. My process emphasizes thorough planning and user-centric design. I start by collaborating with stakeholders to understand business needs and user goals. Then, I focus on information architecture and design, creating wireframes and UI designs that ensure a seamless user experience (UX). Next, I build MVPs followed by the development of the full product using Frontend, Backend, Database, and Deployment. Finally, I prioritize performance optimization and ensure applications are production-ready.
          </p>
        </div>
        <div className="col-12 col-lg-3 col-md-6 mt-4">
          <div className="card">
            <a href="https://66be2c0808d4636s9c476dc1e--devpr.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="/images/weather app ima.jpg" className="card-img-top" alt="Weather App" /> 
           </a>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 mt-4">
          <div className="card">
            <a href="https://main--cerulean-chebakia-6f5fc6.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="/images/qrcode.jpeg" className="card-img-top" alt="QR Code App" height="180px" />
            </a>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 col-md-6 mt-4">
          <div className="card">
            <img src="/images/portfolio.jpeg" className="card-img-top" alt="Portfolio" />
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-6 mt-4">
          <div className="card">
            <img src="/images/project4.jpeg" className="card-img-top" alt="Project 4" />
          </div>
        </div>
      </div>
      </div>
    </div>

  );
}

export default Project;
