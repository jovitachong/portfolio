import React from 'react';

const HeroSection = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="./img/profile-pic-JovitaChong.png" alt="Jovita Chong's Profile" style={{ borderRadius: '50%' }} />
      </div>
      <div className="section__text">
        <p className="section__text__p2">👋&nbsp;&nbsp;Hello!</p>
        <h1 className="title">I'm Jovita</h1>
        <p className="section__text__p1">
          Welcome to my portfolio.
        </p>
        <div className="btn-container">
          {/* todo */}
          <button className="btn btn-color-2" onClick={() => window.open('/img/resume-example.pdf')}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='./contact'}>
            Contact Info
          </button>
        </div>
        <ul className="socials-container-links">
          {/* todo: change icon to svg bcs v pixelated */}
          <li>
            <a href="https://www.linkedin.com/in/jovitachong/" target="_blank" title="Connect with me on Linkedin" rel="noopener noreferrer">
              <img src="/img/linkedin.png" alt="Jovita Chong's LinkedIn Profile" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jovitachong/" target="_blank" title="Visit my GitHub" rel="noopener noreferrer">
              <img src="/img/github.png" alt="Jovita Chong's GitHub Profile" className="icon" />
            </a>
          </li>
        </ul>
      </div>
      {/* todo */}
      {/* <img src="/img/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href='/#about'} /> */}
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
