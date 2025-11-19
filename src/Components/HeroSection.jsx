import { Container, Row, Col, Button} from 'react-bootstrap';

const HeroSection = () => {
  return (
    <>
        <Container fluid gap={3} style={{maxWidth:"100%", height:"auto", textAlign:"center"}} >
            <Row  className="p-0 m-auto p-md-5 align-items-center w-full">
                <Col>
                    <div style={{color:"white"}}>
                        <h1 style={{fontSize:"50px", fontWeight:"bold"}}>Oloyede Muhammed</h1>
                        <p style={{color:"#86CEFE"}}>Frontend Developer</p>
                        <p>Enthusiastic and detail-driven frontend developer skilled in building responsive, user-friendly web interfaces. Experienced in turning UI designs into clean, functional code while continuously learning modern development tools and best practices. Focused on writing readable code, improving user experience, and delivering real project results.</p>
                        
                        
                    </div>
                </Col>
                
            </Row>
              
        </Container>
    </>
  )
}

export default HeroSection