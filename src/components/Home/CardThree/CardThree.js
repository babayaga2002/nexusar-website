import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardThree.module.css";

const CardThree = (props) => {
  const { heading, content } = props;

  return (
    <Grid container>
      <Grid item>
        <Grid item>
          <Container>
              <h3 className={classes.bigHeader}>{heading}</h3>
          </Container>
        </Grid>
        <Grid item >
          <Container sx={{ py: 4 }}>
            <p className={classes.content}>{content}</p>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardThree;
