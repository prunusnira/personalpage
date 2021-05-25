import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './landing/landing'
import FixedTop from './fixedTop'
import FixedBottom from './fixedBottom'
import About from './about/about'
import ProjectPage from './project/project'
import Link from './link/link'
import TechStack from './techStack/techStack'
import { Center, OuterBox } from '../styled/styledOverall'

const Index = () => {
    return (
        <BrowserRouter>
            <OuterBox className='bgcolor'>
                <FixedTop />
                <Center>
                    <Route exact path='/' component={Landing} />
                    <Route path='/about' component={About} />
                    <Route path='/tech' component={TechStack} />
                    <Route path='/project' component={ProjectPage} />
                    <Route path='/link' component={Link} />
                </Center>
                <FixedBottom />
            </OuterBox>
        </BrowserRouter>
    );
}

export default Index;