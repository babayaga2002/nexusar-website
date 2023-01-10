import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import CardOne from "../../components/Home/CardOne/CardOne";
import CardTwo from "../../components/Home/CardTwo/CardTwo";
import CardFive from "../../components/Home/CardFive/CardFive";
import CardFour from "../../components/Home/CardFour/CardFour";
import HomeDesc from "../../components/Home/HomeDesc/HomeDesc";
import classes from "./Home.module.css";
import CardThree from "../Home/CardThree/CardThree";
import CardSix from "../../components/Home/CardSix/CardSix";
import CardSeven from "../../components/Home/CardSeven/CardSeven";
import CardEight from "../../components/Home/CardEight/CardEight";
import CardNine from "../../components/Home/CardNine/CardNine";
import React from "react";
import "./Hover.css";
const HomeContent = (props) => {
    const containerRef = React.useRef(null)
    function mouseMoveEvent(e) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty('--x', e.clientX - x);
      containerRef.current.style.setProperty('--y', e.clientY - y);
    }
  
    React.useEffect(() => {
      if (containerRef) {
        containerRef.current.addEventListener('mousemove', mouseMoveEvent)
      }
      return () => containerRef.current.removeEventListener('mousemove', mouseMoveEvent)
    }, [containerRef]);
  return (
    <div class="shiny" ref={containerRef}>
      <Box className={classes.homeBox}>
        <Box py={3}>
          <HomeDesc
            heading="Partners For"
            subHeading1="kmdalmsxls jdknsl"
            subHeading2="kdsnmax,keklwdx"
          />
        </Box>
        <Box my={3}>
          <CardOne
            heading="Intelligent data driven solutions."
            content="We transform data, projects, and processes to supercharge operations with targeted insights to enable data driven, creative, agile teams."
          />
        </Box>
        <Box my={3}>
          <CardThree
            heading="Work smarter. React faster. Think bigger."
            content="BaseOne can help you take control of your data. Accelerate, transform, and extract more value from projects, people, and your business through intelligent enterprise data driven solutions and targeted insights."
          />
        </Box>
        <Box my={3}>
          <CardFour
            heading1="Smarter, data driven operations."
            content1="Enable data driven transformation that will automate and reduce the effort required to work and report across your organisation. Save time and cost, whilst improving data quality and removing doubt from decision making."
            image1="https://drive.google.com/uc?id=1hD7UfKm3PYVH2epEWdTbm3tRGggwZLbN"
            heading2="Smarter, data driven operations."
            content2="Enable data driven transformation that will automate and reduce the effort required to work and report across your organisation. Save time and cost, whilst improving data quality and removing doubt from decision making."
            image2="https://drive.google.com/uc?id=1hD7UfKm3PYVH2epEWdTbm3tRGggwZLbN"
            heading3="Smarter, data driven operations."
            content3="Enable data driven transformation that will automate and reduce the effort required to work and report across your organisation. Save time and cost, whilst improving data quality and removing doubt from decision making."
            image3="https://drive.google.com/uc?id=1hD7UfKm3PYVH2epEWdTbm3tRGggwZLbN"
          />
        </Box>
        <Box my={3}>
          <CardTwo
            heading="Data & Analytics"
            content="We help unify your organisational data, reporting targeted answers that deliver value fast."
          />
        </Box>
        <Box my={3}>
          <CardTwo
            heading="Data & Analytics"
            content="We help unify your organisational data, reporting targeted answers that deliver value fast."
          />
        </Box>
        <Box my={3}>
          <CardFive heading="Let's talk about" subHeading1="your project." />
        </Box>
        <Box mt={3}>
          <CardSix heading="Level up and take" content="control" />
        </Box>
        <CardSeven
          number1="01."
          heading1="Design-led products & services"
          content1="Beautiful, bespoke business intelligence experiences that engage users with aesthetics and science."
          number2="02."
          heading2="Targeted, advanced analytics"
          content2="We help define your goals and create a single source of actionable insights for your business. We ensure the metrics, you see are exactly what you need to make better decisions faster."
        />
        <CardSeven
          number1="03."
          heading1="Design-led products & services"
          content1="Beautiful, bespoke business intelligence experiences that engage users with aesthetics and science."
          number2="04."
          heading2="Targeted, advanced analytics"
          content2="We help define your goals and create a single source of actionable insights for your business. We ensure the metrics, you see are exactly what you need to make better decisions faster."
        />
        <CardSeven
          number1="05."
          heading1="Design-led products & services"
          content1="Beautiful, bespoke business intelligence experiences that engage users with aesthetics and science."
        />
        <Box py={3}></Box>
        <Box py={3}>
          <CardEight
            heading="Case Studies."
            content="If you’re a business owner or key decision-maker looking to thrive in our hyper-connected digital age, we’re here to serve you."
          />
        </Box>
        <Box py={3}>
          <CardNine
            heading="Bourne Group | Project Controls Support"
            content="Project controls support for a leading UK steelwork company."
            number="01."
          />
          <CardNine
            heading="Bourne Group | Project Controls Support"
            content="Project controls support for a leading UK steelwork company."
            number="01."
          />
          <CardNine
            heading="Bourne Group | Project Controls Support"
            content="Project controls support for a leading UK steelwork company."
            number="01."
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomeContent;
