import {Card, Col, Container, Image, Row} from "react-bootstrap";
import xRecruit from "../../images/xrecruit.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBootstrap, faPython, faReact, faStripe} from "@fortawesome/free-brands-svg-icons";
import postgresLogo from "../../images/postgres_icon.png"
import renderLogo from "../../images/render-logo.png"
import "./projects.css"


function Projects() {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col className="text-center">
                    <span className="underlined-title">Things I've Built</span>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs={10} lg={6}>
                    <Card>
                        <Card.Img variant="top" src={xRecruit}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">XRecruit</span>
                            </Card.Title>

                            <p>
                                Think go fund me meets college football recruiting. The aim is to democratize
                                the recruitment process that is currently dominated by big donors making NIL deals.
                                By crowd sourcing donations from college football fans, programs without millionaire
                                boosters have a better chance of landing top recruits.
                            </p>
                            <p>
                                In it's current form, you can view a dummy player and school profile. Additionally, you
                                can make test payments via Stripe.
                            </p>
                            <p>
                                <b>Disclaimer:</b>
                                <span> I'm using the free version of render and consequently, it may take up to 30
                                seconds for the </span>
                                <a className="web-service-link" href="https://render.com/docs/free#free-web-services" target="_blank">web service</a>
                                <span> to boot up. Please be patient, it's not broken!</span>
                            </p>

                            <Row className="align-items-center mt-4">
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faReact} size="2xl"/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faBootstrap} size="2xl"/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faPython} size="2xl"/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faStripe} size="2xl"/>
                                </Col>

                                <Col className="text-center">
                                    <Image src={postgresLogo} width="28px"></Image>
                                </Col>
                                <Col className="text-center">
                                    <Image src={renderLogo} width="56px"></Image>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <a href="https://xrecruit.onrender.com" className="btn btn-primary" target="_blank">Check it out</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center my-5" >
                <Col xs={10} lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span className="underlined-title">Portfolio</span>
                            </Card.Title>

                            <p>
                                This site was built with React and deployed on Render. Check out the source code!
                            </p>

                            <Row className="align-items-center mt-4">
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faReact} size="2xl"/>
                                </Col>
                                <Col className="text-center">
                                    <FontAwesomeIcon icon={faBootstrap} size="2xl"/>
                                </Col>
                                <Col className="text-center">
                                    <Image src={renderLogo} width="56px"></Image>
                                </Col>
                            </Row>

                        </Card.Body>
                        <Card.Footer className="text-end">
                            <a href="https://github.com/collj27/Portfolio-React" className="btn btn-primary" target="_blank">Source Code</a>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>


    );
}

export default Projects;