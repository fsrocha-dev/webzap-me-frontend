import Image from "next/image"
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
          <a className="active" href="#">Home</a>
          <a href="#">Preço</a>
        </Nav>
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}