import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardNine.module.css";
const CardTwo = (props) => {
  const { heading, content, image,number } = props;

  return (
    <Grid container className={classes.card}>
      <Grid item md={7} sx={{ alignItems: "center", display: "flex" }}>
        <img alt="card-2" className={classes.image} src={image} />
      </Grid>
      <Grid item md={5}>
        <Container style={{margin:0}} className={classes.box}>
          <h2 className={classes.bigHeader}>{heading}</h2>
        </Container>
        <Container style={{margin:0,paddingTop: "18px"}} className={classes.box}>
          <p className={classes.content}>{content}</p>
        </Container>
        <Container style={{padding:0, margin:0}}>
          <h2 className={classes.bottom}>{number}</h2>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CardTwo;
