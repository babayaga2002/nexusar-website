import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardSix.module.css";

const CardSix = (props) => {
  const { heading, content } = props;

  return (
    <Grid container>
      <Grid item>
        <Container>
          <h3 className={classes.bigHeader}>
            {heading}
            <br />
            <span>{content}</span>
          </h3>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CardSix;
