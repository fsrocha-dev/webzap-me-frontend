import axios from 'axios';
import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import AppContext from '../../../contexts/AppContext';
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
    maxWidth: '430px'
  },
};

interface IUserState {
  name: string;
  last_name: string;
  commercial_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export function RegisterModal() {
  const { setLoginModelIsOpen, registermodalIsOpen, setRegisterModalIsOpen } = useContext(AppContext);

  const [newUser, setNewUser] = useState<IUserState>({
    name: '',
    last_name: '',
    commercial_name: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [message, setMessage] = useState<string | null>(null)

  function closeModal() {
    setRegisterModalIsOpen(false);
  }

  const handleRegisterUser = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage('')

    try {
      const URL = 'http://localhost:5001/users'

      await axios.post(URL, newUser)

      closeModal()
    } catch (error: any) {
      setMessage(error.response.data)
    } finally {
      setLoginModelIsOpen(true)
    }

  }

  const updateForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name
    const value = event.target.value
    setNewUser({ ...newUser, [key]: value })
  }

  return (
    <>
      <Modal
        isOpen={registermodalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal register"
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>Criar uma conta</h2>
          <p>Crie sua conta e já começe a melhorar seu site</p>
          <form onSubmit={handleRegisterUser}>
            <input name='name' type="text" onChange={updateForm} value={newUser.name} placeholder='Nome' />
            <input name='last_name' type="text" onChange={updateForm} value={newUser.last_name} placeholder='Sobrenome' />
            <input name='commercial_name' type="text" onChange={updateForm} value={newUser.commercial_name} placeholder='Nome comercial' />
            <input name='email' type="text" onChange={updateForm} value={newUser.email} placeholder='Email' />
            <input name='password' type="password" onChange={updateForm} value={newUser.password} placeholder='Senha' />
            <input name='confirm_password' type="password" onChange={updateForm} value={newUser.confirm_password} placeholder='Confirmar senha' />
            <div className='error-message'>
              {message}
            </div>
            <div className='footer'>
              <button className='close' onClick={closeModal}>Fechar</button>
              <button className='register' type='submit'>Cadastrar</button>
            </div>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}