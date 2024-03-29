import { Box } from "@mui/system";
import { Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./CardFour.module.css";

const CardFour = (props) => {
  const {
    heading1,
    content1,
    heading2,
    content2,
    heading3,
    content3,
    image1,
    image2,
    image3,
  } = props;
  return (
    <Grid container spacing={6} sx={{pb: 6, justifyContent: "center"}}>
      <Grid item sm={12} md={8} lg={4}>
        <Grid item>
          <Container>
            <img className={classes.image} src={image1} alt="card1"></img>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <h3 className={classes.bigHeader}>{heading1}</h3>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <p className={classes.content}>{content1}</p>
          </Container>
        </Grid>
      </Grid>
      <Grid item sm={12}md={8} lg={4} >
        <Grid item>
          <Container>
            <img className={classes.image} src={image2} alt="card1"></img>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <h3 className={classes.bigHeader}>{heading2}</h3>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <p className={classes.content}>{content2}</p>
          </Container>
        </Grid>
      </Grid>
      <Grid item sm={12} md={8} lg={4} >
        <Grid item>
          <Container>
            <img className={classes.image} src={image3} alt="card1"></img>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <h3 className={classes.bigHeader}>{heading3}</h3>
          </Container>
        </Grid>
        <Grid item>
          <Container>
            <p className={classes.content}>{content3}</p>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardFour;


{/* <section class="card card--textimage has-none-background-color   ">
  <div class="card__header diagonal-shape br-wedge has-none-background-color ">
    
    <img src="https://www.iceye.com/hs-fs/hubfs/iceye-perils-earthquake-404.jpg?width=250&amp;name=iceye-perils-earthquake-404.jpg" class="img block" srcset="https://www.iceye.com/hs-fs/hubfs/iceye-perils-earthquake-404.jpg?width=300&amp;length=300&amp;name=iceye-perils-earthquake-404.jpg 300w, https://www.iceye.com/hs-fs/hubfs/iceye-perils-earthquake-404.jpg?width=600&amp;length=600&amp;name=iceye-perils-earthquake-404.jpg 600w, https://www.iceye.com/hs-fs/hubfs/iceye-perils-earthquake-404.jpg?width=900&amp;length=900&amp;name=iceye-perils-earthquake-404.jpg 900w, https://www.iceye.com/hs-fs/hubfs/iceye-perils-earthquake-404.jpg?width=1280&amp;length=1280&amp;name=iceye-perils-earthquake-404.jpg 1280w, https://www.iceye.com/hubfs/iceye-perils-earthquake-404.jpg 2000w" width="250" alt="ICEYE perils earthquake" loading="lazy">
    
    
  </div>
  <div class="card__content">
    
      <p class="h6 has-aqua-forest-color ">Beta</p>
    

    
      <p class="h4">Earthquake monitoring</p>
    

    
      <p class="description">Embrace a proactive approach with ICEYE’s actionable insights before, during, and after an earthquake.</p>
    

    
    <div class="card__button-wrapper button-wrapper">
      <span class="btn regular has-eden-background-color outline-eden">
        Get in touch
      </span>
    </div>
  
  </div>
</section> */}