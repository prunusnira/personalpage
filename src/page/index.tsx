import React, {Component, Fragment} from 'react';

import Landing from './landing/landing';
import FixedTop from './fixedTop';
import FixedBottom from './fixedBottom';
import About from './profile/profile';
import ProjectPage from './project/project';
import Experience from './experience';
import Link from './link/link';

const Index = () => {
    return (
        <Fragment>
            <FixedTop />
            <Landing />
            <About />
            <ProjectPage />
            <Experience />
            <Link />
            <FixedBottom />
        </Fragment>
    );
}

export default Index;