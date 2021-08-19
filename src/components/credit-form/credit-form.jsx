/** @jsxImportSource @emotion/react */

import React from 'react';
import styled from '@emotion/styled';
import StepTitle from '../step-title/step-title';
import {BreakPoint, CreditType, Steps} from '../../const';
import {useSelector} from 'react-redux';
import {getCreditType, getDeposit, getOrderNumber, getPrice, getYears} from '../../store/selectors';
import Input from '../input/input';
import Button from '../button/button';
import {css} from '@emotion/react';

const RESULTS_LINES = [
  {id: Math.random().toString(36), type: 'orderId', title: 'Номер заявки'},
  {id: Math.random().toString(36), type: 'creditType', title: 'Цель кредита'},
  {id: Math.random().toString(36), type: 'finalSum', title: {mortgage: 'Стоимость недвижимости', car: 'Стоимость автомобиля'}},
  {id: Math.random().toString(36), type: 'deposit', title: 'Первоначальный взнос'},
  {id: Math.random().toString(36), type: 'years', title: 'Срок кредитования'},
];

const Form = styled.form`
  padding: 63px 70px 50px;
  width: 770px;
  margin: 0 auto;
  grid-column: 1 / 3;
  background-color: var(--color-background);
  border-radius: 4px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    width: 100%;
    padding: 38px 0;
    background-color: white;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding: 24px 0;
  }
`;
const Dl = styled.dl`
  margin: 0 0 30px;
`;
const Wrapper = styled.div`
  margin-bottom: 17px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-outline);
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    flex-direction: column;
  }
`;
const Dt = styled.dt`
  padding-bottom: 15px;
  font-size: 16px;
  color: var(--color-dark-600);
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    order: 2;
  }
`;
const Dd = styled.dd`
  margin-top: -4px;
  margin-left: 0;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 140%;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 18px;
  }
`;
const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 84px 30px 84px auto;
  grid-template-areas:
    'name name name name name'
    'tel tel . mail mail'
    '. btn btn btn .';
  row-gap: 30px;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    grid-template-areas:
    'name name name name name'
    'tel tel . mail mail'
    'btn btn btn btn btn';
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    grid-template-areas:
    'name name name name name'
    'tel tel tel tel tel'
    'mail mail mail mail mail'
    'btn btn btn btn btn';
    row-gap: 20px;
  }
`;
const styledButton = css`
  margin-top: 10px;
  grid-area: btn;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    font-size: 14px;
  }
`;

export default function CreditForm() {
  const creditType = useSelector(getCreditType);
  const creditName = CreditType[creditType].formName;
  const results = {
    orderId: {type: 'orderId', value: useSelector(getOrderNumber)},
    creditType: {type: 'creditType', value: creditName},
    finalSum: {type: 'finalSum', value: useSelector(getPrice)},
    deposit: {type: 'deposit', value: useSelector(getDeposit)},
    years: {type: 'years', value: useSelector(getYears)},
  };

  return (
    <Form id='credit-form'>
      <StepTitle title={Steps.THIRD.title} isCentered>
        <Dl>
          {RESULTS_LINES.map(({type, title, id}) => (
            <Wrapper key={id}>
              <Dt>{typeof title === 'string' ? title : title[creditType]}</Dt>
              <Dd>{results[type].value}</Dd>
            </Wrapper>
          ))}
        </Dl>
        <InputsWrapper>
          <Input
            name='name'
            type='text'
            placeholder='ФИО'
            wrapperStyle={css`grid-area: name`}
          />
          <Input
            name='name'
            type='text'
            placeholder='Телефон'
            wrapperStyle={css`grid-area: tel`}
          />
          <Input
            name='email'
            type='email'
            placeholder='E-mail'
            wrapperStyle={css`grid-area: mail`}
          />
          <Button isSmall css={styledButton}>
            Отправить
          </Button>
        </InputsWrapper>
      </StepTitle>
    </Form>
  );
}
