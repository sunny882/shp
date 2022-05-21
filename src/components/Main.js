import React from "react";
import Cards from "./Cards";
import Hukamnama from "./Hukamnama";
import PanjTakht from "./PanjTakht";

export default function Main() {
  return (
    <>
      <div className="row">
        <div className="col-md-7 col-sm-12 ">
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <Cards />
          </div>
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <PanjTakht />
          </div>
        </div>

        <div className="col-md-5 col-sm-12">
          <div className="shadow p-3 mb-2 ms-1 bg-body rounded">
            <Hukamnama />
          </div>
        </div>
      </div>
    </>
  );
}
