import React from "react";

function LocationInfo({ location }) {
  return (
    <div className="location-info">
      <h2>Location Info</h2>
      <ul>
        {location.map((result, index) => (
          <li key={index}>
            <p>
              <span className="label">Name:</span> {result.display_name}
            </p>
            <p>
              <span className="label">Latitude:</span> {result.lat}
            </p>
            <p>
              <span className="label">Longitude:</span> {result.lon}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocationInfo;
