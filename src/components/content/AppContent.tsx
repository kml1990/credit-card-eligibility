import React from 'react';
import Container from 'react-bootstrap/Container';

import './AppContent.scss';

const AppContent: React.FC = ({ children }) => {
    return <Container className="AppContent">{children}</Container>;
};

export default AppContent;
