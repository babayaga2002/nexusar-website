import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';

const CardTwo = (props) => {
  const { heading, highlights, content,image } = props;

  return (

      <Grid container className={classes.card}>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
        <Container sx={{ py: 4}}>
        <h3 className={classes.bigHeader}>{heading}</h3>
      </Container>
          <Container sx={{ py: 6}}>
            <p style={{fontSize: "20px", color: "#222223"}}>
              {highlights}{content}
            </p>
            <Box sx={{ py: 2 }} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} sx={{ alignItems: 'center', display: 'flex' }}>
          {/* <Container sx={{overflow: 'hidden' }}>
            
          </Container> */}
          <img alt="card-2" className={classes.image} src={image} />
        </Grid>
      </Grid>
  );
};

export default CardTwo;
