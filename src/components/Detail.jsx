import React from 'react';

const Detail = ({ value, className = '' }) => {
    return (
        <div>
            <p className={`text-2xl text-indigo-900 ${className}`}>{value}</p>
        </div>
    );
};

export default Detail;
