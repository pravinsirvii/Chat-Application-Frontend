import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import "./Chat.css";

function Chat() {
    return (
        <Container>
            <Row>
                <Col md={4} className="col-content">
                    <Sidebar />
                </Col>
                <Col md={8} className="col-pass">
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;