import React from 'react';
import styled from '@emotion/styled';
import Success from './success';
import {useSelector} from 'react-redux';
import {getSuccessCreditFlag} from '../../store/selectors';
import Fail from './fail';
import {BreakPoint} from '../../const';

const Wrapper = styled.div`
  margin-top: 5px;
  padding: 53px 20px 58px;
  align-self: start;
  background-color: var(--color-background);
  border-radius: 4px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    margin-top: 0;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    margin-top: 0;
    padding: 34px 15px 40px;
  }
`;

export default function CreditOffer() {
  const isMinCreditReached = useSelector(getSuccessCreditFlag);

  return (
    <Wrapper>
      {
        isMinCreditReached
          ? <Success />
          : <Fail />
      }
    </Wrapper>
  );
}
