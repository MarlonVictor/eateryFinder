import React, { useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


export const MapContainer = ({ google }) => {
    return (
        <Map
            google={google}
            centerAroundCurrentLocation
        />
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'

})( MapContainer );