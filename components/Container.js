import React, { useCallback, useEffect, useState, useRef } from 'react';
import NextLink from 'next/link';
import { useColorMode, Flex, Box, Link, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { GiMoon, GiStripedSun } from 'react-icons/gi';
import { VscGithubInverted } from 'react-icons/vsc';

import NavLink from './NavLink';
import { AnimatedNavButton } from './NavIconButton';
import SpotifyNowPlaying from './SpotifyNowPlaying';

const StickyNav = (props) => {
  const [isScrolledDown, setIsScrolledDown] = useState();
  const [listener, setListener] = useState();

  const navRef = useRef(null);
  const isScrolledDownRef = useRef();

  isScrolledDownRef.current = isScrolledDown;

  const handleScroll = useCallback(() => {
    setIsScrolledDown(
      document.scrollingElement.scrollTop >= navRef.current.clientHeight
    );
    setListener(true);
  }, [isScrolledDown]);
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [listener]);
  return (
    <Flex
      ref={navRef}
      style={{
        position: 'sticky',
        zIndex: 10,
        top: 0,
        backdropFilter: isScrolledDown ? 'blur(5px)' : 'none',
      }}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const primarytextColor = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Stack w="100%" spacing={3}>
          <Flex w="100%" justifyContent="space-between">
            <Box>
              <NavLink href="/">/Home</NavLink>
              <NavLink href="/about">/About</NavLink>
              <NavLink href="/stream">/Stream</NavLink>
              {/* <NavLink href="/projects">/Projects</NavLink> */}
            </Box>
            <Stack direction="row" spacing={3}>
              <Link
                href="https://github.com/darvid"
                _focus={{ border: 'none' }}
              >
                <AnimatedNavButton aria-label="GitHub" as={VscGithubInverted} />
              </Link>
              <AnimatedNavButton
                aria-label="Toggle psycopath (light) mode"
                as={colorMode === 'dark' ? GiStripedSun : GiMoon}
                onClick={toggleColorMode}
              />
            </Stack>
          </Flex>
          <Flex>
            <SpotifyNowPlaying ml={4} />
          </Flex>
        </Stack>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
