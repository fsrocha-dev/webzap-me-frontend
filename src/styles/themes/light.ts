import { lighten, shade } from 'polished';

const light = {
  title: 'light',
  defaultRadiusBorder: '3rem',

  colors: {
    primary: '#f7f7f7',
    secundary: '#747474',

    gray_100: '#eeeeee',
    gray_200: '#dedede',
    red: '#f87171',
    green: '#36C9B9',
    blue: '#42a5f5',

    background: '#fff',
    text: '#213647',

    border: lighten(0.45, '#747474'),

    link: '#213647',
    linkHover: '#36C9B9',

    placeHolder: '#9ca3af'
  }
};

export default light;
