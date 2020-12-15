import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { setRestaurants, setRestaurant } from '../redux/modules/restaurants';


export const MapContainer = (props) => {
    const { google, placeId, query='restaurante' } = props
    const dispatch = useDispatch()
    const [map, setMap] = useState('')

    const { restaurants } = useSelector(state => state.restaurants)

    const searchByQuery = useCallback(
        (map, query) => {
            const service = new google.maps.places.PlacesService(map)
            dispatch(setRestaurants([]))

            const request = {
                location: map.center,
                radius: '500',
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

    useEffect(() => {
        if (query) {
            searchByQuery(map, query)
        }
    }, [searchByQuery, query, map])

    useEffect(() => {
        if (placeId) {
            getRestaurantsDetails(placeId)
        }
    }, [placeId])

    function getRestaurantsDetails(placeId) {
        const service = new google.maps.places.PlacesService(map)

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        }

        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place))
            }
        })
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map)

        const request = {
            location: center,
            radius: '15000',
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
            zoom={15}
            {...props}
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