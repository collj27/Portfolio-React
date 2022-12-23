import {Card, Col, Container, Image, Row} from "react-bootstrap";
import aboutPic from "../../images/me_and_dunks.png"
import Skills from "../skills/skills";
import "./about.css"

function About() {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={10} sm={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">Hi, I'm James</span>
                            </Card.Title>
                            <Row className="d-inline d-sm-none">
                                <Col className="text-center">
                                    <Image src={aboutPic} width="200px"></Image>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="align-items-center">
                                    <Image className="wrap-around d-none d-sm-inline" src={aboutPic}
                                           width="200px"></Image>
                                    <p>I'm a self-taught programmer with 3 years of development experience and I've
                                        had the good fortune to work with a variety of technologies. I've built
                                        responsive UIs
                                        for an enterprise payments application with Angular and I am currently learning
                                        React on side
                                        projects (including this one). Additionally, I have experience designing APIs
                                        with Flask, Spring Boot, and .NET
                                        as well as relational tables with Postgres and SQL Server. Though I am confident
                                        in my
                                        coding abilities, I maintain that my most important skill is my adaptability.
                                        Juggling
                                        project management, software development, and data engineering is atypical for a
                                        programmer but it's
                                        why I stand out; I'm comfortable collaborating with cross-functional teams and
                                        learning new technologies to drive my work forward independently.
                                    </p>
                                    {/*                                   <p>
                                        When I'm not working, I love to be outdoors whether it be hiking, surfing,
                                        skiing, or just walking my dog. If I'm not doing that, you may find me reading or
                                        playing with a text-to-image generator.
                                    </p>*/}
                                    <p>
                                        If you have an open role or project that you think I'd be a good fit for, please
                                        don't hesitate to reach out. I'd love to connect and learn more about what
                                        you're building!
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center my-5">
                <Col xs={10} sm={12}>
                    <Skills></Skills>
                </Col>
            </Row>
        </Container>

    );
}

export default About;