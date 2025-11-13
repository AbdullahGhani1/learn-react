import logo from '@assets/logo.webp';
import { HStack, Image } from '@chakra-ui/react';

import ColorModeSwitch from '../molecules/ColorModeSwitch';

const NavBar = () => {
   return (
      <HStack>
         <Image src={logo} boxSize="60px" />
         <ColorModeSwitch />
      </HStack>
   );
};

export default NavBar;
