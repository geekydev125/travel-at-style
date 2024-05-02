"use client"
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const center = {
    lat: 40.71042,
    lng: -74.0090019
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string
    })

    const mapStyles = [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#202c3e"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                },
                {
                    "weight": "1.39"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "0.96"
                },
                {
                    "saturation": "9"
                },
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": "9"
                },
                {
                    "color": "#29446b"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#193a55"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ];

    return (
        <section>
            {
                isLoaded
                    ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: '100%',
                                height: '300px',
                                zIndex: 0,
                            }}
                            center={center}
                            zoom={15}
                            options={{
                                controlSize: 24,
                                disableDefaultUI: true,
                                maxZoom: 20,
                                minZoom: 10,
                                scrollwheel: true,
                                styles: mapStyles,

                            }}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                            <MarkerF
                                position={center}
                                options={{
                                    icon: '/assets/img/logo/google-map-marker.png',
                                    title: 'Travel @ Style',
                                }}
                            />
                        </GoogleMap>
                    ) : (
                        <div className='px-2 background-blue-radial-gradient d-flex justify-content-center align-items-center' style={{ height: '300px' }}>
                            <p className='display-3 me-3 text-custom-light'>Loading Map...</p>
                            <img src='/assets/img/logo/google-map-marker.png' alt='Travel @ Style marker' className='img-fluid' />
                        </div>
                    )
            }
        </section>
    )
}

export default Map