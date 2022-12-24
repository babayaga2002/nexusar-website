import classes from "./CardFive.module.css";
import { Container, Grid} from "@mui/material";

const CardFive= (props) => {
  const { heading, subHeading1} = props;

  return (
    <Grid container>
      <Grid item sx={{alignSelf:"center",justifySelf:"center",display: "grid",paddingBottom:"50px"}} >
        <Container style={{height: "100px"}}></Container>
        <Container sx={{marginRight: "10px"}}>
          <h1 className={classes.bigHeader}>
            {heading}
            <br />
            <span className={classes.subHeading}>{subHeading1}</span>
          </h1>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CardFive;

// style={{ color: "#a1a1a6" }}