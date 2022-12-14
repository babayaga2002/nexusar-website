import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './CardThree.module.css';

const CardThree = (props) => {
  const { heading, highlights, content,image } = props;

  return (

      <Grid container>
        <Grid item >
        <Grid item sx={{ alignItems: 'center', justifyContent: 'center'}}>
          <Container sx={{ py: 4 }}>
            <center>
             <h3>{heading}</h3> 
            </center>
          </Container>
        </Grid>
        <Grid item sx={{ alignItems: 'center', justifyContent: "center"}}>
          <Container sx={{ py: 4 }}>
            <h3>{content}</h3>
          </Container>
        </Grid>
        </Grid>
      </Grid>

  );
};

export default CardThree;
