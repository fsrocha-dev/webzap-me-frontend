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

  .zap-link {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.blue};
  }

  .zap-link,
  .zap-qrcode {
    display: flex;
    justify-content: center;
    margin: 1.8rem 0;
  }

  .error-message {
    color: ${props => props.theme.colors.red};
    font-size: 12px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 10px;
  }

  .close {
    border: none;
    background: transparent;
    text-decoration: underline;

    margin: 0 1rem;

    color: ${props => props.theme.colors.secundary};
  }

  .button {
    border-radius: 8px;
    border: none;
    background: ${props => props.theme.colors.green};
    padding: 0.5rem 1rem;

    transition: 0.2s;

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
  .copy-qrcode {
    background: ${props => props.theme.colors.gray_100};
  }
`;
