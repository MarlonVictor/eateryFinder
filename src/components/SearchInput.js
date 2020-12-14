import React from 'react';


const SearchInput = ({ value, setValue, onKeyPress }) => (
    <div className="flex relative bg-white shadow rounded text-gray-600 w-4/5 px-2 py-1 mb-5">
        <svg className="h-5 sm:h-4 w-5 sm:w-4 mt-1 sm:mt-2" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xml="preserve" width="512px" height="512px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" 
            />
        </svg>

        <input 
            list="options"
            value={value}
            onKeyPress={onKeyPress}
            onChange={e => setValue(e.target.value)}
            type="search" 
            className="flex-1 ml-3 p-1 rounded border-0 text-sm sm:text-base focus:outline-none" 
            placeholder="Procurar restaurantes..."
        />

        <datalist id="options">
            <option>Restaurante</option>
            <option>Rodízio</option>
            <option>Pizzaria</option>
            <option>Churrascaria</option>
            <option>Lanchonete</option>
            <option>Comida Japonesa</option>
            <option>Food Truck</option>
            <option>McDonalds</option>
            <option>Bob's</option>
            <option>Burguer King</option>
        </datalist>
    </div>
)

export default SearchInput;