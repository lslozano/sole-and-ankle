import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShowWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px 32px;
`;

const ShowWrapper = styled.div`
  flex: 1;
  flex-basis: 340px;
`;

export default ShoeGrid;
