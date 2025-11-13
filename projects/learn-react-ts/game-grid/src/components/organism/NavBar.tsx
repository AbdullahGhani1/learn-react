import logo from '@assets/logo.webp';
import { HStack, Image, Text } from '@chakra-ui/react';

const NavBar = () => {
   return (
      <HStack>
         <Image src={logo} boxSize="60px" />
         <Text fontSize="2xl" fontWeight="bold">
            Game Grid
         </Text>
      </HStack>
   );
};

export default NavBar;
