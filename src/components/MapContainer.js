import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


export const MapContainer = ({ google, query }) => {
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (query) {
            searchByQuery(query)
        }
    }, [query])

    function searchByQuery(query) {
        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        }

        const service = new google.maps.places.PlacesService(map)

        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(results)
            }
        })
    }

    function searchNearby(map, center) {
        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant']
        }

        const service = new google.maps.places.PlacesService(map)

        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(results)
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
        />
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'

})( MapContainer );