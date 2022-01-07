import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Notification from "../../shared/notification/Notification";
import AMIOutput from "../ami/AMIOutput";
import AMICDSInput from "../ami/AMICDSInput";
import AMIConfiguration from "../ami/AMIConfiguraton";
import Login from "../common/Login";
import RiskScoreContributors from "../ami/RiskScoreContributors";
import ChestPainFlowchart from "../ami/ChestPainFlowchart";

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AMIConfiguration notify={snacksBar} localMode={localMode} />
            }
          />
          <Route exact path="/login" element={<Login notify={snacksBar} />} />
          <Route
            path="/config"
            element={
              <AMIConfiguration notify={snacksBar} localMode={localMode} />
            }
          />
          <Route
            path="/amioutput"
            element={<AMIOutput notify={snacksBar} localMode={localMode} />}
          />
          <Route
            path="/contributors"
            element={
              <RiskScoreContributors notify={snacksBar} localMode={localMode} />
            }
          />
          <Route
            path="/amiinput"
            element={<AMICDSInput notify={snacksBar} localMode={localMode} />}
          />
          <Route
            path="/carepath"
            element={
              <ChestPainFlowchart notify={snacksBar} localMode={localMode} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default ShellComponent;
