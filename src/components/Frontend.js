import React from 'react';

const Frontend = () => {

  function openLinked() {
    window.open("https://www.linkedin.com/in/n-praveen-02b1842b4/")
  }
  function openPdf() {
    window.open("/resume.pdf", '_target');
  }

  return (
    <div>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <div>
            <h1 style={{ color: 'gray' }}>Frontend Engineer +</h1>
            <h3 id="big">Full-Stack Developer</h3>
          </div>
          <div className="content para fs-5 col-12 col-md-6 col-lg-8 mt-5">
            <p>
              Frontend Engineer using HTML, CSS, JavaScript, React. Backend using Java, SQL, Springboot. I can assist in building robust web, mobile, and desktop applications.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-self-center mt-5">
          <img className="pic" src="/images/fullstack.jpg" width="300" height="300" alt="Full Stack" />
        </div>
        <div>
          <button className="btn mt-5 cols border-gradient border-gradient-purple" onClick={openPdf}>
            Open Resume
          </button>
        </div>
      </div>

      <div className="row mt-5" id="About_me">
        <div className="col-12 col-md-6 mt-5">
          <h1 className="mt-5" style={{ color: 'teal' }}>About Me</h1>
          <div className="aboutpara">
            <p className="mt-5 fs-5" style={{ color: 'aliceblue' }}>
              From 2024, I expanded my skills into programming languages like HTML, CSS, JavaScript, Java, Springboot, Reactjs. To deepen my understanding, I completed fundamental computer science courses from reputable institutions like Harvard and other online platforms.
            </p>
            <p className="mt-4 fs-5" style={{ color: 'aliceblue' }}>
              I further developed my expertise through certifications and courses from industry leaders like Meta, IBM, and Google, alongside resources like Udemy. I have extensively studied JavaScript and React documentation. And I love to read documentations.
            </p>
            <p className="mt-4 fs-5" style={{ color: 'aliceblue' }}>
              Currently, I'm passionate about GoLang (especially the Gin Framework) and fascinated by the advancements in artificial intelligence and its potential for positive impact. I have a strong desire and aptitude for continuous learning.
            </p>
            <p className="mt-4 fs-5" style={{ color: 'aliceblue' }}>
              I'm a quick learner with a proven track record of achieving exceptional frontend performance. Open LinkedIn
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-self-center justify-content-center mt-4">
          <img src="/images/my photo.jpg" alt="My Photo" width="300" height="300" />
        </div>
        <div className="mt-5">
          <button className="btn mt-4 cols border-gradient border-gradient-purple" onClick={openLinked}>
            Open LinkedIn
          </button>
        </div>
      </div>
    </div>
    
  );
};
  

export default Frontend;
