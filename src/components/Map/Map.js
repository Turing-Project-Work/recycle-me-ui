import React, { useRef, useEffect, useState } from 'react';
import './Map.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1Ijoicm93ZW4wOCIsImEiOiJja3dzaW93MGEwc3E3Mm5xbHhwODl3ZHdjIn0.suCrTYweGk0ASHkCi4rmWg';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-104.99);
  const [lat, setLat] = useState(39.73);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   // When active the map will receive updates to the device's location as it changes.
    //   trackUserLocation: true,
    //   // Draw an arrow next to the location dot to indicate which direction the device is heading.
    //   showUserHeading: true
    //   })
    //   );
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <section className="map-display-container">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </section>
  );
}
