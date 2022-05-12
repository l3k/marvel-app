import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container } from './styles';

import { Image } from '@src/components/ui/atoms/Image';
import { Title } from '@src/components/ui/atoms/Title';

type CardProps = {
  img_url: string;
  title: string;
  handlePress: () => void;
};

export function Card({ img_url, title, handlePress }: CardProps) {
  return (
    <Container style={styles.shadow} onPress={handlePress}>
      <Image img_url={img_url} />
      <Title title={title} styles={{ marginLeft: RFValue(10) }} />
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

