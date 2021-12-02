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
      {/* <h3>Risk Score Output Screen</h3>
      <RiskScoreAmi /> */}
      <h3>AMI CDS Input Screen</h3>
      <AMICDSInput />
      {/* <h3>Admin Configuration Screen</h3>
      <AMIConfiguration /> */}
    </div>
  );
}

export default ShellComponent;
