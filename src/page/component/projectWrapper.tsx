import React, { Component, Fragment } from "react";
import { Col, Row, Button } from "reactstrap";
import ProjectItem from "../../data/projectItem";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import ProjectLinearCover from "./projectLinearCover";

interface Props {
    catName: string,
    catSize: number,
    catList: Array<ProjectItem>,
    catCurNum: number,
    moveProject: (idx: number) => void
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
            return (
                <Fragment>
                    <Row>
                        <Col xs="1">
                            <div className="proj-shell">
                                {
                                    (function() {
                                        let nextidx: number;
                                        if(self.props.catCurNum === 0) {
                                            nextidx = self.props.catSize - 1;
                                        }
                                        else {
                                            nextidx = self.props.catCurNum - 1;
                                        }

                                        return (
                                            <div className="proj-cover">
                                                <Button style={self.btnStyle}
                                                        onClick={() => self.props.moveProject(nextidx)}>
                                                    <FontAwesomeIcon icon={faChevronLeft} />
                                                </Button>
                                            </div>
                                        )
                                    })()
                                }
                            </div>
                        </Col>
                        <Col xs="10">
                            <ProjectLinearCover
                                catList={self.props.catList}
                                catSize={self.props.catSize}
                                catCurNum={self.props.catCurNum}
                                moveProject={self.props.moveProject}
                            />
                        </Col>
                        <Col xs="1">
                            <div className="proj-shell">
                                {
                                    (function() {
                                        let nextidx: number;
                                        if(self.props.catCurNum === self.props.catSize - 1) {
                                            nextidx = 0;
                                        }
                                        else {
                                            nextidx = self.props.catCurNum + 1;
                                        }

                                        return (
                                            <div className="proj-cover">
                                                <Button style={self.btnStyle}
                                                        onClick={() => self.props.moveProject(nextidx)}>
                                                    <FontAwesomeIcon icon={faChevronRight} />
                                                </Button>
                                            </div>
                                        )
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