import { RiLoginCircleLine, RiUser3Line } from 'react-icons/ri'
import { Button } from "./styles"

export function SignInButton() {
  const isUserLoggedIn = false
  return isUserLoggedIn ? (
    <Button>
      <RiUser3Line />
      Frank Rocha
    </Button>
  ) : (
    <Button>
      <RiLoginCircleLine />
      Fazer Login
    </Button>
  )
}