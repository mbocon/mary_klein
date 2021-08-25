import { Navbar, Nav, Container } from "react-bootstrap";
import $ from "jquery";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

const NavBar = props => {
   function handleClick(e) {
      if (e.target.innerText === "Mary Klein") {
         $(".active").removeClass("active");
         $(".home-link").addClass("active");
      } else {
         $(".home-link").removeClass("active");
         $(e.target).addClass("active");
      }
   }

   return (
      <Navbar collapseOnSelect expand="lg" bg="light">
         <Container>
            <Navbar.Brand>
               <Nav.Link
                  eventKey="0"
                  as={Link}
                  to="/"
                  className="navbar-link"
                  onClick={handleClick}
               >
                  Mary Klein
               </Nav.Link>
            </Navbar.Brand>
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
                     onClick={handleClick}
                  >
                     Services & Prices
                  </Nav.Link>
                  <Nav.Link
                     eventKey="3"
                     as={Link}
                     to="/case_studies"
                     className="navbar-link"
                     onClick={handleClick}
                  >
                     Case Studies
                  </Nav.Link>
                  <Nav.Link
                     eventKey="4"
                     as={Link}
                     to="/contact"
                     className="navbar-link"
                     onClick={handleClick}
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
