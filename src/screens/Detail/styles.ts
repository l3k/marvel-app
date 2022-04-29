import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ImageContent = styled.ImageBackground`
  flex: 5;
`;

export const Header = styled.View`
  width: 100%;
  padding: ${RFValue(20)}px;
  padding-top: ${getStatusBarHeight() + RFValue(15)}px;
`;

export const BackButton = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`;

export const FooterContent = styled.View`
  flex: 2;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: ${RFValue(20)}px;
  border-top-right-radius: ${RFValue(20)}px;
  bottom: ${RFValue(20)}px;
`;

