import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const name = "Anna";
  const myCity = "Nairobi";
  // update the JSX being returned!
  return <div id="home">
    <h1 style={{ color: 'redbrick' }}>
      "{name} is a Web developer from {myCity}"
    </h1>
  </div>;
}

export default Home;
