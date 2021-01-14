import React, {Component} from 'react';
import { Col, Row, Container, Nav, NavItem, TabContent, TabPane, NavLink } from 'reactstrap';

import ProjectItem from '../../data/projectItem';

import projPersonal from '../../data/projPersonal';
import projNonPersonal from '../../data/projNonPersonal';

import Language from '../../tool/language';
import ReactWOW from 'react-wow';

import './project.scss';
import ProjectListWrapper from './projectListWrapper';

interface State {
    catName: string,
    catSize: number,
    catList: Array<ProjectItem>,
    ppList: Array<ProjectItem>,
    npList: Array<ProjectItem>,
    catCurNum: number,
    catPage: number
}

class ProjectPage extends Component<{}, State> {
    private lang: string = Language.getLang();

    constructor(props: {}) {
        super(props);
        this.updateCatNum = this.updateCatNum.bind(this);
        this.moveProject = this.moveProject.bind(this);
    }

    state: State = {
        catName: "",
        catSize: 0,
        catList: Array<ProjectItem>(),
        ppList: Array<ProjectItem>(),
        npList: Array<ProjectItem>(),
        catCurNum: 0,
        catPage: 0
    }

    componentDidMount() {
        this.loadProjectList("projPersonal");
    }

    // 리스트를 현재 선택한 것만으로 변경함
    loadProjectList(moduleName: string) {
        // 작업 전에 현재 페이지 번호를 초기화
        this.updateCatNum(0);

        let m = null;
        switch(moduleName) {
            case "projPersonal":
                m = projPersonal;
                break;
            case "projNonPersonal":
                m = projNonPersonal;
                break;
        }

        if(m != null) {
            const size = m.length;
            const plist = Array<ProjectItem>();
            const nlist = Array<ProjectItem>();

            projPersonal.forEach(e => {
                plist.push(this.generateItemObject(e));
            });
            projNonPersonal.forEach(e => {
                nlist.push(this.generateItemObject(e));
            });

            this.setState({
                catName: moduleName,
                catSize: size,
                ppList: plist,
                npList: nlist
            });
        }
    }

    generateItemObject(e: any) {
        return new ProjectItem(
            e.icon,
            (e.title as any)[this.lang],
            (e.simpledesc as any)[this.lang],
            e.platform,
            e.tech,
            e.period,
            e.link1,
            e.link2,
            e.link3,
            (e.content as any)[this.lang],
            (e.dev as any)[this.lang],
            e.image);
    }

    updateCatNum(num: number) {
        this.setState({
            catCurNum: num
        });
    }

    moveProject(idx: number) {
        const catlen = this.state.catSize;
        let nextidx: number;

        if(idx > catlen - 1) nextidx = catlen - 1;
        else if(idx < 0) nextidx = 0;
        else nextidx = idx;

        this.setState({
            catCurNum: nextidx
        });
    }

    render() {
        return (
            <div className="color-proj">
                <Container>
                    <Row className="h100" id="works">
                        <Col xs="12">
                            <Row className="paragraph">
                                <ReactWOW animation="slideInLeft">
                                    <Col className="text text-center" xs="12">
                                        <span className="lv1">Works</span>
                                    </Col>
                                </ReactWOW>
                            </Row>

                            <Row>
                                <Col className="text-center" xs="12">
                                    Click/Touch to expand
                                </Col>
                            </Row>

                            <Row>
                                <ReactWOW animation="slideInLeft">
                                    <Col xs="12">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={(this.state.catPage === 0 ? "active":"")}
                                                    onClick={() => {
                                                    this.setState({
                                                        catPage: 0
                                                    });
                                                }}>
                                                    Personal Work
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={(this.state.catPage === 1 ? "active":"")}
                                                    onClick={() => {
                                                    this.setState({
                                                        catPage: 1
                                                    });
                                                }}>
                                                    Non-Personal Work
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={this.state.catPage}>
                                            <TabPane tabId={0}>
                                                <ProjectListWrapper list={this.state.ppList}/>
                                            </TabPane>
                                            <TabPane tabId={1}>
                                                <ProjectListWrapper list={this.state.npList}/>
                                            </TabPane>
                                        </TabContent>
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

export default ProjectPage;