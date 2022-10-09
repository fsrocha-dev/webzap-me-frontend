import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    defaultRadiusBorder: string;

    colors: {
      primary: string;
      secundary: string;

      gray_100: string;
      gray_200: string;
      green: string;
      blue: string;

      background: string;
      text: string;

      link: string;
      linkHover: string;

      border: string;

      placeHolder: string;
    };
  }
}
