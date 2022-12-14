import classes from "./SolutionDesc.module.css";
import { Container, Grid} from "@mui/material";

const SolutionDesc = (props) => {
  const { heading, subHeading, image } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={6} lg={6} sx={{alignSelf:"center",justifySelf:"center"}} >
        <Container sx={{}}>
          <h1 className={classes.bigHeader}>
            {heading}.
            <br /><span style={{ color: "#a1a1a6" }}>{subHeading}</span>.
          </h1>
        </Container>
      </Grid>
      <Grid item xs={12} sm={6} lg={6} >
        <Container sx={{overflow: "hidden",alignSelf:"center",justifySelf:"center"}}>
          <img
            className={classes.image}
            alt="hero"
            src={image}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default SolutionDesc;

// style={{ color: "#a1a1a6" }}