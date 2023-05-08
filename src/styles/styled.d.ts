import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText:string,
      secundaryText:string,
      primary:string,
      secundary:string,
      background:string,
      borderColor: string,
    }
  }
}
