import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/core';

const StreamEntryPreview = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  const slug = frontMatter.__resourcePath
    .replace('stream/', '')
    .replace('.mdx', '');

  return (
    <NextLink href={`stream/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Stack>
              <Heading
                size="sm"
                as="h3"
                mb={2}
                fontWeight="medium"
                textDecoration="underline"
              >
                {title}
              </Heading>
              <Flex>
                {frontMatter.tags.map((tag, i) => {
                  return (
                    <Tag key={i} mr={2}>
                      {tag}
                    </Tag>
                  );
                })}
              </Flex>
            </Stack>
          </Flex>
          <Text fontSize="xl" color={secondaryTextColor[colorMode]}>
            {summary}
          </Text>
          <Stack>
            <Text fontSize="lg" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Stack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default StreamEntryPreview;
