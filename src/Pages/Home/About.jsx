// eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">
        {/* picture container */}
        <div className="section__pic-container">
          <img src="./img/about-pic.png" alt="Profile" className="about-pic" />
        </div>
        {/* about details container */}
        <div className="about-details-container">
          <div className="about-containers">

            <div className="details-container">
              <img src="./img/experience.png" alt="Experience Icon" className="icon" />
              <h3>Experience</h3>
              <p>2+ years <br />Frontend Development</p>
            </div>

            <div className="details-container">
              <img src="./img/education.png" alt="Education Icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />M.Sc. Masters Degree</p>
            </div>
          </div>

          <div className="text-container">
            <p>
             A recent graduate from the University of New South Wales (UNSW) with a Bachelor of
              Commerce (FinTech) and a Bachelor of Science
              (Computer Science), based in Sydney.
            </p>
          </div>
        </div>
      </div>
      <img src="./img/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='/#experience'} />
      </section>
  );
};

export default About;


// export default function AboutMe() {
//   return (
//     <section id="AboutMe" className="about--section">
//       <div className="about--section--img">
//         <img src="./img/about-me.png" alt="About Me" />
//       </div>
//       <div className="hero--section--content--box about--section--box">
//         <div className="hero--section--content">
//           <p className="section--title">About</p>
//           <h1 className="skills-section--heading">About Me Hehe</h1>
//           <p className="hero--section-description">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
//             officiis sit debitis omnis harum sed veniam quasi dicta accusamus
//             recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
//             tempora numquam sint odit optio.
//           </p>
//           <p className="hero--section-description">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
//             officiis sit debitis omnis harum sed veniam quasi dicta accusamus
//             recusandae?
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
