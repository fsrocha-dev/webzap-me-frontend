import { lighten, shade } from 'polished';

const light = {
  title: 'light',
  defaultRadiusBorder: '3rem',

  colors: {
    primary: '#f7f7f7',
    secundary: '#747474',

    green: '#36C9B9',

    background: '#fff',
    text: '#213647',

    border: lighten(0.45, '#747474'),

    link: '#213647',
    linkHover: '#36C9B9'
  }
};

export default light;
