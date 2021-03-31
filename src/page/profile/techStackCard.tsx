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
            <CardHeader className="lv2 cardheader">
                {title}
            </CardHeader>
            <CardBody className="cardbody">
                {
                    cont.map(v => {
                        return (
                        <Fragment>
                            <span className="lv3"><b>{v.title}</b></span><br/>
                            <Row>
                                {
                                    v.cont.map(x => {
                                        return (
                                            <Col xs="4" sm="2" className="text-center">
                                                <Row>
                                                    <Col xs="12">
                                                        <img
                                                            alt="js"
                                                            height="50px"
                                                            src={process.env.PUBLIC_URL+x.img} />
                                                    </Col>
                                                    <Col xs="12">{x.name}<br/>&nbsp;</Col>
                                                </Row>
                                            </Col>)
                                    })
                                }
                            </Row>
                            <Row>
                                <Col xs="12">
                                    {v.desc}<br/>&nbsp;
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