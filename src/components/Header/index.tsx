import { HeaderButtonsContainer, HeaderContainer } from './styles';

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';

function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeDeliveryLogo} alt="" />

        <HeaderButtonsContainer>
          <button>oi</button>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}

export { Header };
