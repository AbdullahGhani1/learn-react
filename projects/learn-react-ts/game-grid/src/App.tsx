import { Grid, GridItem } from '@chakra-ui/react';

import NavBar from './components/organism/NavBar';

function App() {
   return (
      <Grid
         templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
         }}
         gap="4"
         padding="4"
      >
         <GridItem area="nav">
            <NavBar />
         </GridItem>
         <GridItem
            area="aside"
            bg="gold"
            display={{ base: 'none', lg: 'block' }}
         >
            Aside
         </GridItem>
         <GridItem area="main" bg="blue">
            Main
         </GridItem>
      </Grid>
   );
}

export default App;
