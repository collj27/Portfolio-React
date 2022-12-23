import {Card, Col, Image, Row} from "react-bootstrap";
import {faAngular, faPython, faJava, faReact, faSquareJs, faBootstrap} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import postgresLogo from "../../images/postgres_icon.png"

function Skills() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <span className="underlined-title">Technologies I've Used</span>
                </Card.Title>
                <Row className="align-items-center mt-4">
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faReact} size="2xl"/>
                        <span className="d-none d-md-inline">React</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faAngular} size="2xl"/>
                        <span className="d-none d-md-inline"> Angular</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faBootstrap} size="2xl"/>
                        <span className="d-none d-md-inline">Bootstrap</span>
                    </Col>
                </Row>
                <Row className="align-items-center mt-4">
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faPython} size="2xl"/>
                        <span className="d-none d-md-inline"> Python + Flask</span>
                    </Col>
                    <Col className="text-center">
                        <FontAwesomeIcon icon={faJava} size="2xl"/>
                        <span className="d-none d-md-inline"> Java + Spring Boot</span>
                    </Col>
                    <Col className="text-center">
                        <Image src={postgresLogo} width="28px"></Image>
                        <span className="d-none d-md-inline"> Postgres</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default Skills;