import React from 'react'
import ReactWOW from 'react-wow'
import "./about.css"
import textAbout from '../../text/about'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Container, ItemCol, ItemRow } from '../../styled/styledCommon'

const About = () => {
    const lang = "ko"

    return (
        <Container className='bgcolor' id="profile">
            <ItemRow className="paragraph text text-left">
                <span className="lv2">
                    <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
                    About
                </span>
            </ItemRow>
            <ItemRow className="paragraph text">
                <span className="lv3">
                    <FontAwesomeIcon icon={faAngleRight} />&nbsp;
                    {(textAbout.para1t as any)[lang]}
                </span>
            </ItemRow>
            <ItemRow className="text">
                <span className="lv4" dangerouslySetInnerHTML={
                    {__html: (textAbout.para1c as any)[lang]}
                }></span>
            </ItemRow>
            <ItemRow className="paragraph text">
                <span className="lv3">
                    <FontAwesomeIcon icon={faAngleRight} />&nbsp;
                    {(textAbout.para3t as any)[lang]}
                </span>
            </ItemRow>
            <ItemRow className="text">
                <span className="lv4"><b>2015.05-2020.05</b><br/>
                    <span dangerouslySetInnerHTML={
                        {__html:(textAbout.para3c1 as any)[lang]}
                    }></span>
                </span>
            </ItemRow>
            <ItemRow className="text">
                <span className="lv4"><b>2013.03-2015.02</b><br/>
                    <span dangerouslySetInnerHTML={
                        {__html:(textAbout.para3c2 as any)[lang]}
                    }></span>
                </span>
            </ItemRow>
        </Container>
    )
}

export default About