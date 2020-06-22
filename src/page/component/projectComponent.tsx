import React, { Component, Fragment } from "react";
import { Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import textProject from "../../text/project";
import Language from "../../tool/language";
import "./projectComponent.scss";

interface Props {
    title: string,
    platform: string,
    tech: string,
    period: string,
    link1: string,
    link2: string,
    link3: string,
    content: string,
    dev: string,
    image: Array<string>
}

class ProjectComponent extends Component<Props> {
    private lang = Language.getLang();

    render() {
        return (
            <Fragment>
                <Card>
                    <CardHeader className="text">
                        <span className="lv2">{this.props.title}</span>
                    </CardHeader>
                    <CardBody>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>{(textProject.platform as any)[this.lang]}</b><br/>
                                <span className="lv3">{this.props.platform}</span>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>{(textProject.period as any)[this.lang]}</b><br/>
                                <span className="lv3">{this.props.period}</span>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>{(textProject.tech as any)[this.lang]}</b><br/>
                                <span className="lv3">{this.props.tech}</span>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>Link 1</b> <span className="lv3">{this.props.link1}</span><br/>
                                <b>Link 2</b> <span className="lv3">{this.props.link2}</span><br/>
                                <b>Link 3</b> <span className="lv3">{this.props.link3}</span><br/>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <span className="lv3" dangerouslySetInnerHTML={{__html:this.props.content}}></span>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>{(textProject.dev as any)[this.lang]}</b><br/>
                                <span className="lv3" dangerouslySetInnerHTML={{__html:this.props.dev}}></span>
                            </Col>
                        </Row>
                        <Row className="paragraph">
                            <Col className="text">
                                <b>Images</b><br/>
                                <span className="lv3">Click to open in the new tab</span><br/>
                                <span className="lv3">
                                    {
                                        this.props.image.map((e) => {
                                            const imgUrl = process.env.PUBLIC_URL+"/img"+e;
                                            return (
                                                <a
                                                    target="_blank"
                                                    href={imgUrl}>
                                                    <img className="proj-comp-img" src={imgUrl}/>
                                                </a>
                                            )
                                        })
                                    }
                                </span>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                
            </Fragment>
        )
    }
}

export default ProjectComponent;