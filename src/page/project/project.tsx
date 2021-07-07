import React, {useEffect, useState} from 'react'

import ProjectItem from '../../data/projectItem'

import projPersonal from '../../data/projPersonal'
import projNonPersonal from '../../data/projNonPersonal'

import Language from '../../tool/language'
import ReactWOW from 'react-wow'

import './project.scss'
import ProjectListWrapper from './projectListWrapper'
import textProject from '../../text/project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Container, ItemCol, ItemRow } from '../../styled/styledCommon'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

const ProjectPage = () => {
    const [catName, setCatName] = useState('')
    const [catSize, setCatSize] = useState(0)
    const [catList, setCatList] = useState(new Array<ProjectItem>())
    const [ppList, setPPList] = useState(new Array<ProjectItem>())
    const [npList, setNPList] = useState(new Array<ProjectItem>())
    const [catCurNum, setCatNum] = useState(0)
    const [catPage, setCatPage] = useState(0)

    const lang: string = Language.getLang();

    useEffect(() => {
        loadProjectList("projPersonal")
    }, [])

    // 리스트를 현재 선택한 것만으로 변경함
    const loadProjectList = (moduleName: string) => {
        // 작업 전에 현재 페이지 번호를 초기화
        setCatNum(0);

        let m = null;
        switch(moduleName) {
            case "projPersonal":
                m = projPersonal
                break
            case "projNonPersonal":
                m = projNonPersonal
                break
        }

        if(m != null) {
            const size = m.length
            const plist = Array<ProjectItem>()
            const nlist = Array<ProjectItem>()

            projPersonal.forEach(e => {
                plist.push(generateItemObject(e))
            })
            projNonPersonal.forEach(e => {
                nlist.push(generateItemObject(e))
            })

            setCatName(moduleName)
            setCatSize(size)
            setPPList(plist)
            setNPList(nlist)
        }
    }

    const generateItemObject = (e: any) => {
        return new ProjectItem(
            e.icon,
            (e.title as any)[lang],
            (e.simpledesc as any)[lang],
            e.platform,
            e.tech,
            e.period,
            e.link,
            (e.content as any)[lang],
            (e.dev as any)[lang],
            e.image)
    }

    const moveProject = (idx: number) => {
        let nextidx: number

        if(idx > catSize - 1) nextidx = catSize - 1
        else if(idx < 0) nextidx = 0
        else nextidx = idx

        setCatNum(nextidx)
    }

    return (
        <Container className='bgcolor'>
            <ItemRow className="h100" id="works">
                <ItemCol size={10}>
                    <ItemRow className="paragraph">
                        <ReactWOW animation="slideInLeft">
                            <ItemCol className="text text-left" size={10}>
                                <span className="lv2">
                                    <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
                                    Project
                                </span><br/>
                                <span className="lv4">
                                    {(textProject.clickToExpand as any)[lang]}
                                </span>
                            </ItemCol>
                        </ReactWOW>
                    </ItemRow>

                    <ItemRow>
                        <ReactWOW animation="slideInLeft">
                            <ItemCol size={10}>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={(catPage === 0 ? "active":"")}
                                            onClick={() => {
                                                setCatPage(0)
                                        }}>
                                            Personal Work
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={(catPage === 1 ? "active":"")}
                                            onClick={() => {
                                                setCatPage(1)
                                        }}>
                                            Non-Personal Work
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={catPage}>
                                    <TabPane tabId={0}>
                                        <ProjectListWrapper list={ppList}/>
                                    </TabPane>
                                    <TabPane tabId={1}>
                                        <ProjectListWrapper list={npList}/>
                                    </TabPane>
                                </TabContent>
                            </ItemCol>
                        </ReactWOW>
                    </ItemRow>
                </ItemCol>
            </ItemRow>
        </Container>
    )
}

export default ProjectPage