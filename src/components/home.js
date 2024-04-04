import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./shared/navbar";

function Home() {
  const location = useLocation();

  return (
    <div className="homepage">
      <Navbar username={location.state.id} />
      <h1>Hello {location.state.id} and welcome to the home</h1>
    </div>
  );
}

export default Home;
