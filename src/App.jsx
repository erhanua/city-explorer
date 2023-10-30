import "./App.css";
import axios from "axios";
import { useState } from "react";
import CityExplorer from "./components/CityExplorer";
import LocationInfo from "./components/LocationInfo";
import CityMap from "./components/CityMap";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [mapURL, setMapURL] = useState("");

  async function getLocation(event) {
    event.preventDefault();
    console.log("getLocation function work");
    try {
      const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
      const response = await axios.get(API);

      if (response.data && response.data.length > 0) {
        setLocation(response.data);
        setError("");
        const latitude = response.data[0].lat;
        const longitude = response.data[0].lon;
        const mapURL = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${latitude},${longitude}&zoom=16&markers=${latitude},${longitude}`;
        setMapURL(mapURL);
      } else {
        setError("Location not found");
        setLocation([]);
      }
    } catch (error) {
      setError("An error occurred while fetching data");
      setLocation([]);
    }
  }

  return (
    <div className="App">
      <CityExplorer setSearch={setSearch} getLocation={getLocation} />
      {error && <p className="error">{error}</p>}
      {location.length > 0 && <LocationInfo location={location} />}
      {mapURL && <CityMap mapURL={mapURL} />}
    </div>
  );
}

export default App;
