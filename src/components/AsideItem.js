import React from 'react';


const AsideItem = ({ title, image }) => (
    <div className="h-16 w-16 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl" />

        <div className="absolute inset-0 transform hover:-translate-y-1 transition duration-300">
            <img className="relative rounded-lg shadow-2xl h-full w-full object-cover" src={image} />

            <small className="opacity-0 hover:opacity-100 bg-shadow rounded-lg absolute top-0 bottom-0 w-full p-1 text-white font-xs font-bold from-gray-900 transition">{title}</small>
        </div>
    </div>
)

export default AsideItem;