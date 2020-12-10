import React from 'react';
import ReactStars from 'react-rating-stars-component';


const RestaurantCard = ({ info }) => (
    <div className="bg-white sm:flex mx-auto shadow-lg w-auto h-auto min-h-32 mb-3 rounded-lg rounded-l-none border-l-4 border-white lg:hover:border-yellow-500 transition cursor-pointer">
        <div className="w-full sm:w-2/3 px-4 py-4 bg-white rounded-lg">
        <h3 className="text-gray-800 font-sans font-semibold mr-auto">{info.name}</h3>
            <ReactStars
                isHalf
                count={5}
                size={23}
                value={info.rating}
                edit={false}
            />
            <p className="text-sm md:text-xs text-gray-500 mt-4">{info.vicinity || info.formatted_address}</p>
        </div>
        <img 
            className="w-full sm:w-1/3 h-32 sm:h-full object-cover rounded-lg rounded-l-none pb-5/6"
            src={info.photos ? info.photos[0].getUrl() : 'https://github.com/MarlonVictor/eateryFinder/blob/master/src/assets/images/SmallLogo.png?raw=true'} 
            alt={info.name}
        />
    </div>
)

export default RestaurantCard;