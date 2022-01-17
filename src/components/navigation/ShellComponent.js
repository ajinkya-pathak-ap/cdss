import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Notification from "../../shared/notification/Notification";

const LazyAmiOutput = React.lazy(() => import("../ami/amioutput/Amioutput"));
const LazyAmiConfig = React.lazy(() => import("../ami/amiconfig/AmiConfig"));
const LazyAmiContriubutors = React.lazy(() =>
  import("../ami/riskscorecontributor/RiskScoreContributors")
);
const LazyAmiChestCare = React.lazy(() =>
  import("../ami/chestpainflowchart/ChestPainFlow")
);

const LazyAmiInput = React.lazy(() => import("../ami/amiinput/AmiInput"));

function ShellComponent(props) {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const snacksBar = (_object) => {
    setNotify({
      isOpen: true,
      message: _object.message,
      type: _object.type,
    });
  };

  return (
    <div className="">
      <Notification notify={notify} setNotify={setNotify} />
      <React.Suspense fallback="Loading...">
        <Routes>
          <Route exact path="/" element={<LazyAmiOutput />} />
          <Route
            path="/config"
            element={<LazyAmiConfig notify={snacksBar} />}
          />
          <Route path="/amioutput" element={<LazyAmiOutput />} />
          <Route path="/contributors" element={<LazyAmiContriubutors />} />
          <Route path="/carepath" element={<LazyAmiChestCare />} />
          <Route path="/amiinput" element={<LazyAmiInput />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default ShellComponent;
