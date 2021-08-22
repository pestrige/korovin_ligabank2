import React from 'react';
import styled from '@emotion/styled';
import {BreakPoint} from '../../const';

const SocialsList = [
  {name: 'facebook', link: 'https://facebook.com'},
  {name: 'instagram', link: 'https://instagram.com'},
  {name: 'twitter', link: 'https://twitter.com'},
  {name: 'youtube', link: 'https://youtube.com'},
];

const List = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
    @media (max-width: ${BreakPoint.MAX_TABLET}px) {
      margin-right: 18px;
    }
  }
`;

const Link = styled.a`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center right;
  transition: opacity 0.3s;
  background-image: ${({iconName}) => `url(${process.env.PUBLIC_URL}/images/socials/${iconName}.svg)`};
  &:hover {
    opacity: 0.6;
  }
`;

export default function Socials() {
  return (
    <List>
      {
        SocialsList.map(({name, link}) => (
          <Item key={name}>
            <Link
              href={link}
              aria-label={name}
              iconName={name}
            >
            </Link>
          </Item>
        ))
      }
    </List>
  );
}
