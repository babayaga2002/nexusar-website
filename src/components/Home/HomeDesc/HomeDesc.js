import classes from "./HomeDesc.module.css";
import { Container, Grid} from "@mui/material";

const HomeDesc = (props) => {
  const { heading, subHeading1,subHeading2} = props;

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

export default HomeDesc;

// style={{ color: "#a1a1a6" }}