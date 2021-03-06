import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({})`
  width: ${RFValue(142)}px;
  height: ${RFValue(196)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${RFValue(9)}px;
  justify-content: space-around;
`;

