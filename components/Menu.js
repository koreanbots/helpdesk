import { Container, Navbar } from 'react-bootstrap'

function Menu({ name }) {
    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">KOREANBOTS</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Menu