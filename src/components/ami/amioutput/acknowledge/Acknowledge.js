// import React from "react";
// import { Grid, Stack } from "../../../../shared/material/mui";
// import { Link } from "react-router-dom";
import { AcknowledgeStyles, BootstrapButton } from "./AcknowledgeStyles";

// export const Acknowledge = () => {
//   const classes = AcknowledgeStyles();
//   return (
//     <Grid item xs={12} container className={classes.alignRight}>
//       <Stack spacing={2} direction="row" container>
//         <BootstrapButton
//           variant="contained"
//           className={`${classes.buttonColor} ${classes.acknowledgeBtn_1}`}
//         >
//           <Link className={classes.buttonColor} to="">
//             <span className="m-1">Acknowledge(Document Risk Contributors)</span>
//           </Link>
//         </BootstrapButton>
//         <BootstrapButton
//           variant="contained"
//           className={`${classes.buttonColor} ${classes.acknowledgeBtn_2}`}
//         >
//           <Link className={classes.buttonColor} to="">
//             <span className="m-1">Acknowledge</span>
//           </Link>
//         </BootstrapButton>
//         <BootstrapButton variant="contained" className={classes.buttonColor1}>
//           <Link className={classes.buttonColor1} to="/amioutput">
//             <span className="m-1">Close</span>
//           </Link>
//         </BootstrapButton>
//       </Stack>
//     </Grid>
//   );
// };

import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
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

export const Acknowledge = () => {
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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="race">Race</InputLabel>
        <Select
          labelId="race"
          id="demo-multiple-name"
          multiple
          value={personName}
          variant={"standard"}
          onChange={handleChange}
          // input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
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
