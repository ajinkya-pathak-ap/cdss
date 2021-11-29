import { React } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "../../shared/material/mui";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    // position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    // position: "absolute",
    // left: "0px",
    paddingRight: "0px",
    color: "#000",
  },
  dialogAction: {
    // backgroundColor: "#3f51b5",
  },
}));

function ModalPopup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      // maxWidth="md"
      // scroll="paper"
      // aria-labelledby="scroll-dialog-title"
      // aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => setOpenPopup(false)}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalPopup;
