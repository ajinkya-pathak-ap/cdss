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
      <Notification notify={notify} setNotify={setNotify} />
      <Routes>
        <Route
          exact
          path="/"
          element={<AMIConfiguration notify={snacksBar} />}
        />
        <Route exact path="/login" element={<Login notify={snacksBar} />} />
        <Route
          exact
          path="/config"
          element={<AMIConfiguration notify={snacksBar} />}
        />
        <Route
          exact
          path="/amioutput"
          element={<AMIOutput notify={snacksBar} />}
        />
        <Route
          exact
          path="/contributors"
          element={<RiskScoreContributors notify={snacksBar} />}
        />
        <Route
          exact
          path="/amiinput"
          element={<AMICDSInput notify={snacksBar} />}
        />
      </Routes>
    </>
  );
}

export default ShellComponent;
