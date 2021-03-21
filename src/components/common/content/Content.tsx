import React from 'react';

import './Content.scss';

const Content: React.FC = ({ children }) => {
    return <div className="Content">{children}</div>;
};

export default Content;
