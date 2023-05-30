import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./app.css";
import authService from "./Map/auth.service";
import { Map } from "./Map/Map";
import { Overspeed } from "./Map/Overspeed";
import { MyComponent } from "./data/test3";
// export const App = () => {
//   return <Map />;
// };
function App() {
  let [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/map" element={<Map />} />
          <Route
            path="/overspeed"
            element={
              <MyComponent
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
