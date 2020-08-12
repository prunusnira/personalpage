import React, {Component, Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import ReactWOW from 'react-wow';
import "./landing.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
    render() {
        return (
            <Fragment>
                <Row className="color-land flex-center" id="landing">
                    <Col xs="12">
                        <Row className="paragraph">
                            <ReactWOW animation="fadeInDown">
                                <Col className="text text-center" xs="12">
                                    <span className="lv1">Curiosity,</span><br/>
                                    <span className="lv1">Solving,</span><br/>
                                    <span className="lv1">and Evolving.</span><br/>
                                </Col>
                            </ReactWOW>
                        </Row>
                        <Row className="paragraph">
                            <ReactWOW animation="slideInRight" delay="0.1s">
                                <Col className="text text-right" xs="12">
                                    <span className="lv2">Tae Jun Kang</span><br/>
                                    <span className="lv3">a.k.a. Nira</span><br/>
                                    <span className="lv3">a developer</span><br/>
                                    <span className="lv3">a gamer</span><br/>
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
            </Fragment>
        )
    }
}

export default Landing;