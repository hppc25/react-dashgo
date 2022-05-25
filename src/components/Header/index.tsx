import {useState, useEffect} from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {

  const isWideVersion  = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      { !isSSR && isWideVersion && (<SearchBox />) }

      <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile showProfileData={!isSSR && isWideVersion} />
      </Flex>
    </Flex>
  );
}