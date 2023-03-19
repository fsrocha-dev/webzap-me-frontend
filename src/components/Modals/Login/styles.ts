import styled from 'styled-components';

export const ModalContent = styled.div`
  p {
    padding: 1rem 0;
    button {
      border: none;
      background-color: transparent;
      text-decoration: underline;
    }
  }

  .error-message {
    color: ${props => props.theme.colors.red};
    font-size: 12px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }

  .close {
    border: none;
    background: transparent;
    text-decoration: underline;

    margin: 0 1rem;

    color: ${props => props.theme.colors.secundary};
  }

  .login {
    border-radius: 8px;
    border: none;
    background: ${props => props.theme.colors.green};
    padding: 0.5rem 1.5rem;

    transition: 0.2s;

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
