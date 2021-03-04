import React, {Component} from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import "./profile.scss";

interface Props {
    title: string,
    cont: Array<any>
}

class TechStackCard extends Component<Props> {
    render() {
        return (
            <Card className="text techcard">
                <CardHeader className="lv2 profheader">
                    {this.props.title}
                </CardHeader>
                <CardBody>
                    {
                        this.props.cont.map(v => {
                            return (
                                <span className="lv3">
                                    <b>{v.title}</b><br/>
                                    {v.content}<br/>
                                </span>
                            )
                        })
                    }
                </CardBody>
            </Card>
        )
    }
}

export default TechStackCard;