import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import L from "leaflet";  // Import Leaflet for map
import "leaflet/dist/leaflet.css";  // Import Leaflet styles

const Location = () => {
  const [locations, setLocations] = useState({});  // Store location data of both users
  const [userLocation, setUserLocation] = useState(null);  // Store the current user's location
  const [userLocationUpdated, setUserLocationUpdated] = useState(false);  // Track if the user has updated location
  const mapContainerRef = useRef(null);  // Create a ref for the map container

  const socket = io("http://localhost:5000");

  // Get current user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ latitude, longitude });
      setUserLocationUpdated(true);

      // Send the location to the server
      socket.emit("update-location", { latitude, longitude });
    });
  }, []);

  // Handle socket connection and location updates
  useEffect(() => {
    socket.on("location-updated", (newLocations) => {
      setLocations(newLocations);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  // Initialize the map when the user location is available
  useEffect(() => {
    if (userLocation && mapContainerRef.current) {
      // Initialize map with the current user's location
      const mapInstance = L.map(mapContainerRef.current, {
        center: [userLocation.latitude, userLocation.longitude],
        zoom: 13
      });

      // Add OpenStreetMap tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapInstance);

      // Update the map only if there are at least 2 locations
      if (Object.keys(locations).length >= 2) {
        const [user1Id, user2Id] = Object.keys(locations);
        const user1 = locations[user1Id];
        const user2 = locations[user2Id];

        // Clear existing layers (for rerendering)
        mapInstance.eachLayer((layer) => {
          if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            mapInstance.removeLayer(layer);
          }
        });

        // Add markers for both users
        const marker1 = L.marker([user1.latitude, user1.longitude]).addTo(mapInstance);
        const marker2 = L.marker([user2.latitude, user2.longitude]).addTo(mapInstance);

        // Draw a polyline (route) between the two users
        const route = L.polyline([[user1.latitude, user1.longitude], [user2.latitude, user2.longitude]], { color: "blue" }).addTo(mapInstance);

        // Calculate distance between the two users
        const distance = mapInstance.distance([user1.latitude, user1.longitude], [user2.latitude, user2.longitude]);
        const distanceInKm = (distance / 1000).toFixed(2);  // Convert to kilometers

        // Bind popups to markers with distance information
        const distancePopup = `Distance: ${distanceInKm} km`;
        marker1.bindPopup(distancePopup).openPopup();
        marker2.bindPopup(distancePopup).openPopup();
      }
    }
  }, [userLocation, locations]);  // Re-run when locations or userLocation changes

  return (
    <div>
      <h1>Real-time Location Map</h1>

      {userLocationUpdated && Object.keys(locations).length >= 2 ? (
        <div 
          ref={mapContainerRef} 
          style={{ width: "100%", height: "500px" }}
        ></div>
      ) : (
        <p>Waiting for another user to share their location...</p>
      )}
    </div>
  );
};

export default Location;
