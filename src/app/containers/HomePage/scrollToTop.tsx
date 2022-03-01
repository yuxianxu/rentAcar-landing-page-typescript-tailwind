import {
  faArrowTrendUp,
  faArrowUpFromBracket,
  faArrowUpRightFromSquare,
  faCalendarAlt,
  faCarSide,
  faCircleArrowUp,
  faCircleChevronUp,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.a`
  ${tw`
  text-red-500
  text-4xl
  flex
  justify-end
  mr-10
  sticky
  w-full
  bottom-6
    `}
`;

export default function ScrollToTop() {
  
  return (
    <Container href="/#top">
      <FontAwesomeIcon  icon={faCircleChevronUp} />
    </Container>
  );
}
