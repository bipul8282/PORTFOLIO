import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Linkedin from '../assets/img/nav-icon1.svg';
import twitter from "../assets/img/icons8-twitter.svg"
import github from "../assets/img/icons8-github.svg"


import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


import { ExternalLink } from 'react-external-link';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

       

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <span className="navbar-text">

              <div className="social-icon">
                <ExternalLink href="https://www.linkedin.com/in/bipul-kumar-410105225/"> <img src={Linkedin} alt="img"/> </ExternalLink>
                <ExternalLink href="https://twitter.com/Kb84101Bipul">   <img src={twitter} alt="img"/> </ExternalLink>
                <ExternalLink href="https://github.com/bipul8282">  <img src={github} alt="img"/> </ExternalLink>
              </div>

              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>

            </span>
          </Navbar.Collapse >
        </Container >
      </Navbar >
    </Router >
  )
}
