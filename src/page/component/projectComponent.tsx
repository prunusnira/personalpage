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
                                <b>Link 1</b>
                                &nbsp;
                                <span className="lv3">
                                    <a
                                        key="link1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={this.props.link1}>
                                        {this.props.link1}
                                    </a>
                                </span><br/>
                                <b>Link 2</b>
                                &nbsp;
                                <span className="lv3">
                                    <a
                                        key="link2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={this.props.link2}>
                                        {this.props.link2}
                                    </a>
                                </span><br/>
                                <b>Link 3</b>
                                &nbsp;
                                <span className="lv3">
                                    <a
                                        key="link3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={this.props.link3}>
                                        {this.props.link3}
                                    </a>
                                </span><br/>
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
                                                    key={e}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={imgUrl}>
                                                    <img alt="" className="proj-comp-img" src={imgUrl}/>
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