import React from 'react';
import Link from 'gatsby-link';

import ShopList from '../components/shop/ShopList';

const Shop = ({ data }) => {
  console.log(data);
  return (
    <div style={{ marginTop: '100px'}}>
      <ShopList data={data} />
    </div>
  );
};

export const query = graphql`
  query ShopQuery {
    allContentfulProduct {
      edges {
        node {
          albumName
          artistName
          slug
          price
          tags
          trackList {
            trackList
          }
          image {
            resize(width: 350) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Shop;