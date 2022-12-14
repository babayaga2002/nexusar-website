import { Grid } from "@mui/material";
import { screen } from "@testing-library/react";
import classes from "./SolutionHeader.module.css";

const SolutionHeader = (props) => {
  const { name, description, image } = props;

  return (
    <div style={{ overflow: "hidden", textAlign: "center" ,backgroundImage:`url(${image})`,backgroundRepeat:"round",backgroundSize:"contain" }}>
      <Grid container>
        <Grid item xs={1} sm={3}></Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: "center", pb: 6, px: 2 }}>
          <p>{description}</p>
        </Grid>
        <Grid item xs={1} sm={3}></Grid>
      </Grid>
    </div>
  );
};

export default SolutionHeader;
