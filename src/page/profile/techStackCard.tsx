import React, {Component, Fragment} from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { TechStackInner } from '../../data/TechStackInner';
import "./profile.scss";

interface Props {
    title: string,
    cont: TechStackInner[]
}

const TechStackCard: React.FC<Props> = ({title, cont}) => {
    return (
        <Card className="text techcard">
            <CardHeader className="lv3 cardheader">
                {title}
            </CardHeader>
            <CardBody className="cardbody">
                {
                    cont.map(v => {
                        return (
                        <Fragment>
                            <span className="lv4"><b>{v.title}</b></span><br/>
                            <Row>
                                {
                                    v.cont.map(x => {
                                        return (
                                            <Col xs="6" md="4" lg="3" className="text-center">
                                                <Row>
                                                    <Col xs="2">
                                                        <img
                                                            alt="js"
                                                            height="25px"
                                                            src={process.env.PUBLIC_URL+x.img} />
                                                    </Col>
                                                    <Col xs="10" className="text-left">{x.name}</Col>
                                                </Row>
                                            </Col>)
                                    })
                                }
                            </Row>
                            <Row>
                                <Col xs="12">
                                    {v.desc}
                                    {
                                        (function() {
                                            if(v.desc.length > 0) return (<><br/>&nbsp;</>)
                                        })()
                                    }
                                </Col>
                            </Row>
                        </Fragment>)
                    })
                }
            </CardBody>
        </Card>
    )
}

export default TechStackCard;