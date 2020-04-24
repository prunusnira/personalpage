import React, {Component} from 'react';

class FixedBottom extends Component {
    render() {
        return (
            <footer style={{
                position:"fixed",
                bottom:"10px",
                right:"10px",
                textAlign:"right"
            }}>
                (c) 2020 Prunus Nira<br/>
                Twitter / GitHub / LinkedIn / Blog
            </footer>
        )
    }
}

export default FixedBottom;