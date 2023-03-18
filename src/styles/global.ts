import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *::selection {
    color: white;
    background: ${props => props.theme.colors.green};
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100vh;
    min-height: 100vh;
  }

  body html #root {
    height: 100%;
  }
  
  body, input, textarea, select, button {
    font: 400 1rem Poppins, sans-serif;
  }

  input, textarea {
    width: 100%;
    padding: 10px 10px;
    margin: 5px 0;

    background: ${props => props.theme.colors.gray_100};

    border: none;
    border-radius: 8px;

    resize: none;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-size: 15px;
      color: ${props => props.theme.colors.placeHolder};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.colors.placeHolder};
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      font-size: 14px;
      color: ${props => props.theme.colors.placeHolder};
}
  }

  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
