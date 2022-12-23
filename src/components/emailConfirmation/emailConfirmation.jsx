import {Col, Container, Row} from "react-bootstrap";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function EmailConfirmation() {

    return (
        <Container>
            <Row className="mt-5">
                <Col className="align-middle text-center">
                    <FontAwesomeIcon icon={faCircleCheck} size="2xl"/>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col>
                    <Row>
                        <Col className="text-center">
                            <span className="underlined-title">Thanks for your email!</span>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col className="text-center">
                            <span>I'll be in touch within 2-3 business days.</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>


    );
}

export default EmailConfirmation;