import React, {Component} from 'react';
import {Navbar, NavItem, Nav, NavbarBrand, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import "./css/navbar.scss";
import Language from '../tool/language';

interface State {
    isOpen: boolean
}

class FixedTop extends Component<{}, State> {
    constructor(props:{}) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    state: State = {
        isOpen: false
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar className="fixed-top transparent">
                <NavbarBrand></NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="#landing">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#profile">
                            Profile
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#works">
                            Works
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://arincblossom.wordpress.com" target="_blank">
                            Blog
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.github.com/prunusnira" target="_blank">
                            GitHub
                        </NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={this.state.isOpen}>
                        <DropdownToggle nav onClick={this.toggle}>
                            Language
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => Language.changeLang("ko")}>
                                한국어
                            </DropdownItem>
                            <DropdownItem onClick={() => Language.changeLang("jp")}>
                                日本語
                            </DropdownItem>
                            <DropdownItem onClick={() => Language.changeLang("en")}>
                                English
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default FixedTop;