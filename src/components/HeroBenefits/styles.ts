import styled from 'styled-components';

export const HeroBenefitsContainer = styled.section`
  height: 25rem;
  margin: 3.2rem 0 2.5rem 0;
`;

export const HeroBenefitsContent = styled.div`
  max-width: 1120px;
  height: 25rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: baseline;

  h2 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const Card = styled.div`
  width: 17rem;
  height: 14rem;
  background: #eef2f8;
  padding: 1rem 1rem;
  border: none;
  border-radius: 16px;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.2s;

  svg {
    margin: 0 0 1.5rem 0;
    font-size: 3.3rem;
  }

  :hover {
    box-shadow: 10px 10px 30px 0 rgb(174 174 192 / 40%), -10px -10px 30px 0 #fff;
  }
`;
