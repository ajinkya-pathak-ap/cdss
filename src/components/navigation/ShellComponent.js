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

  return (
    <>
      <div className="top_mt_100">
        <Notification notify={notify} setNotify={setNotify} />
        <Routes>
          <Route exact path="/" element={<AMIOutput notify={snacksBar} />} />
          <Route exact path="/login" element={<Login notify={snacksBar} />} />
          <Route
            path="/config"
            element={<AMIConfiguration notify={snacksBar} />}
          />
          <Route path="/amioutput" element={<AMIOutput notify={snacksBar} />} />
          <Route
            path="/contributors"
            element={<RiskScoreContributors notify={snacksBar} />}
          />
          <Route
            path="/amiinput"
            element={<AMICDSInput notify={snacksBar} />}
          />
          <Route
            path="/carepath"
            element={<ChestPainFlowchart notify={snacksBar} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default ShellComponent;
