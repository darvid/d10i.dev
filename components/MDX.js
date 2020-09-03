/** @jsx jsx */
import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  Link,
  PseudoBox,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import NextLink from 'next/link';

const ContentLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'blue.400',
    dark: 'pink.900',
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const CommandLink = styled(ContentLink)`
  &::after {
    content: '_';
    animation: blink-animation 1s steps(2, start) infinite;
    -webkit-animation: blink-animation 1s steps(2, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
`;

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px',
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <PseudoBox
          aria-label="anchor"
          as="a"
          color="pink.900"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </PseudoBox>
      )}
    </Box>
  </Heading>
);

const DefaultCode = (props) => {
  const { colorMode } = useColorMode();
  const codeProps = {
    ...props,
    fontSize: 'xl',
    backgroundColor: 'transparent',
  };
  if (colorMode == 'dark') {
    codeProps.variantColor = 'yellow';
  }
  return <Code {...codeProps} />;
};

const MDXComponents = {
  a: CommandLink,
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => <DocsHeading as="h2" size="lg" {...props} />,
  h3: (props) => <DocsHeading as="h3" size="md" {...props} />,
  code: DefaultCode,
  ul: (props) => <Box as="ul" fontSize="xl" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" fontSize="xl" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" fontSize="xl" pb={1} {...props} />,
  p: (props) => (
    <Text as="p" mt={4} fontSize="xl" lineHeight="tall" {...props} />
  ),
};

export { CommandLink, ContentLink, DefaultCode, DocsHeading };
export default MDXComponents;
