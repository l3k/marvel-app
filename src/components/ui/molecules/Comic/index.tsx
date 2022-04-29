import React from 'react';

import { Container } from './styles';

import { ComicImage } from '@src/components/ui/atoms/ComicImage';

export function Comic() {
  return (
    <Container>
      <ComicImage img_url="http://placeimg.com/640/480" />
    </Container>
  );
}

