import React, { useState } from 'react';

import LogoImg from './assets/images/Logo.png';

import RestaurantCard from './components/RestaurantCard.js';
import SearchInput from './components/SearchInput.js';


const App = () => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="flex max-h-screen overflow-hidden">
            {/* Aside */}
            <aside className="bg-brown bg-yellow-900 w-24 hidden lg:flex flex-col items-center pt-3" />

            {/* Main */}
            <main className="w-full lg:w-80 xl:w-96 h-screen flex flex-col items-center overflow-y-scroll">

                {/* Logo and Input*/}
                <a href="https://github.com/MarlonVictor/eateryFinder" title="Source Code">
                    <img src={LogoImg} className="w-52 sm:w-60 my-2 cursor-pointer" />
                </a>
                <SearchInput value={inputValue} setValue={setInputValue} />

                {/* Map Button */}
                <button 
                    className='bg-brown bg-yellow-900 hover:bg-yellow-900 text-white text-xs sm:text-base font-bold relative w-4/5 mb-5 p-2 rounded lg:hidden border-b-4 border-yellow-900 hover:border-yellow-800 transition-colors'
                >
                    Abrir o mapa
                    <span className="text-xs absolute top-0 right-0 -mt-4 -mr-4 px-2 py-1 bg-yellow-500 rounded-full">+99</span>
                </button>

                {/* Restaurant List */}
                <div className="flex-1 flex flex-col items-center pr-2">
                    {inputValue.length === 0 && (
                        <RestaurantCard />
                    )}
                </div>
            </main>
        </div>
    )
}

export default App;