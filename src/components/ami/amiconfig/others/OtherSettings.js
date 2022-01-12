import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
} from "../../../../shared/material/mui";

import FormGroup from "@mui/material/FormGroup";
import { OtherSettingStyles } from "./OtherSettingStyles";
import { utils } from "../AmiConfigUtils";

const Othersettings = (props) => {
  const classes = OtherSettingStyles();
  const { configurations } = props.config;

  useEffect(() => {
    mapJsonResponse(configurations);
  }, []);

  const [otherRS, setOtherRS] = useState(true);
  const [otherDefault, setOtherDefault] = useState(true);
  const [otherArr, setOtherArr] = useState([]);
  const [othersRule, setOthersRule] = useState({});

  const mapJsonResponse = (_obj) => {
    _obj.forEach((configurationsItem, index) => {
      if (configurationsItem.ruleSectionName.toLocaleLowerCase() === "other") {
        setOthersRule(configurationsItem);
        if (configurationsItem.rules.length > 0) {
          /**non-emprty rule */
          configurationsItem.rules.forEach((ruleItem) => {
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
          setOtherDefault(true);
          setOtherRS(true);
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
                  {...utils.properties.label}
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
