import { FcCollect, FcLink, FcPositiveDynamic } from 'react-icons/fc';
import { Card, Cards, HeroBenefitsContainer, HeroBenefitsContent } from './styles';

interface IHero {
  title: string
}

export function HeroBenefits(props: IHero) {
  return (
    <HeroBenefitsContainer>
      <HeroBenefitsContent>
        <h2>
          { props.title }
        </h2>
        <Cards>
          <Card>
            <FcCollect />
            <span>
              Ponto de contato inicial em seu site
            </span>
          </Card>
          <Card>
            <FcLink />
            <span>
              Links de contato em plataformas de mídia social
            </span>
          </Card>
          <Card>
            <FcPositiveDynamic />
            <span>
              De um up em suas campanhas de marketing direcionadas
            </span>
          </Card>
        </Cards>
      </HeroBenefitsContent>
    </HeroBenefitsContainer>
  )
}