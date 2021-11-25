import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ModalPopup from "../../shared/dialog/ModalPopup";
import RiskScoreAmi from "../ami/RiskScoreAmi";
import Notification from "../../shared/notification/Notification";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function ShellComponent(props) {
  /***********states/effects************/
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  /************globals*************/

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

  const modalPopup = (
    <>
      <Notification notify={notify} setNotify={setNotify} />
      {/* <ComponentName flashNotification={showSnacksBar} /> */}
      <button onClick={handleAdminNotification}>Open Dialog</button>
      <ModalPopup
        title="Title Goes Here"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <h1>Modal Popup Data Here...</h1>
      </ModalPopup>
    </>
  );

  /************Methods***********/
  function handleAdminNotification() {
    setOpenPopup(true);
  }

  return (
    <div className="top_mt_100">
      <RiskScoreAmi />
      {/* {modalPopup} */}
    </div>
  );
}

export default ShellComponent;
