import { TitleText } from '../../../../components/Typography';
import { CoffeeCard } from '../CoffeeCard';
import { CoffeeList, OurCoffeesContainer } from './styles';

function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  );
}

export { OurCoffees };
