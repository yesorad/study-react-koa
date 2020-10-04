import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './common.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  *{
    font-family: unset;
    outline: none;
  }
  html{
    height: 100%;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }  
`;

export default GlobalStyles;
