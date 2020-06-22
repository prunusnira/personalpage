import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import "./profile.scss";
import textAbout from '../../text/about';
import TechStackCard from '../component/techStackCard';
import techStack from '../../data/techStackData';

class About extends Component {
    private lang = "ko";

    render() {
        return (
            <Fragment>
                <Row className="h100 color-prof" id="profile">
                    <Col xs="12">
                        <Row className="paragraph">
                            <ReactWOW animation="slideInLeft">
                                <Col className="text text-center" xs="12">
                                    <span className="lv1">Profile</span>
                                </Col>
                            </ReactWOW>
                        </Row>
                        <Row className="paragraph">
                            <ReactWOW animation="slideInLeft">
                                <Col className="text text-center" xs="12">
                                    <span className="lv2">{(textAbout.para1t as any)[this.lang]}</span><br/>
                                    <span className="lv3">{(textAbout.para1c as any)[this.lang]}</span>
                                </Col>
                            </ReactWOW>
                        </Row>
                        <Row className="paragraph">
                            <ReactWOW animation="fadeInDown">
                                <Col className="text" xs="12">
                                    <span className="lv2">{(textAbout.para2t as any)[this.lang]}</span>
                                </Col>
                            </ReactWOW>
                        </Row>
                        <Row className="paragraph">
                            {
                                techStack.map((d, i) => {
                                    return (
                                        <ReactWOW animation="slideInLeft">
                                            <Col className="text" xs="6">
                                                <TechStackCard
                                                    title={d.title}
                                                    c1t={d.c1t}
                                                    c1c={d.c1c}
                                                    c2t={d.c2t}
                                                    c2c={d.c2c}
                                                />
                                            </Col>
                                        </ReactWOW>
                                    )
                                })
                            }
                        </Row>
                        <Row className="paragraph">
                            <ReactWOW animation="slideInLeft">
                                <Col className="text" xs="12">
                                    <span className="lv2">{(textAbout.para3t as any)[this.lang]}</span><br/>
                                    <span className="lv3"><b>2013.03-2015.02</b><br/>
                                        {(textAbout.para3c1 as any)[this.lang]}<br/>
                                        MS. in Computer Science and Engineering
                                    </span><br/>
                                    <span className="lv3"><b>2015.05-2020.05</b><br/>
                                        {(textAbout.para3c2 as any)[this.lang]}
                                    </span>
                                </Col>
                            </ReactWOW>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default About;