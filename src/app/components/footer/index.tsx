import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FootContainer = styled.div`
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-4
    md:pt-12
    pb-6
    pl-8
    items-center
    justify-center   
    md:pb-11
    `}
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:flex-row
        w-4/5
        h-full
        max-w-screen-2xl
    `}
`;

const BottomContainer = styled.div`
  ${tw`
    flex
    w-4/5
    max-w-screen-2xl
    justify-start
  `}
`;

const CopyrightText = styled.small`
  font-size: 11px;
  ${tw`
    text-gray-300
    mt-5
  `}
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-12

    `}
`;

const AboutText = styled.p`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
        mb-6
    `}
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col

    `}
`;

const ListItem = styled.li`
  ${tw`
        mb-2
    `};

  & > a {
    ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-400
        `}
  }
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-12
    mb-6
  `}
`;

const HeaderTitle = styled.h3`
  ${tw`
        text-xl
        font-bold
        text-white
        mb-3
    `}
`;

const HorizontalContainer = styled.div`
  ${tw`
  flex
  items-center
  `}
`;

const RedIcon = styled.span`
  ${tw`
    w-7
    h-7
    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
    bg-red-500

  `}
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `}
`;

const BottomInfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:justify-start
    md:flex-wrap
    md:flex-row
    md:w-full
  `}
`;
const BottomLinksContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
  `}
`;
const BottomContactContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
  `}
`;

export function Footer() {
  return (
    <FootContainer id='contact'>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a car renting and selling company located in many
            countries across
          </AboutText>
        </AboutContainer>
        <BottomInfoContainer>
          <BottomLinksContainer>
            <SectionContainer>
              <HeaderTitle>Our Links</HeaderTitle>
              <LinksList>
                <ListItem>
                  <a href="#">Home</a>
                </ListItem>
                <ListItem>
                  <a href="#">About Us</a>
                </ListItem>
                <ListItem>
                  <a href="#">Services</a>
                </ListItem>
                <ListItem>
                  <a href="#">Models</a>
                </ListItem>
                <ListItem>
                  <a href="#">Blog</a>
                </ListItem>
              </LinksList>
            </SectionContainer>
            <SectionContainer>
              <HeaderTitle>Other Links</HeaderTitle>
              <LinksList>
                <ListItem>
                  <a href="#">FAQ</a>
                </ListItem>
                <ListItem>
                  <a href="#">Contact Us</a>
                </ListItem>
                <ListItem>
                  <a href="#">Support</a>
                </ListItem>
                <ListItem>
                  <a href="#">Privacy Policy</a>
                </ListItem>
                <ListItem>
                  <a href="#">Terms {'&'} Conditions</a>
                </ListItem>
              </LinksList>
            </SectionContainer>
          </BottomLinksContainer>
          <BottomContactContainer>
            <SectionContainer>
              <HeaderTitle>Call Now</HeaderTitle>
              <HorizontalContainer>
                <RedIcon>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </RedIcon>
                <SmallText>+1 800-320-3137</SmallText>
              </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
              <HeaderTitle>Mail</HeaderTitle>
              <HorizontalContainer>
                <RedIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </RedIcon>
                <SmallText>info@yourcar.com</SmallText>
              </HorizontalContainer>
            </SectionContainer>
          </BottomContactContainer>
        </BottomInfoContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
      
    </FootContainer>
  );
}
