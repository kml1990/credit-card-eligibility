import React from 'react';
import Button from '../common/button/Button';

import './Home.scss';

const Home: React.FC = () => {
    const onClicked = () => {};

    return (
        <div className="Home">
            <Button onClicked={onClicked} text="Button" />
        </div>
    );
};

export default Home;
