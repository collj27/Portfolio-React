import {Card, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import aboutPic from "../dunks_nightcafe.jpg"
import {faAngular, faPython, faJava, faReact, faSquareJs} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import postgresLogo from "../postgres_icon.png"
import xrecruit from "../xrecruit.png"

function Projects() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Card>
                        <Card.Img variant="top" src={xrecruit}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">XRecruit</span>
                            </Card.Title>

                            <p>
                                Think go fund me meets college football recruiting. The aim is to democratize
                                the recruitment process that is currently dominated by big donors making NIL deals.
                            </p>

                            <p>
                                In it's current form, you can view a dummy player and school profiles as well as make
                                dummy
                                payments.
                            </p>

                            <p>Built with: </p>
                            <ul>
                                <li>React</li>
                                <li>Flask</li>
                                <li>Postgres</li>
                                <li>Render</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <a href="https://xrecruit.onrender.com" className="btn btn-primary">Check it out</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5" >
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">Portfolio</span>
                            </Card.Title>

                            <p>
                                This is a static site built with HTML, CSS, and Render. Check out the source code.
                            </p>

                            <p>
                                In it's current form, you can view a dummy player and school profiles as well as make
                                dummy
                                payments.
                            </p>

                            <p>Built with: </p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Render</li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <a href="https://github.com/collj27/Portfolio" className="btn btn-primary">Source Code</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>


    );
}

export default Projects;