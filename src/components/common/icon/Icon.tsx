import React from 'react';

import './Icon.scss';

type Placement = 'left' | 'right';

export interface IconProps {
    placement?: Placement;
    spin?: boolean;
}

const Icon: React.FC<IconProps> = ({ placement = 'left', spin = false, children }) => {
    return <span className={`Icon Icon--${placement} ${spin && 'Icon--spin'}`}>{children}</span>;
};

export default Icon;
