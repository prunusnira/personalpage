import React, {useState} from 'react';

import "./css/navbar.scss";
import Language from '../tool/language';
import { Header } from '../styled/styledOverall';
import { HeaderNav, NavItemX, NavMenu, NavTitle, NavToggle } from '../styled/styledHeader';
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

interface State {
    isOpen: boolean
}

const FixedTop = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (
        <Header>
            <HeaderNav>
                <Navbar className="transparent">
                    <NavTitle>
                        <Link to="/"
                            className="nav-color">
                            Nira
                        </Link>
                    </NavTitle>
                    <NavToggle onClick={toggle}
                            className="nav-color">
                        menu
                    </NavToggle>
                    <NavMenu isToggled={isOpen}>
                        <NavItemX>
                            <Link to="/about"
                                className="nav-color">
                                About
                            </Link>
                        </NavItemX>
                        <NavItemX>
                            <Link to="/project"
                                className="nav-color">
                                Project
                            </Link>
                        </NavItemX>
                        <NavItemX>
                            <Link to="/tech"
                                className="nav-color">
                                Tech
                            </Link>
                        </NavItemX>
                        <NavItemX>
                            <Link to="/link"
                                className="nav-color">
                                Link
                            </Link>
                        </NavItemX>
                    </NavMenu>
                </Navbar>
            </HeaderNav>
        </Header>
    )
}

export default FixedTop;