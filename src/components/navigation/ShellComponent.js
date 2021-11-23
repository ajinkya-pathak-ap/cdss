import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ModalPopup from "../../shared/dialog/ModalPopup";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function ShellComponent(props) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  function handleAdminNotification() {
    setOpenPopup(true);
  }

  return (
    <div className="top_mt_100">
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <h1>Shell component</h1>
      <button onClick={handleAdminNotification}>Open Dialog</button>
      <ModalPopup
        title="User Requests"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <h1>ChildrenElements</h1>
        <h1>ChildrenElements</h1>
      </ModalPopup>
    </div>
  );
}

export default ShellComponent;
// export default connect(mapStateToProps, mapDispatchToProps)(ShellComponent);

/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} /> */
