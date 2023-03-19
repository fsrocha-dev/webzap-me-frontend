import axios from 'axios';
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import AppContext from '../../../contexts/AppContext';
import UserContext from '../../../contexts/UserContext';
import { setLocalStorageValue } from "../../../utils/LocalStorage";
import { SignInButton } from "../../SignInButton";
import { ModalContent } from './styles';


const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
  },
};

interface IUserState {
  email: string;
  password: string;
}

export const LoginModal = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const { LoginModalIsOpen, setLoginModelIsOpen, setRegisterModalIsOpen } = useContext(AppContext);
  const [user, setUser] = useState<IUserState>({ email: '', password: '' })
  const [message, setMessage] = useState<string | null>(null)

  function openModal() {
    setLoginModelIsOpen(true);
  }

  function afterOpenModal() { }

  function closeModal() {
    setLoginModelIsOpen(false);
  }

  function callRegisterModal() {
    setLoginModelIsOpen(false);
    setRegisterModalIsOpen(true);
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('')

    try {
      const URL = 'http://localhost:5001/auth/login'

      const { data } = await axios.post(URL, user)

      setUserLoggedIn(data)
      setLocalStorageValue('loggedUser', data)
      closeModal()
    } catch (error: any) {
      setMessage(error.response.data)
    }

  }

  return (
    <>
      <SignInButton openModal={openModal} />
      <Modal
        isOpen={LoginModalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Login"
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>Login</h2>
          <p>👋 Olá, seja bem vindo</p>
          <form onSubmit={handleLogin}>
            <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} placeholder='Seu email' />
            <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} placeholder='Sua senha' />
            <div className='error-message'>
              {message}
            </div>
            <p>
              Ainda não está cadastrado? <button onClick={callRegisterModal} type="button">Clique aqui</button>
            </p>
            <div className='footer'>
              <button className='close' onClick={closeModal}>Fechar</button>
              <button className='login' type='submit'>Logar</button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}