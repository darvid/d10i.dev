import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Flex,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/core';
import { parseISO, format } from 'date-fns';
import { GiSunglasses } from 'react-icons/gi';

import Container from '../components/Container';
import StreamEntrySeo from '../components/StreamEntrySeo';
import { defaultTitle } from '../next-seo.config';

export default function DefaultLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath.replace('.mdx', ''),
    url = `${process.env.DOMAIN}/${slug}`,
    title = `${frontMatter.title || slug} - ${defaultTitle}`,
    isStream = slug.startsWith('stream/');

  var seo;
  if (isStream) {
    seo = <StreamEntrySeo url={url} {...frontMatter} />;
  } else {
    seo = <NextSeo title={title} canonical={url} openGrap={{ url, title }} />;
  }
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Container>
      {seo}
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="800px"
          w="100%"
        >
          {isStream && (
            <>
              <Heading my={4}>{frontMatter.title}</Heading>
              <Stack w="100%">
                <Flex
                  justify="space-between"
                  align={['initial', 'center']}
                  direction={['column', 'row']}
                  w="100%"
                  mt={2}
                  mb={4}
                >
                  <Flex align="center">
                    <Text fontSize="lg" minWidth="100px">
                      {format(
                        parseISO(frontMatter.publishedAt),
                        'MMMM dd, yyyy'
                      )}
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    minWidth="100px"
                    mt={[2, 0]}
                    textAlign="right"
                  >
                    {frontMatter.readingTime.text}
                  </Text>
                </Flex>
                <Flex w="100%" mt={2} mb={4}>
                  {frontMatter.tags.map((tag, i) => {
                    return (
                      <Tag key={i} mr={2}>
                        {tag}
                      </Tag>
                    );
                  })}
                </Flex>
              </Stack>
            </>
          )}
          {children}
        </Flex>
      </Stack>
    </Container>
  );
}
