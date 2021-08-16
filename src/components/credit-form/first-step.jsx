import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from '@emotion/styled';
import {getCreditType} from '../../store/selectors';
import {setCreditType, setStep} from '../../store/actions';
import {BreakPoint, CreditType, Steps} from '../../const';
import StepTitle from './step-title';

const purposes = [
  {id: 0, value: CreditType.mortgage.value, label: CreditType.mortgage.label},
  {id: 1, value: CreditType.car.value, label: CreditType.car.label},
];

const SelectWrapper = styled.div`
  max-height: ${({isOpen}) => isOpen ? '250px' : '76px'};
  overflow-y: hidden;
  transition: max-height 0.3s;
`;
const SelectButton = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 18px 25px;
  font-family: var(--font-medium);
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  background-color: white;
  background-image: ${({isOpen}) => `url(${process.env.PUBLIC_URL}/images/${isOpen ? 'select-up' : 'select-down'}.svg)`};
  background-repeat: no-repeat;
  background-position: center right 25px;
  border: 1px solid #1F1E25;
  border-radius: ${({isOpen}) => isOpen ? '4px 4px 0 0' : '4px'};
  cursor: pointer;
  transition: background-image 0.3s;
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding-left: 14px;
    padding-right: 45px;
    background-position: center right 13px;
  }
`;
const CreditsList = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  border: 1px solid #1F1E25;
  border-top: none;
  border-radius: 0 0 4px 4px;
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  transform: ${({isOpen}) => isOpen ? 'translateY(0) scaleY(1)' : 'translateY(-100px) scaleY(0)'};
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
`;
const Credit = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-outline);
  }
`;
const Label = styled.label`
  display: block;
  padding: 25px;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--color-background);
  }
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    padding: 19px 23px;
  }
  @media (max-width: ${BreakPoint.MAX_PHONE}px) {
    padding: 19px 14px;
  }
`;
const Input = styled.input`
  &:focus ~ label {
    background-color: var(--color-background);
  }
`;

export default function FirstStep() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const creditType = useSelector(getCreditType);
  const closeSelect = (value) => {
    setIsOpen(false);
    dispatch(setCreditType(value));
    dispatch(setStep(2));
  };
  const handleClick = (evt) => {
    closeSelect(evt.target.htmlFor);
  };
  const handleKeyDown = (evt) => {
    const isEnter = evt.code === 'Enter';
    if (isEnter) {
      closeSelect(evt.target.value);
    }
  };

  return (
    <StepTitle title={Steps.FIRST}>
      <SelectWrapper isOpen={isOpen}>
        <SelectButton
          type='button'
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {CreditType[creditType].label}
        </SelectButton>
        <CreditsList isOpen={isOpen}>
          {purposes.map(({id, value, label}) => (
            <Credit key={`${id}-${value}`}>
              <Input
                id={value}
                type='radio'
                name='credit-type'
                className='visually-hidden'
                value={value}
                onKeyDown={handleKeyDown}
              />
              <Label htmlFor={value} onClick={handleClick}>
                {label}
              </Label>
            </Credit>
          ))}
        </CreditsList>
      </SelectWrapper>
    </StepTitle>
  );
}
