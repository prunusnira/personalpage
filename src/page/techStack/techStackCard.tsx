import React, {Component, Fragment} from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { TechStackInner } from '../../data/TechStackInner';
import "./tech.css";
import TechStackItem from './techStackItem';

interface Props {
    title: string,
    cont: TechStackInner[]
}

const TechStackCard: React.FC<Props> = ({title, cont}) => {
    return (
        <Card className="text techcard" style={{width: '100%'}}>
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
                                                <TechStackItem
                                                    icon={x.img}
                                                    name={x.name}
                                                    desc={x.desc}
                                                />
                                            </Col>)
                                    })
                                }
                            </Row>
                        </Fragment>)
                    })
                }
            </CardBody>
        </Card>
    )
}

export default TechStackCard;