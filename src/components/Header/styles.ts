import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  padding-top: ${getStatusBarHeight() + RFValue(20)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Image = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(45)}px;
`;
