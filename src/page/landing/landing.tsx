import React from 'react'
import ReactWOW from 'react-wow'
import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Button, Container, ItemCol, ItemRow } from '../../styled/styledCommon'

const Landing = () => {
    return (
        <Container className='bgcolor' id="landing">
            <ItemRow className="paragraph">
                <ReactWOW animation="fadeInDown" delay="0.5s">
                    <ItemCol className="text text-left" size={10}>
                        <span className="lv1">Tae Jun Kang</span><br/>
                        <span className="lv4">developer</span><br/>
                        <span className="lv4">contact: tjkang0207@gmail.com</span>
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow>
                <ReactWOW animation="fadeInDown" delay="1s">
                    <ItemCol className="text text-center arrow-down-size" size={10}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </ItemCol>
                </ReactWOW>
            </ItemRow>
            <ItemRow>
                <ReactWOW animation="fadeInUp" delay="1.5s">
                    <ItemRow>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/about' style={{width: '100%'}}>
                                <Button style={{width: '100%'}}>About</Button>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/tech' style={{width: '100%'}}>
                                <Button style={{width: '100%'}}>Tech Stack</Button>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/project' style={{width: '100%'}}>
                                <Button style={{width: '100%'}}>Projects</Button>
                            </Link>
                        </ItemCol>
                        <ItemCol isFlatUnderLg={true} size={5}>
                            <Link to='/link' style={{width: '100%'}}>
                                <Button style={{width: '100%'}}>Link</Button>
                            </Link>
                        </ItemCol>
                    </ItemRow>
                </ReactWOW>
            </ItemRow>
        </Container>
    )
}

export default Landing