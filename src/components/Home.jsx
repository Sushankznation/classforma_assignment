import React from "react";
import Records from "./Records";
import Annotations from "./Annotations";
import ParaGraph from "./ParaGraph";
const Home = () => {
  return (
    <div className="m-5" style={{ backgroundColor: "" }}>
      <div className="row p-5">
        <div className="col-md-3  ">
          <Records />
        </div>
        <div className="col-md-6 ">
          <ParaGraph />
        </div>
        <div className="col-md-3 ">
          <Annotations />
        </div>
      </div>
    </div>
  );
};

export default Home;
