import React, {Component, Fragment} from 'react';
import { Button } from 'reactstrap';

interface Props {
    catSize: number,
    catCurNum: number,
    updateCatNum: (i: number) => void
}

class ProjectSelector extends Component<Props> {
    render() {
        const self = this;
        const jsxObj = [];

        for(let i = 0; i < self.props.catSize; i++) {
            if(self.props.catCurNum == i) {
                // 색상이 들어간 버튼
                jsxObj.push(<Button className="btn-sm btn-warning btn-selector">&nbsp;</Button>);
            }
            else {
                // 그냥 버튼
                jsxObj.push(<Button className="btn-sm btn-selector" onClick={() => self.props.updateCatNum(i)}>&nbsp;</Button>);
            }
        }
        return (
            <Fragment>
                {jsxObj}
            </Fragment>
        )
    }
}

export default ProjectSelector;