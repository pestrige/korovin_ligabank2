import React, {useEffect, useState} from 'react';
import Overlay from '../overlay/overlay';
import styled from '@emotion/styled';
import {Anchor, BreakPoint, Steps} from '../../const';
import CloseButton from '../close-button/close-button';
import {useDispatch, useSelector} from 'react-redux';
import {setOrderId, setStep} from '../../store/actions';
import {getOrderId} from '../../store/selectors';
import {scrollTo} from '../../utils/scroll-to';

const ANIMATION_DELAY = 200;
const Wrapper = styled.div`
  position: relative;
  padding: 50px 25px;
  margin: 0 15px;
  width: 500px;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  border-radius: 4px;
  transition: transform 0.2s;
  transform: ${({isScaled}) => isScaled ? 'scale(1)' : 'scale(0)'};
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding: 40px 25px;
    width: 678px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    width: 100%;
  }
`;
const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  font-family: var(--font-medium);
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
   font-size: 18px;
  }
`;
const Message = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  max-width: 350px;
  font-size: 16px;
  color: var(--color-dark-600);
  text-align: center;
`;


export default function SuccessPopup() {
  const dispatch = useDispatch();
  const orderId = useSelector(getOrderId);
  const [isScaled, setIsScaled] = useState(false);
  const handleClose = () => {
    setIsScaled(false);
    setTimeout(() => {
      dispatch(setStep(Steps.SECOND.id));
      dispatch(setOrderId(orderId + 1));
      scrollTo(Anchor.CALCULATOR);
    }, ANIMATION_DELAY);
  };
  useEffect(() => {
    setIsScaled(true);
  }, []);

  return (
    <Overlay onClose={handleClose}>
      <Wrapper isScaled={isScaled} onClick={(evt) => evt.stopPropagation()}>
        <Title>
          {Steps.FOURTH.title}
        </Title>
        <Message>
          Наш менеджер скоро свяжется с вами по&nbsp;указанному номеру телефона.
        </Message>
        <CloseButton
          onClose={handleClose}
          type='button'
          top={14}
          right={18}
        />
      </Wrapper>
    </Overlay>
  );
}
