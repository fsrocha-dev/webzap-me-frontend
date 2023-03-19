import Image from "next/image"
import { ActiveLink } from '../ActiveLink'
import { LoginModal } from "../Modals/Login"
import { RegisterModal } from "../Modals/Register"
import { HeaderContainer, HeaderContent, Nav } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image 
          src="/images/logo.svg" 
          alt="WebZapMe" 
          layout="fixed" 
          width={190} 
          height={183} />
        <Nav>
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/planos" prefetch>
            <a>Planos</a>
          </ActiveLink>
        </Nav>
        <LoginModal />
        <RegisterModal />
      </HeaderContent>
    </HeaderContainer>
  )
}