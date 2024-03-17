import ListContainer from '@/containers/list/list.container';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Covid-19 Tracker List",
  description: "An interactive list showing COVID-19 data on a world map. Quickly access the current number of cases, deaths and recoveries by country.",
};

const ListPage: React.FC = () => {
  return (
    <ListContainer />
  )
}

export default ListPage;
