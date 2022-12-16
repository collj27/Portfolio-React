import {Card, Col, Container, Image, Nav, Navbar, Row} from "react-bootstrap";
import aboutPic from "../images/dunks_nightcafe.jpg"
import Skills from "./skills";
import Contact from "./contact";

function About() {
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">Hi, I'm James</span>
                            </Card.Title>
                            <Row>
                                <Col xl={2}>
                                    <Image src={aboutPic} width="200px"></Image>
                                </Col>
                                <Col xl={10}>
                                    <p>I'm a self-taught programmer with 3 years of development experience and I've
                                        had the
                                        good fortune to work with a variety of technologies. I've built responsive UIs for an
                                        enterprise
                                        payments application with Angular and I am currently learning React on a side project.
                                        Additionally, I have experience designing APIs with Flask, Spring Boot, and .NET as well
                                        as relational tables with Postgres and SQL Server. Though I am confident in my coding
                                        abilities, I maintain that my most important skill is my adaptability. Juggling project
                                        management,
                                        software development, and data engineering is atypical for a programmer but it's why I
                                        stand out; I'm comfortable collaborating with cross-functional teams and learning new
                                        technologies to drive
                                        my work forward independently.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <Skills></Skills>
                </Col>
            </Row>
        </Container>

    );
}

export default About;