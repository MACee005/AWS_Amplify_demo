import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contacts() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Col className="px-2 my-2">
                    <Card style={{ width: '12rem' }}>
                        <Card.Img 
                            src= "/img/contact_3.png"
                            variant="top" />
                        <Card.Body>
                            <Card.Title>MACee Burman</Card.Title>
                            <Card.Text>
                                contact@email.com
                                <br />999-888-000-55
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;