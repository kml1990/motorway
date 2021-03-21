import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesConfig } from '../../../routes/Routes';

import './Navbar.scss';

const Navbar: React.FC = () => {
    return (
        <header className="Navbar">
            <nav className="Navbar__nav">
                {RoutesConfig.map(route => (
                    <Link
                        className="Navbar__link"
                        key={route.id}
                        to={{
                            pathname: route.path as string,
                        }}
                    >
                        {route.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
