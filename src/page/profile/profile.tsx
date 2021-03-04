import React, {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import ReactWOW from 'react-wow';
import "./profile.scss";
import textAbout from '../../text/about';
import TechStackCard from './techStackCard';
import techStack from '../../data/techStackData';

class About extends Component {
    private lang = "ko";

    render() {
        return (
            <div className="color-prof">
                <Container>
                    <Row className="h100" id="profile">
                        <Col xs="12">
                            <Row className="paragraph">
                                <ReactWOW
                                    key="profile1"
                                    animation="slideInLeft">
                                    <Col className="text text-left" xs="12">
                                        <span className="lv1">About</span>
                                    </Col>
                                </ReactWOW>
                            </Row>
                            <Row className="paragraph">
                                <ReactWOW
                                    key="profile2"
                                    animation="slideInLeft">
                                    <Col className="text" xs="12">
                                        <span className="lv2">{(textAbout.para1t as any)[this.lang]}</span><br/>
                                        <span className="lv3" dangerouslySetInnerHTML={{__html: (textAbout.para1c as any)[this.lang]}}></span>
                                    </Col>
                                </ReactWOW>
                            </Row>
                            <Row className="paragraph">
                                <ReactWOW
                                    key="profile3"
                                    animation="slideInLeft">
                                    <Col className="text" xs="12">
                                        <span className="lv2">{(textAbout.para2t as any)[this.lang]}</span><br/>
                                        <span className="lv3">{(textAbout.para2c as any)[this.lang]}</span>
                                    </Col>
                                </ReactWOW>
                            </Row>
                            <Row className="paragraph">
                                {
                                    techStack.map((d, i) => {
                                        return (
                                            <ReactWOW
                                                key={"profile4"+i}
                                                animation="slideInLeft">
                                                <Col className="text" sm="12" md="6">
                                                    <TechStackCard
                                                        title={d.title}
                                                        cont={d.cont}
                                                    />
                                                </Col>
                                            </ReactWOW>
                                        )
                                    })
                                }
                            </Row>
                            <Row className="paragraph">
                                <ReactWOW
                                    key="profile5"
                                    animation="slideInLeft">
                                    <Col className="text" xs="12">
                                        <span className="lv2">{(textAbout.para3t as any)[this.lang]}</span><br/><br/>
                                        <span className="lv3"><b>2015.05-2020.05</b><br/>
                                            <span dangerouslySetInnerHTML={
                                                {__html:(textAbout.para3c1 as any)[this.lang]}
                                            }></span>
                                        </span><br/><br/>
                                        <span className="lv3"><b>2013.03-2015.02</b><br/>
                                            <span dangerouslySetInnerHTML={
                                                {__html:(textAbout.para3c2 as any)[this.lang]}
                                            }></span>
                                        </span>
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

export default About;