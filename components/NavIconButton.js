import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';

export const NavButton = (props) => {
  const { colorMode } = useColorMode();
  return (
    <IconButton
      isRound={true}
      size="md"
      p={2}
      color={colorMode == 'dark' ? 'pink.800' : 'black'}
      backgroundColor="transparent"
      cursor="pointer"
      _hover={{
        color: colorMode == 'dark' ? 'cyan.400' : 'pink.700',
      }}
      {...props}
    />
  );
};

export const AnimatedNavButton = styled(NavButton)``;
