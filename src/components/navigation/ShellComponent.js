import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Notification from "../../shared/notification/Notification";

// import AMIOutput from "../ami/amioutput/Amioutput";
// import Amiconfig from "../ami/amiconfig/AmiConfig";

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

  const localMode = true;

  return (
    <>
      <div className="">
        <Notification notify={notify} setNotify={setNotify} />
        <React.Suspense fallback="Loading...">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <LazyAmiOutput notify={snacksBar} localMode={localMode} />
              }
            />
            <Route
              path="/config"
              element={
                <LazyAmiConfig notify={snacksBar} localMode={localMode} />
              }
            />
            <Route
              path="/amioutput"
              element={
                <LazyAmiOutput notify={snacksBar} localMode={localMode} />
              }
            />
            <Route
              path="/contributors"
              element={
                <LazyAmiContriubutors
                  notify={snacksBar}
                  localMode={localMode}
                />
              }
            />
            <Route
              path="/carepath"
              element={
                <LazyAmiChestCare notify={snacksBar} localMode={localMode} />
              }
            />
            <Route
              path="/amiinput"
              element={
                <LazyAmiInput notify={snacksBar} localMode={localMode} />
              }
            />
          </Routes>
        </React.Suspense>
      </div>
    </>
  );
}

export default ShellComponent;
