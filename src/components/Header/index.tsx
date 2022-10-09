import Image from "next/image"
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from "../SignInButton"
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
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}