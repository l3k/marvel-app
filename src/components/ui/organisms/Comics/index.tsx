import React from 'react';

import { Container, Separator } from './styles';

export interface Props {
  id: string;
  img_url: string;
}

import { Comic } from '@src/components/ui/molecules/Comic';
import { View } from 'react-native';

export function Comics() {
  const data: Array<Props> = [
    {
      id: '1',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '2',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '3',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '4',
      img_url: 'http://placeimg.com/640/480',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Container
        data={data}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => <Comic />}
        horizontal
      />
    </View>
  );
}

