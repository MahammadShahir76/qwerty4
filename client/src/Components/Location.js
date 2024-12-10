import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import L from 'leaflet';  // Import Leaflet for map
import 'leaflet/dist/leaflet.css';  // Import Leaflet styles
import { Link } from 'react-router-dom';

// Connect to the backend server
const socket = io('http://localhost:5000');

function Location({ tabName }) {
  const [location, setLocation] = useState(null);
  const [locations, setLocations] = useState({});
  const [distance, setDistance] = useState(null);
  const mapRef = useRef(null);  // Reference for the map container
  const mapInstance = useRef(null);  // Reference for the Leaflet map instance

  // Get the current user's location
  useEffect(() => {
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const newLocation = { lat: latitude, lng: longitude };
            setLocation(newLocation);
            socket.emit('update-location', newLocation); // Emit location to the server
          },
          (error) => console.error('Error getting location:', error),
          { enableHighAccuracy: true }
        );
      } else {
        alert('Geolocation is not supported by your browser.');
      }
    };
    getCurrentLocation();
  }, []);

  // Listen for updated locations from the server
  useEffect(() => {
    socket.on('locations-updated', (updatedLocations) => {
      setLocations(updatedLocations); // Update the list of all users' locations
    });

    return () => {
      socket.off('locations-updated');
    };
  }, []);

  // Calculate the distance between two points using the Haversine formula
  const calculateDistance = (loc1, loc2) => {
    const toRadians = (deg) => (deg * Math.PI) / 180;
    const R = 6371; // Radius of Earth in km
    const dLat = toRadians(loc2.lat - loc1.lat);
    const dLng = toRadians(loc2.lng - loc1.lng);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRadians(loc1.lat)) *
        Math.cos(toRadians(loc2.lat)) *
        Math.sin(dLng / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2); // Distance in km
  };

  // Compute the distance when locations change
  useEffect(() => {
    const locationValues = Object.values(locations);
    if (locationValues.length === 2) {
      const [loc1, loc2] = locationValues;
      setDistance(calculateDistance(loc1, loc2));
    }
  }, [locations]);

  // Initialize the map when the component is mounted
  useEffect(() => {
    if (location && !mapInstance.current) {
      const map = L.map(mapRef.current, {
        center: [location.lat, location.lng], // Start map at current user's location
        zoom: 13,
      });

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Add marker for the current user's location
      L.marker([location.lat, location.lng])
        .addTo(map)
        .bindPopup('Your Location')
        .openPopup();

      mapInstance.current = map; // Store the map instance

      // If there are at least two locations, add markers and a line between them
      if (Object.keys(locations).length >= 2) {
        const locationArray = Object.values(locations);
        const [user1, user2] = locationArray;

        // Add markers for the other user's location
        L.marker([user1.lat, user1.lng])
          .addTo(map)
          .bindPopup('User 1')
          .openPopup();

        L.marker([user2.lat, user2.lng])
          .addTo(map)
          .bindPopup('User 2')
          .openPopup();

        // Draw a polyline between the two users
        L.polyline(
          [
            [user1.lat, user1.lng],
            [user2.lat, user2.lng],
          ],
          { color: 'blue' }
        ).addTo(map);
      }
    }

    // Clean up map instance on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [location, locations]);  // Only re-run if the location or locations change

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{tabName}: Live Location Sharing</h1>
      {location ? (
        <div>
          <h2>Your Location:</h2>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      ) : (
        <p>Fetching your location...</p>
      )}

      <h2>Other Users' Locations:</h2>
      <ul>
        {Object.entries(locations)
          .filter(([id]) => id !== socket.id) // Exclude current user's location
          .map(([id, loc]) => (
            <li key={id}>
              User {id}: Lat: {loc.lat}, Lng: {loc.lng}
            </li>
          ))}
      </ul>

      {distance && (
        <div>
          <h2>Live Distance: {distance} km</h2>
        </div>
      )}

      {/* Map container */}
      <div
        ref={mapRef}
        style={{ width: '100%', height: '500px', marginTop: '30px' }}
      ></div>
      <Link to="/add-Review">Close</Link><br/>
      <Link to="/UPI">EndTask</Link>
    </div>
  );
}

export default Location;