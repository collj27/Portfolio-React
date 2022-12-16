import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import About from "./components/about/about";
import 'bootstrap/dist/css/bootstrap.min.css';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
    return (
        <Router>
            {/*TODO: prevent rerendering of navbar*/}
            <Navbar expand="sm" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="/">
                        <span>Need a full stack engineer?</span>
                    </Navbar.Brand>*/}
                    <Navbar.Toggle variant="light"/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/"><FontAwesomeIcon icon={faEnvelope}/></Nav.Link>
                            <Nav.Link href="/"><FontAwesomeIcon icon={faLinkedin}/></Nav.Link>
                            <Nav.Link href="/about"><span>About</span></Nav.Link>
                            <Nav.Link href="/projects"><span>Projects</span></Nav.Link>
                            <Nav.Link href="/contact"><span>Contact</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*<Row className="mt-3">
                <Col>
                    <About></About>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Skills></Skills>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Projects></Projects>
                </Col>
            </Row>
*/}
            <Routes>
                <Route exact path='/' element={<About/>}></Route>
                <Route exact path='/about' element={<About/>}></Route>
                <Route exact path='/projects' element={<Projects/>}></Route>
                <Route exact path='/contact' element={<Contact/>}></Route>
            </Routes>
        </Router>

    );
}

export default App;
