import { useContext } from 'react';
import { RiCloseLine, RiLoginCircleLine, RiUser3Line } from 'react-icons/ri';
import UserContext from '../../contexts/UserContext';
import { setLocalStorageValue } from '../../utils/LocalStorage';
import { Button } from "./styles";

type ButtonProps = {
  openModal: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export function SignInButton({openModal}: ButtonProps) {
  const {userLoggedIn, setUserLoggedIn} = useContext(UserContext);

  function logout() {
    setLocalStorageValue('loggedUser', null)
    setUserLoggedIn(null)
  }

  return userLoggedIn ? (
    <Button onClick={logout}>
      <RiUser3Line />
      {userLoggedIn.username}
      <RiCloseLine className='close-icon' />
    </Button>
  ) : (
    <Button onClick={() => openModal()} >
      <RiLoginCircleLine />
      Fazer Login
    </Button>
  )
}