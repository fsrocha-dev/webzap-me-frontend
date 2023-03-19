import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const LinkGeneratorContainer = styled.section`
  min-height: calc(550px - 4rem);
  padding: 2rem 2rem;

  display: block;
`;

export const LinkGeneratorHeader = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  h2 {
    font-size: 2rem;
  }
`;

export const LinkGeneratorContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-around;
`;

export const LinkGeneratorForm = styled.form`
  max-width: 400px;
  min-height: 495px;
  margin: 2rem 0;
  padding: 1rem 0.6rem;

  border: 1px solid ${props => shade(0.1, props.theme.colors.primary)};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  small {
    font-weight: normal;
    font-size: 11px;
    color: ${props => shade(0.7, props.theme.colors.gray_200)};
  }

  label {
    font-weight: bold;
    margin: 0.8rem 0;

    display: block;
  }

  .error-message {
    color: ${props => props.theme.colors.red};
    font-size: 12px;
  }
`;

export const DisplayedMessage = styled.div`
  font-size: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg:first-child {
    font-size: 3rem;
  }
`;

export const DevicePhone = styled.div`
  height: 100%;

  .marvel-device {
    width: 270px;
    height: 25rem;
    z-index: -1;

    .sensor {
      left: 86px;
    }

    .screen {
      background-image: url('./images/wa-background.png');
      background-size: cover;
      background-repeat: no-repeat;

      display: flex;
      flex-direction: column;
    }

    .screen-content {
      display: flex;
      align-items: flex-end;
      justify-content: right;

      padding: 0.5rem 0.5rem;
      flex: auto;

      .bubble-message {
        max-width: 85%;
        word-wrap: break-word;
        background: #dcf8c6;
        border-radius: 16px;
        padding: 0.7rem 0.5rem;

        font-size: 14px;
      }
    }

    .screen-header {
      background-color: #128c7e;
      height: 3rem;
      padding: 0.3rem 1rem;

      display: flex;
      flex-direction: row;
      gap: 10px;

      img {
        border-radius: 50%;
      }
      span {
        color: #ffffff;
        display: flex;
        align-items: center;
      }
    }

    .screen-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding: 0.5rem 0.5rem;
      .footer-input {
        background-color: #ffffff;
        border-radius: 16px;
        padding: 0.4rem 1rem;

        font-size: 14px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 210px;
      }
      .footer-send {
        width: 35px;
        height: 35px;
        background-color: #128c7e;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 22px;
        color: #ffffff;
      }
    }
  }
`;

export const GenerateButton = styled.button`
  height: 3.2rem;
  width: 100%;
  border-radius: ${props => props.theme.defaultRadiusBorder};
  background: ${props => props.theme.colors.linkHover};
  border: 0;
  margin-top: 20px;
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

export const EmojiButton = styled.button`
  height: 1.5rem;
  background: none;
  border: 0;
  margin: 10px 0;
  padding: 0.2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.secundary};
  font-weight: normal;
  font-size: 14px;
`;
