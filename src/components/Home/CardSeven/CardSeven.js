import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardSeven.module.css";
const CardSeven = (props) => {
  const { number1, heading1, content1, number2, heading2, content2 } = props;

  return (
    <Grid container className={classes.card} spacing={2}>
      {!number2&&(
        <Grid item style={{ padding: 0 }} md={6}>
        <Container style={{margin:0}} className={classes.box2} >
          <h2 className={classes.top3}>{number1}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <h2 className={classes.bigHeader}>{heading1}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <p className={classes.content}>{content1}</p>
        </Container>
      </Grid>
      )}
      {number2&&(<Grid item style={{ padding: 0 }} md={6}>
        <Container style={{margin: 0}} className={classes.box2} >
          <h2 className={classes.top1}>{number1}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <h2 className={classes.bigHeader}>{heading1}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <p className={classes.content}>{content1}</p>
        </Container>
      </Grid>)}
      {number2&&(<Grid item style={{ padding: 0 }} md={6}>
        <Container style={{margin: 0}} className={classes.box2} >
          <h2 className={classes.top2}>{number2}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <h2 className={classes.bigHeader}>{heading2}</h2>
        </Container>
        <Container style={{margin: 0}} className={classes.box2}>
          <p className={classes.content}>{content2}</p>
        </Container>
      </Grid>)}
    </Grid>
  );
};

export default CardSeven;
