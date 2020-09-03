import React from 'react';
import useSWR from 'swr';
import NextLink from 'next/link';
import { useColorMode, Icon, Text, Skeleton, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { SiSpotify } from 'react-icons/si';

import { CommandLink } from './MDX';
import { blinkVisibility } from '../styles/animations';

const SpotifyIcon = (props) => <Icon as={SiSpotify} size="24px" {...props} />;
const SpotifyStatusIcon = styled(SpotifyIcon)`
  color: ${(props) =>
    props.colorized ? (props.isPlaying ? '#1DB954' : 'white') : 'black'};
`;

const Cursor = (props) => (
  <Text as="span" visibility={props.isPlaying} px="2px" {...props}>
    _
  </Text>
);

const BlinkingCursor = styled(Cursor)`
  animation: ${blinkVisibility} 1s steps(2, start) infinite;
`;

const SpotifyNowPlaying = (props) => {
  const { data } = useSWR(
    '/api/spotify/np',
    async (...args) => {
      const res = await fetch(...args);
      return res.json();
    },
    { refreshInterval: 10000 }
  );
  const { colorMode } = useColorMode();
  return (
    <>
      <Skeleton isLoaded={data} height="20px" my="10px" {...props}>
        <Stack direction="row" alignItems="center">
          <Text as="span" fontSize="xl" mb={4}>
            <SpotifyStatusIcon
              colorized={colorMode == 'dark'}
              isPlaying={data?.title}
              mr={2}
            />
            <CommandLink
              maxWidth="190px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              href={data?.url}
              isExternal
            >
              {data && (data?.title || 'Not Playing')}
            </CommandLink>{' '}
            &mdash;{' '}
            <Text
              as="span"
              //   color={colorMode == 'dark' ? 'gray.400' : 'gray.600'}
              maxWidth="190px"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {data && (data?.artist || 'Spotify')}
            </Text>
            {/* <BlinkingCursor isPlaying={data?.title} /> */}
          </Text>
        </Stack>
      </Skeleton>
    </>
  );
};

export default SpotifyNowPlaying;
