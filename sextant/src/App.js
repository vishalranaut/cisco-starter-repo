import React from "react";
import Banner from "./components/Banner";
import Exhibit from "./components/Exhibit";
import PublicIP from "./components/PublicIP";

function App() {
  return (
    <div>
      <Banner />

      <Exhibit title="Public IP Address">
        <PublicIP />
      </Exhibit>
    </div>
  );
}

export default App;
