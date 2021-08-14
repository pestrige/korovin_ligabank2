import React from 'react';
import PropTypes from 'prop-types';
import {slides} from './data';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const List = styled.ul`
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(${slides.length}, 1fr);
  align-items: center;
  list-style: none;
  @media (max-width: ${BreakPoint.MAX_TABLET}px) {
    display: none;
  }
`;
const Item = styled.li`

`;
const Tab = styled.button`
  min-height: 93px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px 4px 0px 0px;
  cursor: ${({isActive}) => isActive ? 'default' : 'pointer'};
  transition: opacity 0.3s, background-color 0.3s;
  background-color: ${({isActive}) => isActive ? 'var(--color-background)' : '#FFFFFF'};
  &:hover {
    opacity: ${({isActive}) => isActive ? '1' : '0.7'};;
  }
`;
const TabName = styled.span`
  position: relative;
  padding-left: 45px;
  font-family: var(--font-medium);
  font-size: 18px;
  line-height: 21px;
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 34px;
    height: 34px;
    background-image: ${({name}) => `url(${process.env.PUBLIC_URL}/images/tabs/${name}-icon.svg)`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default function TabsList({onTabClick, activeSlide}) {
  return (
    <List>
      {slides.map(({id, name, tabName}) => (
        <Item key={`${id}-tab_${name}`}>
          <Tab
            isActive={id === activeSlide}
            onClick={() => onTabClick(id)}
            type='button'
          >
            <TabName name={name}>
              {tabName}
            </TabName>
          </Tab>
        </Item>
      ))}
    </List>
  );
}

TabsList.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  activeSlide: PropTypes.number.isRequired,
};
