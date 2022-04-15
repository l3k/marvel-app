import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import { ItemProps } from '.';

export const Container = styled(FlatList as new () => FlatList<ItemProps>).attrs({
  showsVerticalScrollIndicator: false,
  columnWrapperStyle: { justifyContent: 'space-between' },
})`
  flex: 1;
`;

export const Separator = styled.View`
  margin: ${RFValue(10)}px 0;
`;
