import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import LogoImg from './assets/images/Logo.png';

import AsideItem from './components/AsideItem.js';
import MapContainer from './components/MapContainer.js';
import ModalUi from './components/ModalUi.js';
import RestaurantCard from './components/RestaurantCard.js';
import SearchInput from './components/SearchInput.js';


const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [query, setQuery] = useState('')
    const [modalOpened, setModalOpened] = useState(false)

    const { restaurants } = useSelector(state => state.restaurants)

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue)
        }
    }

    return (
        <div className="flex max-h-screen max-w-screen overflow-hidden">
            {/* Aside */}
            <aside className="bg-brown bg-yellow-900 w-24 hidden lg:flex flex-col items-center pt-3 z-20">
                {restaurants.slice(0,7).map(restaurants => {
                   <AsideItem 
                        key={restaurants.place_id}
                        title={restaurants.name}
                        img={restaurants.photos ? restaurants.photos[0].getUrl() : 'https://github.com/MarlonVictor/eateryFinder/blob/master/src/assets/images/SmallLogo.png?raw=true'} 
                    />
                })}
            </aside>

            {/* Main */}
            <main className="bg-light-gray w-full lg:w-80 xl:w-96 h-screen flex flex-col items-center overflow-y-scroll z-20">

                {/* Logo and Input*/}
                <a href="https://github.com/MarlonVictor/eateryFinder" title="Source Code">
                    <img src={LogoImg} className="w-52 sm:w-60 my-2 cursor-pointer" />
                </a>
                <SearchInput value={inputValue} setValue={setInputValue} onKeyPress={handleKeyPress}/>

                {/* Map Button */}
                <button 
                    className='bg-brown bg-yellow-900 hover:bg-yellow-900 text-white text-xs sm:text-base font-bold relative w-4/5 mb-5 p-2 rounded lg:hidden border-b-4 border-yellow-900 hover:border-yellow-800 transition-colors'
                >
                    Abrir o mapa
                    <span className="text-xs absolute top-0 right-0 -mt-4 -mr-4 px-2 py-1 bg-yellow-500 rounded-full">+99</span>
                </button>

                {/* Restaurant List */}
                <div className="flex-1 flex flex-col items-center pr-2">
                    {restaurants.map(restaurants => 
                        <RestaurantCard info={restaurants} key={restaurants.place_id} />
                    )}
                </div>
            </main>

            <ModalUi 
                title="Restaurante Rei Do Peixe"
                number="(415) 772-5000"
                adress="Av. Dep. Ulisses Guimarães, 467-461 - Jardim Nova California, São João de Meriti - RJ, 25571-250"
                opening_hours={true}
                open={modalOpened} 
                onClose={() => setModalOpened(!modalOpened)} 
            />

            {/* Map */}
            <div className="absolute left-0 w-full h-full z-10">
                <MapContainer query={query} />
            </div>
        </div>
    )
}

export default App;