import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import useSSR from '../../hooks/useSSR';

export function Header() {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion  = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [isSSR] = useSSR();


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

{ !isSSR  && !isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />

      { !isSSR && isWideVersion && (<SearchBox />) }

      <Flex align="center" ml="auto">
          <NotificationsNav />
          <Profile showProfileData={!isSSR && isWideVersion} />
      </Flex>
    </Flex>
  );
}