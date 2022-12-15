import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardFive.module.css";

const CardFive = (props) => {
  const {
    heading1,
    content1,
    heading2,
    highlights2,
    content2,
    heading3,
    content3,
    image1,
    image2,
    image3,
  } = props;

  return (
    <section className={classes.card}>
      <Grid container className={classes.bigTop} sx={{mb: 2}}>
        <h1>Related Needs</h1>
      </Grid>
      <Container className={classes.content}>
        <Grid
          container
          spacing={4}
          style={{ justifyContent: "center" }}
          sx={{ pb: 6 }}
        >
          <Grid item xs={12} sm={8} lg={4}>
            <Grid container spacing={4} sx={{ my: 2 }}>
              <Grid item sx={{ mx: 2 }}>
                <Container>
                  <img alt="card-2" className={classes.image} src={image1} />
                </Container>
              </Grid>
              <Grid item sx={{ mr: 2 }}>
                <Container>
                  <h2 className={classes.bigHeader}>{heading1}</h2>
                </Container>
              </Grid>
              <Grid item sx={{ mx: 2 }}>
                <p style={{ fontSize: "18px", color: "#636366" }}>{content1}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <Grid container spacing={4} sx={{ my: 2 }}>
              <Grid item sx={{ mx: 2 }}>
                <Container>
                  <img alt="card-2" className={classes.image} src={image1} />
                </Container>
              </Grid>
              <Grid item sx={{ mr: 2 }}>
                <Container>
                  <h2 className={classes.bigHeader}>{heading1}</h2>
                </Container>
              </Grid>
              <Grid item sx={{ mx: 2 }}>
                <p style={{ fontSize: "18px", color: "#636366" }}>{content1}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <Grid container spacing={4} sx={{ my: 2 }}>
              <Grid item sx={{ mx: 2 }}>
                <Container>
                  <img alt="card-2" className={classes.image} src={image1} />
                </Container>
              </Grid>
              <Grid item sx={{ mr: 2 }}>
                <Container>
                  <h2 className={classes.bigHeader}>{heading1}</h2>
                </Container>
              </Grid>
              <Grid item sx={{ mx: 2 }}>
                <p style={{ fontSize: "18px", color: "#636366" }}>{content1}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
    
  );
};

export default CardFive;
{
  /* <Container sx={{ py: 6 }}>
            <Link to="#" className={classes.button}>
              See how M1 redefines speed
            </Link>
          </Container> */
}
