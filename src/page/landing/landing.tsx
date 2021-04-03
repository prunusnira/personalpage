import React, {Component } from 'react';
import {Row, Col, Container} from 'reactstrap';
import ReactWOW from 'react-wow';
import "./landing.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
    render() {
        return (
            <div className="bg-landing">
                <Container>
                    <Row className="color-land flex-center" id="landing">
                        <Col xs="12">
                            <Row className="paragraph">
                                <ReactWOW animation="fadeInDown" delay="0.5s">
                                    <Col className="text text-left" xs="12">
                                        <span className="lv1">Tae Jun Kang</span><br/>
                                        <span className="lv4">a developer & gamer</span><br/>
                                        <span className="lv4">contact: tjkang0207@gmail.com</span>
                                    </Col>
                                </ReactWOW>
                            </Row>
                            <Row>
                                <ReactWOW animation="fadeInDown" delay="1s">
                                    <Col className="text text-center arrow-down-size" xs="12">
                                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                                    </Col>
                                </ReactWOW>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Landing;