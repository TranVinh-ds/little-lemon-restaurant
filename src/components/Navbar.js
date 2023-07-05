import React, { useState } from 'react';
import logo from '../icons_assets/Logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="restaurant logo" className="navbarImg" />
        </NavLink>
      </div>
      <ul className="app__navbar-links">
        <li>
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className="nav-link">
            menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className="nav-link">
            reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" className="nav-link order-link">
            order
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link">
            login
          </NavLink>
        </li>
      </ul>
      <div className="app__navbar-small">
        <GiHamburgerMenu
          color="#f4ce14"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-small_overlay slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-small_links">
              <li>
                <NavLink to="/" className="nav-link">
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="nav-link">
                  menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="nav-link">
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className="nav-link order-link">
                  order
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className="nav-link">
                  login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useRef, useState } from 'react';
// import lemonLogo from '../icons_assets/Logo.svg';
// import { FaBars } from 'react-icons/fa';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   const linksContainerRef = useRef(null);
//   const linksRef = useRef(null);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   const linkStyles = {
//     height: showLinks
//       ? `${linksRef.current.getBoundingClientRect().height}px`
//       : '0px',
//   };
//   return (
//     <nav className="navbar section-center">
//       <div className="nav-center">
//         <div className="navbar-header">
//           <NavLink to="/">
//             <img src={lemonLogo} alt="restaurant logo" className="logo" />
//           </NavLink>
//           <button className="nav-toggle" onClick={toggleLinks}>
//             <FaBars />
//           </button>
//         </div>

//         <div
//           className="links-container"
//           ref={linksContainerRef}
//           style={linkStyles}
//         >
//           <ul className="nav-links" ref={linksRef}>
//             <li>
//               <NavLink to="/" className="nav-link">
//                 home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" className="nav-link">
//                 about
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/menu" className="nav-link">
//                 menu
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/booking" className="nav-link">
//                 reservation
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/order" className="nav-link order-link">
//                 order
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/login" className="nav-link">
//                 login
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
