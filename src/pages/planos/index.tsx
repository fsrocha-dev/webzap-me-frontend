import { RiArrowUpCircleLine, RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { CallToAction } from '../../components/CallToAction'
import { HeroBenefits } from '../../components/HeroBenefits'
import { CardPlan, PricingContainer } from './styles'

export default function Planos() {
  return(
    <>
      <CallToAction title='Qualidade, segurança com melhor preço garantido' />
      <PricingContainer>
        <CardPlan>
          <p>Grátis</p>
          <div>
            <h3>R$ 0,00</h3>
            <p>Estamos em beta! por enquanto tudo é grátis</p>
            <p>
              <RiArrowUpCircleLine /> Suba até <b>3</b> links
            </p>
          </div>
          <div className='second-session'>Está incluso nesse plano</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> 1 Campanha ativa </span>
            </li>
            <li>
              <RiCheckLine />
              <span> 3 Links por campanha </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Tracking de leads  </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Gráficos de acesso  </span>
            </li>
          </ul>
        </CardPlan>
      </PricingContainer>
      <HeroBenefits title="Veja como potencializar seu site" />
    </>
  )
}