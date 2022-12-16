import {Card, Col, Image, Nav, Navbar, Row} from "react-bootstrap";
import aboutPic from "../images/dunks_nightcafe.jpg"
import {faAngular, faPython, faJava, faReact,faSquareJs} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import postgresLogo from "../images/postgres_icon.png"

function Skills() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <span className="underlined-title">Tools I've Used</span>
                </Card.Title>
                <Row className="align-items-center mt-4">
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faSquareJs} size="2xl"/>
                        <span> Javascript</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faReact} size="2xl" />
                        <span>React</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faAngular} size="2xl"/>
                        <span> Angular</span>
                    </Col>
                </Row>
                <Row className="align-items-center mt-4">
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faPython} size="2xl"/>
                        <span> Python + Flask</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faJava} size="2xl"/>
                        <span> Java +Spring Boot</span>
                    </Col>
                    <Col className="text-center">
                        <Image src={postgresLogo} width="28px"></Image>
                        <span> Postgres</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Skills;