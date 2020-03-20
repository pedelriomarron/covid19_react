import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }: any) => theme.text};
  }
`;
