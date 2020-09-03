import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useColorMode, Button } from '@chakra-ui/core';

export default ({ href, children }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  //   let className = children.props.className || '';
  const isActive = router.pathname === href;
  const color = {
    light: isActive ? 'blue.400' : 'black',
    dark: isActive ? 'pink.900' : 'white',
  }[colorMode];

  return (
    <NextLink href={href} passHref>
      {/* {React.cloneElement(children, { className })} */}
      <Button
        as="a"
        variant="ghost"
        p={[1, 4]}
        fontSize="2xl"
        textDecoration={isActive ? 'underline' : 'none'}
        textTransform="uppercase"
        textShadow="none"
        color={color}
        _hover={{
          backgroundColor: 'transparent',
          textDecoration: 'underline',
        }}
        _focus={{
          border: 'none',
          backgroundColor: 'transparent',
        }}
        _active={{
          backgroundColor: 'transparent',
        }}
      >
        {children}
      </Button>
    </NextLink>
  );
};
