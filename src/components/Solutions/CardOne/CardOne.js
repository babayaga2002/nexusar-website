import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardOne.module.css';

const CardOne = (props) => {
  const { heading, highlights, content} = props;

  return (
    <Paper elevation={4} className={classes.card}>
    
          <Container sx={{ pt: 4, ml: 2 }}>
            <h3 style={{color:"black"}} className={classes.bigHeader}>{heading}</h3>
          </Container>
          <Container sx={{ py: 3, ml: 2,mr:2}}>
            {/* {highlights && (
              <h1 className={classes.bigHeader}>
                <span style={{ color: '#c48cfc' }}>{highlights[0]}</span> <br /> {highlights[1]}. <br /> {highlights[2]}
                .
              </h1>
            )} */}
            <Box sx={{ py: 2}} />
            <p style={{fontSize: "21px", color:"black"}}>{content}</p>
            <Box sx={{ py: 2}} />
          </Container>
    </Paper>
  );
};

export default CardOne;
