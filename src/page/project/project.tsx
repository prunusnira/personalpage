import React, {Component, Fragment} from 'react';
import { Col, Row, Button } from 'reactstrap';

import ProjectWrapper from '../component/projectWrapper';
import ProjectItem from '../../data/projectItem';

import projPerAndroid from '../../data/projPerAndroid';
import projPerUnity from '../../data/projPerUnity';
import projPerWeb from '../../data/projPerWeb';
import projWorkWeb from '../../data/projWorkWeb';
import projWorkUnity from '../../data/projWorkUnity';
import projWorkEtc from '../../data/projWorkEtc';

import Language from '../../tool/language';
import ProjectSelector from '../component/projectSelector';
import ReactWOW from 'react-wow';

import './project.scss';

interface State {
    catName: string;
    catSize: number,
    catList: Array<ProjectItem>,
    catCurNum: number
}

class ProjectPage extends Component<{}, State> {
    private projList = [ projPerAndroid,
                        projPerUnity,
                        projPerWeb,
                        projWorkWeb,
                        projWorkUnity,
                        projWorkEtc
                    ];

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
        catCurNum: 0
    }

    componentDidMount() {
        this.loadProjectList("projPerWeb");
    }

    // 리스트를 현재 선택한 것만으로 변경함
    loadProjectList(moduleName: string) {
        // 작업 전에 현재 페이지 번호를 초기화
        this.updateCatNum(0);

        let m = null;
        switch(moduleName) {
            case "projPerWeb":
                m = projPerWeb;
                break;
            case "projPerUnity":
                m = projPerUnity;
                break;
            case "projPerAndroid":
                m = projPerAndroid;
                break;
            case "projWorkWeb":
                m = projWorkWeb;
                break;
            case "projWorkUnity":
                m = projWorkUnity;
                break;
            case "projWorkEtc":
                m = projWorkEtc;
                break;
        }

        if(m != null) {
            const size = m.length;
            const list = Array<ProjectItem>();

            for(let i = 0; i < size; i++) {
                const title = (m[i].title as any)[this.lang];
                const platform = m[i].platform;
                const tech = m[i].tech;
                const period = m[i].period;
                const link1 = m[i].link1;
                const link2 = m[i].link2;
                const link3 = m[i].link3;
                const content = (m[i].content as any)[this.lang];
                const dev = (m[i].dev as any)[this.lang];
                const image = m[i].image;

                const item = new ProjectItem(
                    title, platform, tech, period,
                    link1, link2, link3, content,
                    dev, image);
                
                list.push(item);
            }

            this.setState({
                catName: moduleName,
                catSize: size,
                catList: list
            });
        }
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
            <Fragment>
                <Row className="h100 color-proj" id="works">
                    <Col xs="12">
                        <Row className="paragraph">
                            <ReactWOW animation="slideInLeft">
                                <Col className="text text-center" xs="12">
                                    <span className="lv1">Works</span>
                                </Col>
                            </ReactWOW>
                        </Row>
                        <Row className="text-center">
                            <Col xs="6">
                                <span className="lv3">
                                    Personal Development
                                </span><br/>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projPerWeb")}>Web</Button>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projPerAndroid")}>Android</Button>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projPerUnity")}>Unity</Button>
                            </Col>
                            <Col xs="6">
                                <span className="lv3">
                                    Non-Personal Development
                                </span><br/>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projWorkWeb")}>Web</Button>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projWorkUnity")}>Unity</Button>
                                <Button className="btn-category" onClick={() => this.loadProjectList("projWorkEtc")}>etc</Button>
                            </Col>
                        </Row>
                        {/** Point로 개수 표시
                         * point를 선택하면 catCurNum이 변경
                         */}
                        <Row>
                            <Col xs="12" className="text-center">
                                <ProjectSelector
                                    catSize={this.state.catSize}
                                    catCurNum={this.state.catCurNum}
                                    updateCatNum={this.updateCatNum}
                                />
                            </Col>
                        </Row>
                        <ProjectWrapper
                            catName={this.state.catName}
                            catSize={this.state.catSize}
                            catList={this.state.catList}
                            catCurNum={this.state.catCurNum}
                            moveProject={this.moveProject}
                        />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ProjectPage;