import React, {Component} from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

interface Props {
    title: string,
    c1t: string,
    c1c: string,
    c2t: string,
    c2c: string
}

class TechStackCard extends Component<Props> {
    render() {
        return (
            <Card className="text">
                <CardHeader className="lv2">
                    {this.props.title}
                </CardHeader>
                <CardBody>
                    <span className="lv3"><b>{this.props.c1t}</b><br/>
                        {this.props.c1c}
                    </span><br/>
                    <span className="lv3"><b>{this.props.c2t}</b><br/>
                        {this.props.c2c}
                    </span>
                </CardBody>
            </Card>
        )
    }
}

export default TechStackCard;