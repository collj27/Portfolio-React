import {LinkContainer} from 'react-router-bootstrap'
import {Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import "./header.css"

function Header() {
    return (
            <Navbar expand="sm" variant="dark" sticky="top">
                <Container>
                    <Navbar.Toggle variant="light"/>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="https://www.linkedin.com/in/james-coll-9198b7165/">
                                <FontAwesomeIcon icon={faLinkedin} size="xl"/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Header;
