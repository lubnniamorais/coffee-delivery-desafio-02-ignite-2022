import { ShoppingCart } from 'phosphor-react';
import glassCoffeeImg from '../../../../assets/glass-coffee.svg';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { RegularText } from '../../../../components/Typography';

import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles';
import { useTheme } from 'styled-components';

function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia.
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={colors['brand-yellow-dark']}
            />
            <p>a</p>
            <p>a</p>
            <p>a</p>
          </BenefitsContainer>
        </div>

        <img src={glassCoffeeImg} alt="" />
      </IntroContent>
    </IntroContainer>
  );
}

export { Intro };
