// import { React, useState, useEffect } from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Stack,
// } from "../../../../shared/material/mui";
// import { Link } from "react-router-dom";
// import {
//   BootstrapButton,
//   RiskContributorStyles,
// } from "./RiskscoreContributorStyles";
// import "../styles.css";
// import { utils } from "../AmiOutputUtils";

// const RiskscoreContributors = (props) => {
//   const classes = RiskContributorStyles();
//   const { positiveContributors, negativeContributors } = props.result;

//   return (
//     <Grid container item xs={12}>
//       <Grid item xs={7} lg={8} className={classes.gridcontainer2}>
//         <Card className={classes.gridcontainer}>
//           <CardContent>
//             <Typography className={`${classes.headerText}`}>
//               Risk Score Contributors
//             </Typography>
//             <Typography className={`${classes.headerTextThree}`}>
//               Factors that increase the 30-day MACE risk
//               {positiveContributors
//                 ? utils.iterateOrderedList(
//                     utils.splitString(positiveContributors, ",")
//                   )
//                 : ""}
//             </Typography>
//             <Typography className={`${classes.headerTextThree}`}>
//               Factors that decrease the 30-day MACE risk
//               {negativeContributors
//                 ? utils.iterateOrderedList(
//                     utils.splitString(negativeContributors, ",")
//                   )
//                 : ""}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       <Grid
//         container
//         item
//         xs={5}
//         lg={4}
//         className={`${classes.gridcontainer2} ${classes.moreInfo}`}
//         direction="column"
//       >
//         <Stack spacing={4} direction="row">
//           <BootstrapButton
//             variant="contained"
//             className={classes.buttonColor}
//             style={{
//               marginBottom: "40px",
//             }}
//           >
//             <Link
//               className={`${classes.buttonColor} ${classes.moreInfoBtn_1}`}
//               to="/contributors"
//             >
//               <span className="m-2">More Info</span>
//             </Link>
//             <Link
//               className={`${classes.buttonColor} ${classes.moreInfoBtn_2}`}
//               to="/contributors"
//             >
//               <span className="m-2">More</span>
//             </Link>
//           </BootstrapButton>
//         </Stack>
//       </Grid>
//     </Grid>
//   );
// };

// export default RiskscoreContributors;
import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const RiskscoreContributors = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default RiskscoreContributors;
