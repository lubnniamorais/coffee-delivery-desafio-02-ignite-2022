import { CoffeeCardContainer } from './styles';

import coffeeTraditionalExpress from '../../../../assets/coffee-expresso-tradicional-img.svg';

function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeTraditionalExpress} alt="" />
    </CoffeeCardContainer>
  );
}

export { CoffeeCard };
