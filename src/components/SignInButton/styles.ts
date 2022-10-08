import { lighten } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  height: 2.7rem;
  border-radius: ${props => props.theme.defaultRadiusBorder};
  background: ${props => props.theme.colors.linkHover};
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: normal;

  svg {
    width: 18px;
    height: 18px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  transition: 0.2s;

  &:hover {
    background: ${props => lighten(0.1, props.theme.colors.linkHover)};
  }
`;
