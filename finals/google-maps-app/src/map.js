// Map.js
import React, { useRef, useEffect } from 'react';
//import './Map.css';  Import your external styles for the map here

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ5KWCE6_d2HtRmYCVuba4e_oGvjmtjNs`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Google Maps
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Set your initial center coordinates
        zoom: 8, // Set your initial zoom level
      });

      // You can add additional map configurations or markers here

      // Cleanup function to remove the script
      return () => {
        document.body.removeChild(script);
      };
    };
  }, []);

  return <div className="map" ref={mapRef}></div>;
};

export default Map;