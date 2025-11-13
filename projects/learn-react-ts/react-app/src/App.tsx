import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import './App.css';
import Like from './components/Like';
import ExpandableText from './components/ExpandableText';

function App() {
   const [alertVisible, setAlertVisible] = useState(false);
   const ohioCities: string[] = [
      'Columbus',
      'Cleveland',
      'Cincinnati',
      'Toledo',
      'Akron',
      'Dayton',
      'Parma',
      'Canton',
      'Youngstown',
      'Lorain',
      'Hamilton',
      'Springfield',
      'Kettering',
      'Elyria',
      'Lakewood',
      'Middletown',
      'Dublin',
      'Mentor',
      'Mansfield',
      'Newark',
      'Warren',
      'Lima',
      'Huber Heights',
      'Marion',
      'Grove City',
      'Lancaster',
      'Delaware',
      'Hilliard',
      'Upper Arlington',
      'Westlake',
   ];
   const handleSelectedItem = (item: string) => {
      console.log(item);
   };
   return (
      <main>
         <ExpandableText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            pariatur vitae, fugit sint molestiae non, cumque sit, libero atque
            repellendus recusandae porro aliquid vel aspernatur autem repellat
            quis. Repudiandae, eaque expedita natus ducimus id officiis
            exercitationem omnis, nemo recusandae, dolorem architecto facere
            dolor. Expedita quo modi veritatis eos nostrum autem possimus iure
            tenetur repudiandae, distinctio voluptatum, doloribus dolore nobis.
            Blanditiis, amet. Voluptatum praesentium repudiandae molestiae
            repellat! Eos ea perferendis sed amet omnis odio? Doloribus, omnis
            libero voluptatum itaque nulla deserunt unde aperiam provident ipsum
            earum, repellat minus placeat corporis aliquid nesciunt recusandae.
            Corrupti omnis, eaque sunt voluptatum laudantium illo dolore.
         </ExpandableText>
         <Like />
         <Button color="primary" onClick={() => setAlertVisible(!alertVisible)}>
            Toggle Alert
         </Button>
         {alertVisible && (
            <Alert onClose={() => setAlertVisible(false)}>Hello World</Alert>
         )}
         <ListGroup
            items={ohioCities}
            heading="Cities"
            onSelectedItem={handleSelectedItem}
         />
      </main>
   );
}

export default App;
