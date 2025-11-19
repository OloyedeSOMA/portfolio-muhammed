import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import "../App.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#" style={{ color: "#3855B7" }}>
              Oloyede Muhammed
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: "#3855B7" }}
                >
                  Oloyede Muhammed
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{ cursor: "pointer" }}
                >
                  {[
                    { to: "about", label: "About" },
                    { to: "education", label: "Education" },
                    { to: "skill", label: "Skills" },
                  ].map((item, idx) => (
                    <Nav.Link
                      key={idx}
                      as={Link}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-70}
                      activeClass="active"
                      onClick={handleClose}
                    >
                      {item.label}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
