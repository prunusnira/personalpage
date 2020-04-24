import React, {Component} from 'react';
import {Container} from 'reactstrap';

import Landing from './landing/landing';
import FixedTop from './fixedTop';
import FixedBottom from './fixedBottom';
import About from './profile/about';
import ProjectPage from './project/project';
import Experience from './experience';

class Index extends Component {
    render() {
        return (
            <Container fluid>
                <FixedTop />
                <Landing />
                <About />
                <ProjectPage />
                <Experience />
                <FixedBottom />
            </Container>
        )
    }
}

export default Index;