import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="container-fluid py-5">
      <div className="row">
        <div className="col-sm-12 py-3 text-center">
          <h2>Resume</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 m-auto py-3">
          <h4>Skills</h4>
          <ul>
            <li>
              Proficient understanding of web markup, including HTML5, CSS3
            </li>
            <li>
              Proficient understanding of client-side scripting and JavaScript
              frameworks, including jQuery
            </li>
            <li>
              Basic knowledge of asynchronous request handling, partial page
              updates, and AJAX
            </li>
            <li>Proficient understanding of css frameworks like Bootstrap</li>
            <li>
              Proficient understanding of cross-browser compatibility issues and
              ways to work around them
            </li>
            <li>Basic knowledge of control versions like Git</li>
            <li>Basic knowledge of React And Redux</li>
          </ul>
          <h4>Academic Background</h4>
          <ul>
            <li>Graphic Diploma</li>
            <li>Computer Engineering bachelor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
