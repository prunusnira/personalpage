import React, {Component} from 'react';

class FixedBottom extends Component {
    render() {
        return (
            <footer className="footer"
                style={{
                    position:"fixed",
                    bottom:"10px",
                    right:"10px",
                    textAlign:"right",
                    color: "white",
                    fontSize: "80%"
                }}
            >
                (c) 2020 Prunus Nira<br/>
                Hosted on github.io, Created with ReactJS, styled-components
            </footer>
        )
    }
}

export default FixedBottom;