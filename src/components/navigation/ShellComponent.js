import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Notification from "../../shared/notification/Notification";
import ModalPopup from "../../shared/dialog/ModalPopup";

import AMIOutput from "../ami/AMIOutput";
import AMICDSInput from "../ami/AMICDSInput";
import AMIConfiguration from "../ami/AMIConfiguraton";
import Login from "../common/Login";
import RiskScoreContributors from "../ami/RiskScoreContributors";
import ChestPainFlowchart from "../ami/ChestPainFlowchart";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function ShellComponent(props) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

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

  function handlePopup() {
    setOpenPopup(true);
  }

  return (
    <>
      <div className="top_mt_100">
        <Notification notify={notify} setNotify={setNotify} />
        <Routes>
          <Route
            exact
            path="/"
            element={<AMIConfiguration notify={snacksBar} />}
          />
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
