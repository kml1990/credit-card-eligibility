import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RoutesConfig } from '../../routes/Routes';

import './AppNavbar.scss';

const AppNavbar: React.FC = () => {
    return (
        <Navbar collapseOnSelect className="AppNavbar" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">CCE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center">
                    {RoutesConfig.map(route => {
                        const { id, path, name } = route;
                        if (!name) {
                            return undefined;
                        }
                        return (
                            <Link
                                className="AppNavbar__link"
                                key={id}
                                to={{
                                    pathname: path as string,
                                }}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
