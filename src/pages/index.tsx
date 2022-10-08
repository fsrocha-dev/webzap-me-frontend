import type { NextPage } from 'next'
import Head from 'next/head'
import { RiWhatsappLine } from 'react-icons/ri'
import { LinkGenerator } from '../components/LinkGenerator'
import { CallActionButton, HomeHero } from './styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WebZapMe | Rastreamento de leads via link do zap</title>
      </Head>
      <HomeHero>
        <span>Dê um up no seu negócio com o WebZapMe</span>
        <h1>Gere um link grátis do WhatsApp <RiWhatsappLine /> </h1>
        <CallActionButton>
          Gerar link do Zap
        </CallActionButton>
      </HomeHero>
      <LinkGenerator />
    </>
  )
}

export default Home
