import React, { Component, Fragment } from "react";
import { Col, Row, Button } from "reactstrap";
import ProjectItem from "../../data/projectItem";
import ProjectComponent from "./projectComponent"; 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

interface Props {
    catName: string,
    catSize: number,
    catList: Array<ProjectItem>,
    catCurNum: number,
    moveProject: (pn: boolean) => void
}

class ProjectWrapper extends Component<Props> {
    btnStyle = {
        backgroundColor: "transparent",
        border: "0",
        fontSize: "125%"
    }

    render() {
        const self = this;
        if(this.props.catList.length > 0) {
            const item = this.props.catList[this.props.catCurNum];
            return (
                <Fragment>
                    <Row>
                        <Col xs="1">
                            <div className="proj-shell">
                                {
                                    (function() {
                                        if(self.props.catCurNum == 0) {
                                            return null;
                                        }
                                        else {
                                            return (
                                                <div className="proj-cover">
                                                    <Button style={self.btnStyle} onClick={() => self.props.moveProject(false)}>
                                                        <FontAwesomeIcon icon={faChevronLeft} />
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    })()
                                }
                            </div>
                        </Col>
                        <Col xs="10">
                            <ProjectComponent
                                title={item.title}
                                platform={item.platform}
                                tech={item.tech}
                                period={item.period}
                                link1={item.link1}
                                link2={item.link2}
                                link3={item.link3}
                                content={item.content}
                                dev={item.dev}
                                image={item.image}
                            />
                        </Col>
                        <Col xs="1">
                            <div className="proj-shell">
                                {
                                    (function() {
                                        if(self.props.catCurNum == self.props.catSize-1) {
                                            return null;
                                        }
                                        else {
                                            return (
                                                <div className="proj-cover">
                                                    <Button style={self.btnStyle} onClick={() => self.props.moveProject(true)}>
                                                        <FontAwesomeIcon icon={faChevronRight} />
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    })()
                                }
                            </div>
                        </Col>
                    </Row>
                </Fragment>
            )
        }
        else {
            return null;
        }
    }
}

export default ProjectWrapper;