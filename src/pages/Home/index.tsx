import { OurCoffees } from './components/OurCoffees';
import { Intro } from './components/intro';

import { HomeContainer } from './styles';

function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  );
}

export { HomePage };
