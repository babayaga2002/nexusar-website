import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardOne.module.css';
const CardOne = (props) => {
  const { heading, content,image } = props;

  return (
      <Grid container className={classes.card}>
        <Grid item md={5} >
        <Container sx={{ py: 4}}>
        <h2 className={classes.bigHeader}>{heading}</h2>
      </Container>
          <Container sx={{ py: 6}}>
            <p style={{fontSize: "20px", color: 'white'}}>
              {content}
            </p>
            <Box sx={{ py: 2 }} />
          </Container>
        </Grid>
        <Grid item md={7} sx={{ alignItems: 'center', display: 'flex' }}>
          <img alt="card-2" className={classes.image} src={image} />
        </Grid>
      </Grid>
  );
};

export default CardOne;
