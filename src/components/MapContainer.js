import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants } from '../redux/modules/restaurants';


export const MapContainer = ({ google, query }) => {
    const dispatch = useDispatch()
    const [map, setMap] = useState(null)

    const { restaurants } = useSelector(state => state.restaurants)

    useEffect(() => {
        if (query) {
            searchByQuery(query)
        }
    }, [query])

    const searchByQuery = useCallback(
        (map, query) => {
            const service = new google.maps.places.PlacesService(map)

            const request = {
                location: map.center,
                radius: '200',
                type: ['restaurant'],
                query
            }
    
            service.textSearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    dispatch(setRestaurants(results))
                }
            })
        }, [dispatch, google]
    )

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map)

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        }

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results))
            }
        })
    }

    function onMapReady(_, map) {
        setMap(map)
        searchNearby(map, map.center)
    }


    return (
        <Map
            google={google}
            centerAroundCurrentLocation
            onReady={onMapReady}
            onRecenter={onMapReady}
            zoom={13}
            onClick={() => console.log(query)}
        >
            {restaurants.map(item => (
                <Marker 
                    key={item.place_id}
                    name={item.name}
                    position={{
                        lat: item.geometry.location.lat(),
                        lng: item.geometry.location.lng()
                    }}
                />
            ))}
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'

})( MapContainer );