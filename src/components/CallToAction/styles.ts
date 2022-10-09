import styled from 'styled-components';

export const CallToActionContainer = styled.section`
  height: 25rem;
  background: #f4f8f3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span,
  h1 {
    margin: 1rem 0;
  }

  button {
    margin: 2rem 0;
  }

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.green};
  }

  h1 {
    font-size: 2.5rem;
  }
`;
export const CallToActionContent = styled.section`
  max-width: 1120px;
  padding: 0 3rem;
  text-align: center;
`;
