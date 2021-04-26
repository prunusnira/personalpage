import React, {useState} from 'react';
import {Navbar, NavItem, Nav, NavbarBrand, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import "./css/navbar.scss";
import Language from '../tool/language';

interface State {
    isOpen: boolean
}

const FixedTop = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    }

    return (
        <Navbar className="transparent" fixed="top">
            <NavbarBrand></NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href="#profile"
                        className="nav-color">
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#works"
                        className="nav-color">
                        Works
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#link"
                        className="nav-color">
                        Link
                    </NavLink>
                </NavItem>
                <Dropdown nav isOpen={isOpen}>
                    <DropdownToggle nav onClick={toggle}
                        className="nav-color">
                        Language
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            onClick={() => Language.changeLang("ko")}>
                            한국어
                        </DropdownItem>
                        <DropdownItem disabled style={{color:"lightgrey"}}
                            onClick={() => Language.changeLang("jp")}>
                            日本語
                        </DropdownItem>
                        <DropdownItem disabled style={{color:"lightgrey"}}
                            onClick={() => Language.changeLang("en")}>
                            English
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </Navbar>
    )
}

export default FixedTop;