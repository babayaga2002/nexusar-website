import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardTwo.module.css';

const CardTwo = (props) => {
  const { heading, highlights, content,image } = props;

  return (
    <Paper elevation={4} className={classes.card}>
      <Container sx={{ py: 4,mr:2 }}>
        <h3 style={{color:"black"}} className={classes.bigHeader}>{heading}</h3>
      </Container>
      <Grid container>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Container sx={{ py: 6,mr:2 }}>
            <p style={{fontSize: "21px", color:"black"}}>
              {highlights}{content}
            </p>
            <Box sx={{ py: 2 }} />
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }} sx={{ alignItems: 'center', display: 'flex' }}>
          <Container sx={{ mb: 1, mr:2, overflow: 'hidden' }}>
            <img alt="card-2" className={classes.image} src={image} />
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardTwo;
