import React from 'react';
import styled from 'styled-components';
import CompassIcon from './images/compass.svg';

const MyTitle = styled.h1`
  color: #d2d21a;
  font-size: 31px;
  height: 50px;
  background: transparent url(${CompassIcon}) no-repeat top left;
  background-size: 50px;
  padding-left: 70px;
`

export default function(props) {
  return <MyTitle>{ props.title }</MyTitle>
};
