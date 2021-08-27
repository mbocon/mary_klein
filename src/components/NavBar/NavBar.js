import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import $ from "jquery";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import logo from "../../Images/horseshoe.png";
import { FiSun, FiMoon } from "react-icons/fi";

const NavBar = props => {
   return (
      <Navbar
         collapseOnSelect
         expand="lg"
         bg={props.theme === "dark" ? "dark" : "light"}
         variant={props.theme === "dark" ? "dark" : "light"}
      >
         <Container>
            <Navbar.Brand>
               <Nav.Link eventKey="0" as={Link} to="/" className="navbar-link">
                  <img
                     src={logo}
                     alt="logo of horseshoe with horse head"
                     className="navbar-logo"
                     style={{
                        background: "#CB90E4",
                        borderRadius: "5rem",
                        padding: "5px",
                     }}
                  />{" "}
                  M.K.K.
               </Nav.Link>
            </Navbar.Brand>
            <Nav.Item>
               <Button className="theme-btn" onClick={props.toggleTheme}>
                  {props.theme === "dark" ? <FiSun /> : <FiMoon />}
               </Button>
            </Nav.Item>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Link
                     eventKey="1"
                     as={Link}
                     to="/"
                     className="navbar-link home-link"
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     eventKey="2"
                     as={Link}
                     to="/services"
                     className="navbar-link"
                  >
                     Services & Prices
                  </Nav.Link>
                  <Nav.Link
                     eventKey="3"
                     as={Link}
                     to="/case_studies"
                     className="navbar-link"
                  >
                     Case Studies
                  </Nav.Link>
                  <Nav.Link
                     eventKey="4"
                     as={Link}
                     to="/gallery"
                     className="navbar-link"
                  >
                     Gallery
                  </Nav.Link>
                  <Nav.Link
                     eventKey="5"
                     as={Link}
                     to="/contact"
                     className="navbar-link"
                  >
                     Contact
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavBar;
