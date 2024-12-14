import React, { useState, useEffect } from 'react';
import '../Navbar/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import '../Components/responsive.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {
  // State to handle theme, default is dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply theme when component mounts
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('bg-darkk', 'text-light');
      body.classList.remove('bg-light', 'text-dark');
    } else {
      body.classList.add('bg-light', 'text-dark');
      body.classList.remove('bg-darkk', 'text-light');
    }
  }, [isDarkMode]); // Re-run when `isDarkMode` changes

  // Function to toggle theme
  const switchTheme = () => {
    const newTheme = !isDarkMode; // Toggle state
    setIsDarkMode(newTheme); // Update state
    localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save theme to localStorage
  };

  // If there's a saved theme in localStorage, use it
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg"   className={`${scrolled ? "scrolled" : "transparent"} mb-3`} 
    fixed="top">
      <Container fluid className="content-nav container">
        <Navbar.Brand href="/" className="logo-txt">
          <FontAwesomeIcon icon={faLeaf} className="leaf" /> PLANTEX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className="elements-nav">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="elements-nav">
                About
              </Nav.Link>
              <Nav.Link href="#products" className="elements-nav">
                Products
              </Nav.Link>
              <Nav.Link href="#faqs" className="elements-nav">
                FAQ's
              </Nav.Link>
              <Nav.Link href="#contact" className="elements-nav">
                Contact Us
              </Nav.Link>
              {/* Updated Button */}
          <Button className="dark-btn btn-outline-primary" onClick={switchTheme}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="sun" />
          </Button>
            </Nav>
          </Offcanvas.Body>
          
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;


// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar';
// import '../Navbar/nav.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import '../Components/responsive.css'

// const NavBar = () => {
//   // State to handle theme, default is dark mode
//   const [isDarkMode, setIsDarkMode] = useState(true); 

//   // Apply theme when component mounts
//   useEffect(() => {
//     const body = document.body;
//     if (isDarkMode) {
//       body.classList.add('bg-darkk', 'text-light');
//       body.classList.remove('bg-light', 'text-dark');
//     } else {
//       body.classList.add('bg-light', 'text-dark');
//       body.classList.remove('bg-darkk', 'text-light');
//     }
//   }, [isDarkMode]); // Re-run when `isDarkMode` changes

//   // Function to toggle theme
//   const switchTheme = () => {
//     const newTheme = !isDarkMode; // Toggle state
//     setIsDarkMode(newTheme); // Update state
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light'); // Save theme to localStorage
//   };

//   // If there's a saved theme in localStorage, use it
//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     }
//   }, []);

//   return (
//     <div className="navova">
//       <Navbar expand="lg" className="bg-body-tertiary container" fixed="top">
//         <Container className="content-nav">
//           <Navbar.Brand href="/" className="logo-txt">
//             <FontAwesomeIcon icon={faLeaf} className="leaf" /> PLANTEX
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/" className="elements-nav">
//                 Home
//               </Nav.Link>
//               <Nav.Link href="#about" className="elements-nav">
//                 About
//               </Nav.Link>
//               <Nav.Link href="#products" className="elements-nav">
//                 Products
//               </Nav.Link>
//               <Nav.Link href="#faqs" className="elements-nav">
//                 FAQ's
//               </Nav.Link>
//               <Nav.Link href="#contact" className="elements-nav">
//                 Contact Us
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//         {/* Updated Button */}
//         <Button className="dark-btn btn-outline-primary" onClick={switchTheme}>
//           <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="sun" />
//         </Button>
//       </Navbar>
//     </div>
//   );
// };

// export default NavBar;
