import React from 'react';

const LargeButton = ({label, classes = ''}) => {
    return (
        <div>
            <button className={`w-full bg-blue-700 rounded-lg px-5 py-2.5 text-white text-lg font-semibold font-outfit capitalize leading-7 tracking-tight mt-6 ${classes}`}>
                {label}
            </button>
        </div>
    );
};

export default LargeButton;