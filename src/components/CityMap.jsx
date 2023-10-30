import React from "react";

function CityMap({ mapURL }) {
  return (
    <div className="map-container">
      <h2>City Map</h2>
      <img src={mapURL} alt="City Map" />
    </div>
  );
}

export default CityMap;
