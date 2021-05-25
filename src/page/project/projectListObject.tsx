import React, { useState } from "react"
import ProjectItem from "../../data/projectItem"
import { BodyContent, ItemCol, ItemRow } from "../../styled/styledCommon"
import textProject from "../../text/project"
import Language from "../../tool/language"

interface Props {
    item: ProjectItem
}

const ProjectListObject = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    const lang = Language.getLang()

    const changeOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <>
            <ItemRow className="projobj-overall text">
                <ItemCol size={10}>
                    <ItemRow onClick={changeOpen} keepDirHor={true}>
                        <ItemCol size={2} className="text-center">
                            <img
                                alt="icon"
                                className="projobj-icon"
                                src={`${process.env.PUBLIC_URL}/img${props.item.icon}`} />
                        </ItemCol>
                        <ItemCol size={8}>
                            <ItemRow keepDirHor={true}>
                                <ItemCol size={8} className="lv3">
                                    {props.item.title}
                                </ItemCol>
                                <ItemCol size={2} className="lv4">
                                    {props.item.platform}
                                </ItemCol>
                            </ItemRow>
                            <ItemRow>
                                {props.item.simpledesc}
                            </ItemRow>
                        </ItemCol>
                    </ItemRow>
                    <BodyContent
                        className="projcard"
                        style={
                            isOpen?
                            {
                                display: "block"
                            }
                            :
                            {
                                display: "none"
                            }
                        }>
                        <ItemRow className="paragraph">
                            <ItemCol size={5} className="text">
                                <b>{(textProject.platform as any)[lang]}</b><br/>
                                <span className="lv4">{props.item.platform}</span>
                            </ItemCol>
                            <ItemCol size={5} className="text">
                                <b>{(textProject.period as any)[lang]}</b><br/>
                                <span className="lv4">{props.item.period}</span>
                            </ItemCol>
                        </ItemRow>
                        <ItemRow className="paragraph">
                            <ItemCol className="text">
                                <b>{(textProject.tech as any)[lang]}</b><br/>
                                <span className="lv4">{props.item.tech}</span>
                            </ItemCol>
                        </ItemRow>
                        <ItemRow className="paragraph">
                            <ItemCol className="text">
                                {
                                    props.item.link.map((v, i) => {
                                        return (
                                            <>
                                                <b>Link {i+1}</b>
                                                &nbsp;
                                                <span className="lv4">
                                                    <a
                                                        key="link1"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href={v}>
                                                        {v}
                                                    </a>
                                                </span><br/>
                                            </>)
                                    })
                                }
                            </ItemCol>
                        </ItemRow>
                        <ItemRow className="paragraph">
                            <ItemCol className="text">
                                <span className="lv4" dangerouslySetInnerHTML={{__html: props.item.content}}></span>
                            </ItemCol>
                        </ItemRow>
                        <ItemRow className="paragraph">
                            <ItemCol className="text">
                                <b>{(textProject.dev as any)[lang]}</b><br/>
                                <span className="lv4" dangerouslySetInnerHTML={{__html: props.item.dev}}></span>
                            </ItemCol>
                        </ItemRow>
                        <ItemRow className="paragraph">
                            <ItemCol className="text">
                                <b>Images</b><br/>
                                <span className="lv4">Click to open in the new tab</span><br/>
                                <span className="lv4">
                                    {
                                        props.item.image.map((e) => {
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
                            </ItemCol>
                        </ItemRow>
                        <ItemRow onClick={changeOpen}>
                            <ItemCol size={10} className="text-center">
                                <a href="#no_div">▲ CLOSE ▲</a>
                            </ItemCol>
                        </ItemRow>
                    </BodyContent>
                </ItemCol>
            </ItemRow>
        </>
    )
}

export default ProjectListObject