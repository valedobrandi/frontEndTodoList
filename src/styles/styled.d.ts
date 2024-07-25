import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundImage: string,
      primaryText: string,
      secondaryText: string,
      primary: string,
      secondary: string,
      background: string,
      borderColor: string,
    },
    svg: {
      backgroundImage: string
    }
  }
}
