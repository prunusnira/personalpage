import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactWOW from "react-wow";
import { Container, ItemCol, ItemRow } from "../../styled/styledCommon";
import "./link.scss";

const Link = () => {
    return (
        <Container className='bgcolor' id="link">
            <ItemRow className="paragraph">
                <ReactWOW animation="slideInLeft">
                    <ItemCol className="text text-left" size={10}>
                        <span className="lv2">
                            <FontAwesomeIcon icon={faAngleDoubleRight} />&nbsp;
                            Links
                        </span>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow className="paragraph">
                <ReactWOW animation="slideInLeft">
                    <ItemCol className="text">
                        <ItemRow className="linktext lv3">
                            <b>- Blog</b>
                        </ItemRow>
                        <ItemRow className="linkpadding lv4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://prunusnira.tistory.com">
                                    https://prunusnira.tistory.com
                            </a>
                        </ItemRow>
                        <ItemRow className="linktext lv3">
                            <b>- GitHub</b>
                        </ItemRow>
                        <ItemRow className="linkpadding lv4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/prunusnira">
                                    https://github.com/prunusnira
                            </a>
                        </ItemRow>
                        <ItemRow className="linktext lv3">
                            <b>- Skill Navigator</b>
                        </ItemRow>
                        <ItemRow className="linkpadding lv4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://sin.nira.one">
                                    https://sin.nira.one
                            </a>
                        </ItemRow>
                        <ItemRow className="linktext lv3">
                            <b>- PIU Clear Manager</b>
                        </ItemRow>
                        <ItemRow className="linkpadding lv4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://piu.nira.one">
                                    https://piu.nira.one
                            </a>
                        </ItemRow>
                        <ItemRow className="linktext lv3">
                            <b>- Twitch BanPicker (Twitch login needed)</b>
                        </ItemRow>
                        <ItemRow className="linkpadding lv4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://banpick.nira.one">
                                    https://banpick.nira.one
                            </a>
                        </ItemRow>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
        </Container>
    )
}

export default Link