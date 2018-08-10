import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import ServicesComponent from '../components/services/Services';

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services - Keltic Media Direct</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <ServicesComponent />
    </div>
  );
};

export default Services;