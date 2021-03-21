import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import Icon from '../icon/Icon';

const Loader: React.FC = () => {
    return (
        <Icon spin>
            <FaSpinner />
        </Icon>
    );
};

export default Loader;
