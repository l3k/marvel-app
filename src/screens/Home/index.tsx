import React from 'react';

import { Container } from './styles';

import { Card } from '@src/components/molecules/Card';

export function Home() {
  return (
    <Container>
      <Card title="Deadpool" img_url="http://placeimg.com/640/480" />
    </Container>
  );
}
