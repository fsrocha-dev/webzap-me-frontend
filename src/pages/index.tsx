import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import { HeroBenefits } from '../components/HeroBenefits'
import { LinkGenerator } from '../components/LinkGenerator'
import { CallActionButton, HomeHero } from './styles/home'

const Home: NextPage = () => {

  const LinkGeneratorAnchor = useRef<null | HTMLDivElement>(null)

  const goToBenefits = () => {
    LinkGeneratorAnchor.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
      <Head>
        <title>WebZapMe | Rastreamento de leads via link do zap</title>
      </Head>
      <HomeHero>
        <span>Dê um up no seu negócio com o WebZapMe</span>
        <h1>Gere um link grátis do WhatsApp <RiWhatsappLine /> </h1>
        <CallActionButton onClick={goToBenefits}>
          Gerar link do Zap
        </CallActionButton>
      </HomeHero>
      <HeroBenefits title="Aumente suas vendas com links do Zap" />
      <LinkGenerator LinkGeneratorAnchor={LinkGeneratorAnchor}  />
    </>
  )
}

export default Home
