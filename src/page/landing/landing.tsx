import React from 'react'
import ReactWOW from 'react-wow'
import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button, Container, ItemCol, ItemRow, MainBtn } from '../../styled/styledCommon'

const Landing = () => {
    return (
        <Container className='bgcolor' id="landing">
            <ItemRow className="paragraph">
                <ReactWOW animation="fadeInDown" delay="0.5s">
                    <ItemCol className="text text-center" size={10}>
                        <span className="lv1">Tae Jun Kang</span><br/>
                        <span className="lv3">코드로 많은 사람들에게 다가가고 싶은 개발자입니다</span><br/>
                        <span className="lv4">contact: tjkang0207@gmail.com</span>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow>
                <ReactWOW animation="fadeInDown" delay="0.5s">
                    <ItemCol className="text text-center arrow-down-size" size={10}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow>
                <ReactWOW animation="fadeInDown" delay="0.5s">
                    <ItemRow>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/about' style={{width: '100%'}}>
                                <MainBtn className='text' bgColor='#eef3ab' txtColor='black'>
                                    <ItemRow>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <img src={`${process.env.PUBLIC_URL}/img/main/icon_about.png`}
                                                style={{maxWidth: '75px'}} />
                                        </ItemCol>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <ItemRow>
                                                <span className='lv2'>About</span>
                                            </ItemRow>
                                            <ItemRow>
                                                <span className='lv4'>간단한 소개입니다</span>
                                            </ItemRow>
                                        </ItemCol>
                                    </ItemRow>
                                </MainBtn>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/tech' style={{width: '100%'}}>
                                <MainBtn className='text' bgColor='#eef3ab' txtColor='black'>
                                    <ItemRow>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <img src={`${process.env.PUBLIC_URL}/img/main/icon_tech.png`}
                                                style={{maxWidth: '75px'}} />
                                        </ItemCol>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <ItemRow>
                                                <span className='lv2'>Tech Stack</span>
                                            </ItemRow>
                                            <ItemRow>
                                                <span className='lv4'>프로젝트에서 한 번쯤은 사용해본 것들</span>
                                            </ItemRow>
                                        </ItemCol>
                                    </ItemRow>
                                </MainBtn>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/project' style={{width: '100%'}}>
                                <MainBtn className='text' bgColor='#eef3ab' txtColor='black'>
                                    <ItemRow>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <img src={`${process.env.PUBLIC_URL}/img/main/icon_proj.png`}
                                                style={{maxWidth: '75px'}} />
                                        </ItemCol>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <ItemRow>
                                                <span className='lv2'>Project</span>
                                            </ItemRow>
                                            <ItemRow>
                                                <span className='lv4'>업무/개인으로 진행한 프로젝트 모음</span>
                                            </ItemRow>
                                        </ItemCol>
                                    </ItemRow>
                                </MainBtn>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/link' style={{width: '100%'}}>
                                <MainBtn className='text' bgColor='#eef3ab' txtColor='black'>
                                    <ItemRow>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <img src={`${process.env.PUBLIC_URL}/img/main/icon_link.png`}
                                                style={{maxWidth: '75px'}} />
                                        </ItemCol>
                                        <ItemCol size={5} isFlatUnderLg={true}>
                                            <ItemRow>
                                                <span className='lv2'>Link</span>
                                            </ItemRow>
                                            <ItemRow>
                                                <span className='lv4'>개인 프로젝트, 블로그, 깃허브 링크</span>
                                            </ItemRow>
                                        </ItemCol>
                                    </ItemRow>
                                </MainBtn>
                            </Link>
                        </ItemCol>
                    </ItemRow>
                </ReactWOW>
            </ItemRow>
        </Container>
    )
}

export default Landing