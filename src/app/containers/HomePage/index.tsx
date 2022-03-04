import React from 'react';
import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar';
import { AboutUs } from './aboutUs';
import BookingSteps from './bookingSteps';
import ScrollToTop from './scrollToTop';
import { TopCars } from './topCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const NoteContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    mb-10
    `}
`;

const Note = styled.div`
  ${tw`
  text-gray-500
  ml-6
  mr-auto
  `}
`;

export function HomePage() {
  return (
    <PageContainer id="outer-container">
      <Navbar />
      <TopSection />
      {/* <Marginer direction="vertical" margin="2em" /> */}
      <NoteContainer>
        <Note>⚠️&nbsp;Note: </Note>
        <Note>This is an ongoing project. </Note>
        <Note> Not all components are functional by now.</Note>
      </NoteContainer>
      <BookCard />
      <Marginer direction="vertical" margin="5em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="4em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      {/* <Marginer direction="vertical" margin="8em" /> */}

      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
}
