import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div className="logo"><a href="/" className="logo-link">Jovita Chong</a></div>
        <a
          href="#"
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>

          <ul className="nav-links">
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                activeClassName="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navbar--content"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`overlay ${navActive ? "active" : ""}`}
        onClick={closeMenu} // clicking on the overlay can close the menu
      />
    </>
  );
}

export default Navbar;

// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu;
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu;
//     }
//   }, []);

//   return (
//     <nav className={`navbar ${navActive ? "active" : ""}`}>
//       <div>
//         <img src="./img/logo.svg" alt="Logoipsum" />
//       </div>
//       <a
//         className={`nav__hamburger ${navActive ? "active" : ""}`}
//         onClick={toggleNav}
//       >
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//         <span className="nav__hamburger__line"></span>
//       </a>
//       <div className={`navbar--items ${navActive ? "active" : ""}`}>
//         <ul>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="heroSection"
//               className="navbar--content"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="MyPortfolio"
//               className="navbar--content"
//             >
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="AboutMe"
//               className="navbar--content"
//             >
//               About Me
//             </Link>
//           </li>
//           <li>
//             <Link
//               onClick={closeMenu}
//               activeClass="navbar--active-content"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="testimonial"
//               className="navbar--content"
//             >
//               Testimonials
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <Link
//         onClick={closeMenu}
//         activeClass="navbar--active-content"
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//         to="Contact"
//         className="btn btn-outline-primary"
//       >
//         Contact Me
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;
