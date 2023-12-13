import React from 'react';
import { useNavigate } from 'react-router-dom';

import profilePicture from '../../assets/profile-pic_JovitaChong.png';
import linkedinPicture from '../../assets/linkedin.png';
import githubPicture from '../../assets/github.png';
import resumePDF from '../../assets/Resume_JovitaChong.pdf';
import arrow from '../../assets/arrow.png';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={profilePicture}
          alt="Jovita Chong's Profile"
          style={{ borderRadius: '50%' }}
        />
      </div>
      <div className="section__text">
        <p className="section__text__p2">👋&nbsp;&nbsp;Hello!</p>
        <h1 className="title">I'm Jovita</h1>
        <p className="section__text__p1">
          Welcome to my portfolio.
        </p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open(resumePDF)}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => navigate('/contact')}>
            Contact Info
          </button>
        </div>
        <ul className="socials-container-links">
          {/* todo: decide which one's are important */}
          <li>
            <a href="https://www.linkedin.com/in/jovitachong/" target="_blank" title="Connect with me on Linkedin" rel="noopener noreferrer">
              <img src={linkedinPicture} alt="Jovita Chong's LinkedIn Profile" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jovitachong/" target="_blank" title="Visit my GitHub" rel="noopener noreferrer">
              <img src={githubPicture} alt="Jovita Chong's GitHub Profile" className="icon" />
            </a>
          </li>
        </ul>
      </div>
      {/* todo */}
      {/* <img src={arrow} alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='/#project'} /> */}
    </section>
  );
};

export default HeroSection;


// export default function HeroSection() {
//   return (
//     <section id="heroSection" className="hero--section">
//       <div className="hero--section--content--box">
//         <div className="hero--section--content">
//           <p className="section--title">Hey, I'm John</p>
//           <h1 className="hero--section--title">
//             <span className="hero--section-title--color">Full Stack</span>{" "}
//             <br />
//             Developer
//           </h1>
//           <p className="hero--section-description">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//             <br /> Dolorum, quas. Amet soluta assumenda cum?
//           </p>
//         </div>
//         <button className="btn btn-primary">Get In Touch</button>
//       </div>
//       <div className="hero--section--img">
//         <img src="./img/hero_img.png" alt="Hero Section" />
//       </div>
//     </section>
//   );
// }
