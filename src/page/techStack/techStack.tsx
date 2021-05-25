import { faAngleDoubleRight, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ReactWOW from "react-wow"
import techStackData from "../../data/techStackData"
import { Container, ItemCol, ItemRow } from "../../styled/styledCommon"
import textAbout from "../../text/about"
import Language from "../../tool/language"
import TechStackCard from "./techStackCard"

const TechStack = () => {

    const lang: string = Language.getLang();

    return (
        <Container className='bgcolor' id="profile">
            <ItemRow className="paragraph">
                <ReactWOW
                    key="profile1"
                    animation="slideInLeft">
                    <ItemCol className="text text-left" size={10}>
                        <span className="lv2">
                            <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
                            Tech Stack
                        </span>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow className="paragraph">
                <ReactWOW
                    key="profile3"
                    animation="slideInLeft" delay='0.5s'>
                    <ItemCol className="text" size={10}>
                        <span className="lv3">
                            <FontAwesomeIcon icon={faAngleRight} />&nbsp;
                            {(textAbout.para2t as any)[lang]}
                        </span><br/>
                        <span className="lv4">{(textAbout.para2c as any)[lang]}</span>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow className="paragraph">
                {
                    techStackData.map((d, i) => {
                        return (
                            <TechStackCard
                                title={d.title}
                                cont={d.cont}
                            />
                        )
                    })
                }
            </ItemRow>
        </Container>
    )
}

export default TechStack