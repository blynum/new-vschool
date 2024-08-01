import React from 'react';

const Color = ({ color }) => {
    const style = {
        backgroundColor: color,
        width: '200px',
        height: '200px',
        margin: '20px',
        cursor: 'pointer',
    };

    return <div className="color" style={style}></div>;
};

export default Color;
