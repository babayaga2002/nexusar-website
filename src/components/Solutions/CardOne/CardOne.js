import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardOne.module.css";

const CardOne = (props) => {
  const { heading, highlights, content } = props;

  return (
    <section className={classes.card}>
      <div
        className={classes.image}
      >
        <img src="https://drive.google.com/uc?id=1w5lqqHIee2uIaO1jo4TR0IwnYfuRtIBp"></img>
      </div>
      <div className={classes.content}>
        <h3 className={classes.bigHeader}>{heading}</h3>
        <p className={classes.text}>{content}</p>
      </div>
    </section>
  );
};

export default CardOne;
