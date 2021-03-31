import React, { Component, Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ProjectItem from "../../data/projectItem";
import textProject from "../../text/project";
import Language from "../../tool/language";

interface Props {
    item: ProjectItem
}

interface State {
    isOpen: boolean
}

class ProjectListObject extends Component<Props, State> {
    private lang = Language.getLang();

    constructor(props: Props) {
        super(props);
        this.changeOpen = this.changeOpen.bind(this);
    }

    state: State = {
        isOpen: false
    }

    changeOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render = () => {
        const item = this.props.item;
        return (
            <Fragment>
                <Row className="projobj-overall">
                    <Col xs="12">
                        <Row onClick={this.changeOpen}>
                            <Col xs="2">
                                <img
                                    alt="icon"
                                    className="projobj-icon"
                                    src={process.env.PUBLIC_URL+"/img"+item.icon} />
                            </Col>
                            <Col xs="10">
                                <Row>
                                    <Col xs="9" className="projobj-title">
                                        {item.title}
                                    </Col>
                                    <Col xs="3">
                                        {item.platform}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        {item.simpledesc}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Card style={
                            this.state.isOpen?
                            {
                                display: "block"
                            }
                            :
                            {
                                display: "none"
                            }
                        }>
                            <CardBody className="projcard">
                                <Row className="paragraph">
                                    <Col xs="6" className="text">
                                        <b>{(textProject.platform as any)[this.lang]}</b><br/>
                                        <span className="lv3">{item.platform}</span>
                                    </Col>
                                    <Col xs="6" className="text">
                                        <b>{(textProject.period as any)[this.lang]}</b><br/>
                                        <span className="lv3">{item.period}</span>
                                    </Col>
                                </Row>
                                <Row className="paragraph">
                                    <Col className="text">
                                        <b>{(textProject.tech as any)[this.lang]}</b><br/>
                                        <span className="lv3">{item.tech}</span>
                                    </Col>
                                </Row>
                                <Row className="paragraph">
                                    <Col className="text">
                                        {
                                            item.link.map((v, i) => {
                                                return (
                                                    <Fragment>
                                                        <b>Link {i+1}</b>
                                                        &nbsp;
                                                        <span className="lv3">
                                                            <a
                                                                key="link1"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                href={v}>
                                                                {v}
                                                            </a>
                                                        </span><br/>
                                                    </Fragment>)
                                            })
                                        }
                                    </Col>
                                </Row>
                                <Row className="paragraph">
                                    <Col className="text">
                                        <span className="lv3" dangerouslySetInnerHTML={{__html:item.content}}></span>
                                    </Col>
                                </Row>
                                <Row className="paragraph">
                                    <Col className="text">
                                        <b>{(textProject.dev as any)[this.lang]}</b><br/>
                                        <span className="lv3" dangerouslySetInnerHTML={{__html:item.dev}}></span>
                                    </Col>
                                </Row>
                                <Row className="paragraph">
                                    <Col className="text">
                                        <b>Images</b><br/>
                                        <span className="lv3">Click to open in the new tab</span><br/>
                                        <span className="lv3">
                                            {
                                                item.image.map((e) => {
                                                    const imgUrl = process.env.PUBLIC_URL+"/img"+e;
                                                    return (
                                                        <a
                                                            key={e}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href={imgUrl}>
                                                            <img alt="" className="projobj-image" src={imgUrl}/>
                                                        </a>
                                                    )
                                                })
                                            }
                                        </span>
                                    </Col>
                                </Row>
                                <Row onClick={this.changeOpen}>
                                    <Col xs="12" className="text-center">
                                        <a href="#no_div">▲ CLOSE ▲</a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default ProjectListObject;