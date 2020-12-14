import React from 'react';
import ReactStars from 'react-rating-stars-component';


const RestaurantCard = ({ info, onClick }) => {
    const standardImg = 'https://user-images.githubusercontent.com/62356988/101917886-7a28bf00-3ba7-11eb-8711-f7b21ea51b0f.png'

    return (
        <div onClick={onClick} className="bg-white sm:flex mx-auto shadow-lg w-full h-auto min-h-32 md:max-h-44 mb-3 rounded-lg rounded-l-none border-l-4 border-white lg:hover:border-yellow-500 transition cursor-pointer">
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
                alt={info.name}
                src={info.photos ? info.photos[0].getUrl() : standardImg} 
                className="w-full sm:w-1/3 h-32 sm:h-full object-cover rounded-lg rounded-l-none pb-5/6"
            />
        </div>
    )
}

export default RestaurantCard;