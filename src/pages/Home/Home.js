import { Fragment } from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import HomeContent from "../../components/Home/HomeContent";
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';

const Home = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <HomeContent/>
    </Fragment>
  );
};

export default Home;
