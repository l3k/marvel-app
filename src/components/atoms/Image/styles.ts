import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${RFValue(143)}px;
  height: ${RFValue(166)}px;
  border-radius: ${RFValue(16)}px;
`;
