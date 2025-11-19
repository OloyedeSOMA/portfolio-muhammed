import { Container, Row, Col, Card } from "react-bootstrap";
//import { FaClipboardList, FaUserShield, FaUsers, FaLinkedin } from "react-icons/fa";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { Element } from "react-scroll";
import portfolio from "../assets/portfolio_img.jpg"
export default function AboutSection() {
  return (
    <Element name="about" className="py-5" id="about" style={{backgroundColor:"#FFFFFF"}}>
      <Container>
        <h2 className="text-center mb-5 fw-bold">About Me</h2>
        <Row className="align-items-center">
          {/* Profile Image & Name */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <img
              src={portfolio}
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "220px", height: "220px", objectFit: "cover" }}
            />
            <h5 className="mt-3 fw-bold">Oloyede Muhammed Akinwande</h5>
            <p className="text-muted">Frontend Developer</p>
            <a
              href="https://www.linkedin.com/in/muhammed-o-012277329/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <LinkedInIcon size={24} color="#0A66C2" />
            </a>
          </Col>

          {/* About Text */}
          <Col md={8}>
            <p>
              I am a motivated and detail-oriented Frontend Developer and Computer Engineering undergraduate with a strong foundation in problem-solving, communication, and structured thinking. Alongside my academic work, I have been building practical skills in creating responsive and user-friendly interfaces using modern web technologies.
            </p>
            <p>
              I enjoy turning ideas and designs into clean, functional code, learning new tools quickly, and improving with every project. I work well in collaborative environments and I’m eager to contribute to a forward-thinking team where I can continue growing, building real-world products, and adding value through consistency, creativity, and continuous learning.
            </p>
          </Col>
        </Row>

        {/* Skills / Highlights */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-0 text-center h-100">
              <Card.Body>
                <ArticleOutlinedIcon size={28} className="mb-3 text-primary" />
                <h6 className="fw-bold">UI Implementation</h6>
                <p className="text-muted small">
                  Transforming design mockups into clean, accessible, and functional components
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-0 text-center h-100">
              <Card.Body>
                <WorkspacePremiumOutlinedIcon size={28} className="mb-3 text-primary" />
                <h6 className="fw-bold">Problem Solving</h6>
                <p className="text-muted small">
                  Debugging issues and improving performance and user experience
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-0 text-center h-100">
              <Card.Body>
                <PeopleAltOutlinedIcon size={28} className="mb-3 text-primary" />
                <h6 className="fw-bold">Collaboration & Workflow</h6>
                <p className="text-muted small">
                  Working with Git, GitHub, and agile approaches for team-based projects
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}
