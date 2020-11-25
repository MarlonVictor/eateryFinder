import React from 'react';
import ReactStars from 'react-rating-stars-component';


const RestaurantCard = () => (
    <div className="bg-white sm:flex mx-auto shadow-lg w-auto h-auto min-h-32 mb-3 rounded-lg rounded-l-none border-l-4 border-white lg:hover:border-yellow-500 transition cursor-pointer">
        <div className="w-full sm:w-2/3 px-4 py-4 bg-white rounded-lg">
            <h3 className="text-gray-800 font-sans font-semibold mr-auto">Restaurante Rei Do Peixe</h3>
            <ReactStars
                isHalf
                count={5}
                size={23}
                value={4.4}
                edit={false}
            />
            <p className="text-sm md:text-xs text-gray-500 mt-4">Av. Dep. Ulisses Guimarães, 467-461 - Jardim Nova California, São João de Meriti - RJ, 25571-250</p>
        </div>
        <img 
            className="w-full sm:w-1/3 h-32 sm:h-full object-cover rounded-lg rounded-l-none pb-5/6"
            src="https://lh5.googleusercontent.com/p/AF1QipNWkOa0IUKk7N4MtBc06zti-q0B4NYA3Cay1lJi=w230-h216-p-k-no" 
            alt="Restaurant"
        />
    </div>
)

export default RestaurantCard;