import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import ReactWOW from "react-wow";
import { Col, Container, Row } from "reactstrap";
import "./link.scss";

class Link extends Component {
    render() {
        return (
            <div className="color-link">
                <Container>
                    <Row className="h100" id="link">
                        <Col xs="12">
                            <Row className="paragraph">
                                <ReactWOW animation="slideInLeft">
                                    <Col className="text text-left" xs="12">
                                        <span className="lv1">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
                                            Links
                                        </span>
                                    </Col>
                                </ReactWOW>
                            </Row>
                            <Row className="paragraph">
                                <ReactWOW animation="slideInLeft">
                                    <Col xs="12">
                                        <Row>
                                            <Col xs="12" className="linktext">
                                                <b>- Blog</b>
                                            </Col>
                                        </Row>
                                        <Row className="linkpadding">
                                            <Col xs="12">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://arincblossom.wordpress.com">
                                                        https://arincblossom.wordpress.com</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" className="linktext">
                                                <b>- GitHub</b>
                                            </Col>
                                        </Row>
                                        <Row className="linkpadding">
                                            <Col xs="12">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://github.com/prunusnira">
                                                        https://github.com/prunusnira</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" className="linktext">
                                                <b>- Skill Navigator</b>
                                            </Col>
                                        </Row>
                                        <Row className="linkpadding">
                                            <Col xs="12">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://sin.nira.one">
                                                        https://sin.nira.one</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" className="linktext">
                                                <b>- PIU Manager</b>
                                            </Col>
                                        </Row>
                                        <Row className="linkpadding">
                                            <Col xs="12">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://piu.nira.one">
                                                        https://piu.nira.one</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" className="linktext">
                                                <b>- Twitch BanPicker</b>
                                            </Col>
                                        </Row>
                                        <Row className="linkpadding">
                                            <Col xs="12">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://banpick.nira.one">
                                                        https://banpick.nira.one</a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </ReactWOW>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Link;