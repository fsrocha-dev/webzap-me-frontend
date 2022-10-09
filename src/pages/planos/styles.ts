import styled from 'styled-components';

export const PricingContainer = styled.section`
  max-width: 1120px;
  height: 35rem;
  margin: 0 auto;
  padding: 4rem 2rem;

  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;

  p:first-child {
    font-size: 1.7rem;
    font-weight: bold;
    color: ${props => props.theme.colors.green};
  }

  p:nth-child(2) {
    font-size: 12px;
    color: ${props => props.theme.colors.secundary};
    margin: 0.7rem 0;
  }

  h3:first-child {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  .second-session {
    margin: 1rem 0 0 0;
    padding: 1rem 0;
    border-top: 1px solid ${props => props.theme.colors.border};

    font-size: 1rem;
    font-weight: bold;
    text-align: left;
  }
  ul li {
    text-align: left;
    padding: 0.3rem 0;
    display: flex;
    align-items: center;

    svg:first-child {
      font-size: 20px;
      color: ${props => props.theme.colors.blue};
    }

    span {
      margin: 0 0 0 0.5rem;
    }
  }
`;

export const CardPlan = styled.article`
  width: 22rem;
  height: 30rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 1rem 1.5rem;

  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%);

  ul li {
    list-style: none;
  }
`;
