import { Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <h6 className="mb-1 fw-bold">Oloyede Muhammed</h6>
          <small className="text-muted">
            Frontend Dwveloper
          </small>
        </div>
        <Nav className="mt-3 mt-md-0" style={{ cursor: "pointer" }}>
          <Nav.Item>
            <Nav.Link  as={Link} to="about" smooth={true} duration={500} spy={true} offset={-70} activeClass="active"  className="text-light px-2">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  as={Link} to="education" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" className="text-light px-2">
              Education
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link  as={Link} to="skill" smooth={true} duration={500} spy={true} offset={-70} activeClass="active" className="text-light px-2">
              Skills
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
      <div className="text-center border-top border-secondary pt-2 mt-3">
        <small>© 2025 Oloyede Muhammed. All rights reserved.</small>
      </div>
    </footer>
  );
}
