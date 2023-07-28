import { Container, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Container className="d-flex justify-content-start">
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default NavBar;