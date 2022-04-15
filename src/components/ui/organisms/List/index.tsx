import React from 'react';

import { Container, Separator } from './styles';

import { Card } from '@components/ui/molecules/Card';

export interface ItemProps {
  title: string;
  img_url: string;
}

export function List() {
  const data: Array<ItemProps> = [
    {
      title: 'Julian',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Heather',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Jakob',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Johnathon',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Lilliana',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Mozell',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Virgie',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Ottis',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Parker',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      title: 'Dane',
      img_url: 'http://placeimg.com/640/480',
    },
  ];

  return (
    <Container
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.title}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }) => <Card title={item.title} img_url={item.img_url} />}
    />
  );
}
