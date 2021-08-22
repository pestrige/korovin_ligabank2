import React from 'react';
import Header from '../../layout/header/header';
import Footer from '../../layout/footer/footer';
import styled from '@emotion/styled';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 140%;
`;

export default function UnderConstructionPage() {
  return (
    <>
      <Header />
      <Main>
        <Title>
          Страница в&nbsp;разработке
        </Title>
      </Main>
      <Footer />
    </>
  );
}
