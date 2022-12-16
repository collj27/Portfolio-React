import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {Col, Container, Row, Toast} from "react-bootstrap";
import "./contact.css"

function Contact() {

    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [toastClass, setToastClass] = useState("");

    const toggleShowToast = () => setShowToast(!showToast);

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_243igq8', 'template_jk9ky3h', form.current, 'Yb6qKhAeEl4FShqPx')
            .then((result) => {
                // show the user a success message
                setToastMsg("Email sent successfully! I will respond as soon as possible.")
                setToastClass("toast-success")
                toggleShowToast()
            }, () => {
                // show the user an error
                setToastMsg("Sorry, there was a problem sending the email. Please contact me on LinkedIn.")
                setToastClass("toast-error")
                toggleShowToast()
            });
    };

    return (
        <Container>
            <Row className="justify-content-end">
                <Col  xs={6} sm={5} md={4}>
                    <Toast className={toastClass} show={showToast} onClose={toggleShowToast} delay={3000} autohide>
                        <Toast.Body>{toastMsg}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col>
                    <Row>
                        <Col className="text-center">
                            <span className="underlined-title">Need a full stack engineer?</span>
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col className="text-center">
                            <span>Fill out the contact form or reach out on LinkedIn</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col className="mt-auto">
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col className="text-center">
                                <input type="text" name="from_name" placeholder="Name"/>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <input type="email" name="reply_to" placeholder="Email"/>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <input type="text" name="subject" placeholder="Subject"/>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="text-center">
                                <textarea name="message" placeholder="Message" rows="15" cols="40"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <input className="btn btn-primary" type="submit" value="Send"/>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>


        </Container>


    );
}

export default Contact;