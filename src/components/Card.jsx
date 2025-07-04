import React from 'react';

const Card = ({ label, value }) => {
    return (
        <div className="bg-indigo-500 shadow-md hover:bg-indigo-500/80 p-4 rounded-lg w-[200px] transition-all duration-100">
            <label className="text-white/60">{label}</label>
            <p className="text-2xl text-white/80">{value}</p>
        </div>
    );
};

export default Card;
