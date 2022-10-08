import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    defaultRadiusBorder: string;

    colors: {
      primary: string;
      secundary: string;

      green: string;

      background: string;
      text: string;

      link: string;
      linkHover: string;

      border: string;
    };
  }
}
