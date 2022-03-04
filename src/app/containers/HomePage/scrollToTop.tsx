import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.a`
  text-align:right;
  ${tw`
  text-red-500
  text-4xl
  flex
  justify-end
  mr-3
  sticky
  bottom-6
  ml-auto
    `}
`;

export default function ScrollToTop() {
  return (
    <Container href="/#top">
      <FontAwesomeIcon icon={faCircleChevronUp} />
    </Container>
  );
}
