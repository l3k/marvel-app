import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container, Separator } from './styles';

import { Card } from '@components/ui/molecules/Card';
import { RootStackParamList } from '@src/utils/RootStackParams';
export interface ItemProps {
  id: string;
  title: string;
  img_url: string;
}

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export function List() {
  const { navigate } = useNavigation<NavProps>();
  const data: ItemProps[] = [
    {
      id: '8f4cc2ed-153b-462d-bf0e-4fcf567a2718',
      title: 'Julian',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '896cff69-691f-42f4-bd9a-960c5b8d4e0c',
      title: 'Heather',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: 'eb656be5-e441-4fc7-8302-020089e62abc',
      title: 'Jakob',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: 'eb246284-005b-44ef-be8f-9e3c75bf3b8d',
      title: 'Johnathon',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: 'fc83351a-418e-4383-b36f-b2f3c8817a82',
      title: 'Lilliana',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '7d60c74f-6cdd-4f26-8f12-6837bf7e4b1d',
      title: 'Mozell',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: 'd2677e98-b46b-41b1-9435-d5385950625b',
      title: 'Virgie',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '4aab8598-9363-4182-95cc-7ec250db1fa6',
      title: 'Ottis',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: '22f54640-0b8e-48c6-b85d-62d841aa5c47',
      title: 'Parker',
      img_url: 'http://placeimg.com/640/480',
    },
    {
      id: 'cff38626-b6a6-44b0-8616-09700b8761f3',
      title: 'Dane',
      img_url: 'http://placeimg.com/640/480',
    },
  ];

  function handleCharacter(character_id: string) {
    navigate('Detail', { character_id });
  }

  return (
    <Container
      data={data}
      numColumns={2}
      keyExtractor={(item: ItemProps) => item.id}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: { item: ItemProps }) => (
        <Card
          title={item.title}
          img_url={item.img_url}
          handlePress={() => handleCharacter(item.id)}
        />
      )}
    />
  );
}

