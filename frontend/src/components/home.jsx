import React from "react";
import { Link } from "react-router-dom";  


const Home = () => {
  return (
    <div>
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor:'white',
    }}>
      <title>Head</title>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/audit">Audit</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/planning">Contact Us</Link>
        </li>
        <li>
          {/* */}
          <Link to="/configuration">Configuration</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};
  
export default Home;