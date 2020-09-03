import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/core';

import DefaultLayout from '../layouts/DefaultLayout';
import StreamEntryPreview from '../components/StreamEntryPreview';
import { defaultTitle } from '../next-seo.config';

// // eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as streamPosts } from './stream/**/*.mdx';

const title = `Feed – ${defaultTitle}`;
const description =
  'Unfiltered ramblings, ideas, and field notes on software, tech, automation, and more';

const Stream = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'black',
    dark: 'white',
  };

  const filteredStreamPosts = streamPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <DefaultLayout frontMatter={{ __resourcePath: '/stream' }}>
      <Heading my={4}>Data Stream</Heading>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        width="100%"
        maxWidth="800px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          maxWidth="800px"
        >
          <InputGroup my={4} mr={4} w="100%">
            <Input
              aria-label="Search stream entries"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search stream entries"
            />
            <InputRightElement>
              <Icon name="search" color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          maxWidth="800px"
          mt={8}
        >
          {!filteredStreamPosts.length && 'No posts found.'}
          {filteredStreamPosts.map((frontMatter) => (
            <StreamEntryPreview key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Stack>
    </DefaultLayout>
  );
};

export default Stream;
