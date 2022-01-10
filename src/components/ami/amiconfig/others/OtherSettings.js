import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Card, CardContent, Typography } from "@material-ui/core";
import { OtherSettingStyles } from "./OtherSettingStyles";

const Othersettings = (props) => {
  const classes = OtherSettingStyles();
  const { configurations } = props.config;

  const label = {
    inputProps: { "aria-label": "Checkbox demo" },
  };

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  const [otherRS, setOtherRS] = useState(true);
  const [otherDefault, setOtherDefault] = useState(true);
  const [otherArr, setOtherArr] = useState([]);

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (configurationsItem.ruleSectionName.toLocaleLowerCase() === "other") {
        if (configurationsItem.rules.length > 0) {
          /**create rules dom here */
          configurationsItem.rules.forEach((ruleItem) => {
            /**declare default & checked */
            setOtherDefault(ruleItem.isDefault);
            setOtherRS(ruleItem.isChecked);
            if (ruleItem.categories.length > 0) {
              ruleItem.categories.forEach((categoryItem, ind) => {
                /**create values categories */
                setOtherArr(categoryItem);
              });
            } else {
              ruleItem.categories = [];
            }
          });
        } else {
        }
      }
    });
  };

  return (
    <Grid item xs={12}>
      <Card className={classes.gridcontainer}>
        <CardContent>
          <Typography className={classes.headerText}>Other Settings</Typography>
          <FormGroup className={`${classes.formgrop} ${classes.headerText}`}>
            <FormControlLabel
              control={
                <Checkbox
                  {...label}
                  defaultChecked={otherRS}
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                      fontSize: "35px",
                    },
                  }}
                />
              }
              label="Share de-identified data and results with Beckman Coulter "
            />
          </FormGroup>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Othersettings;
