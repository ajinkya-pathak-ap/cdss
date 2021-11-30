import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Notification from "../../shared/notification/Notification";
import ModalPopup from "../../shared/dialog/ModalPopup";
import RiskScoreAmi from "../ami/RiskScoreAmi";
import AMICDSInput from "../ami/AMICDSInput";
import AMIConfiguration from "../ami/AMIConfiguraton";

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

  const showSnacksBar = (_object) => {
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
    <div className="top_mt_100">
      {/* <RiskScoreAmi /> */}
      <AMICDSInput />
      {/* <AMIConfiguration /> */}
    </div>
  );
}

export default ShellComponent;
