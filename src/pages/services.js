import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import ServicesComponent from '../components/services/Services';

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Keltic Media Direct - Services</title>
      </Helmet>
      <ServicesComponent />
    </div>
  );
};

export default Services;