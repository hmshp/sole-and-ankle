import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 1200px) {
    grid-template-columns: minmax(0, 1fr);
  }

  gap: 16px;
`;

export default ShoeGrid;
