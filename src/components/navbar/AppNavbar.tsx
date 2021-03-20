import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RoutesConfig } from '../../routes/Routes';

import './AppNavbar.scss';

const AppNavbar: React.FC = () => {
    return (
        <Navbar className="AppNavbar" bg="dark" variant="dark">
            <Navbar.Brand href="#home">CCE</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {RoutesConfig.map(route => (
                    <Link
                        className="AppNavbar__link"
                        key={route.id}
                        to={{
                            pathname: route.path as string,
                        }}
                    >
                        {route.name}
                    </Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
