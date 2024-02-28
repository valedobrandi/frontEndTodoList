import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "JoseFinSans";
  src: url("./fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "JoseFinSans", sans-serif;
        font-size: 1rem;
      }

    body {
      background-image:  ${(props) => props.theme.colors.backgroundImage};
      background-color: ${(props) => props.theme.colors.background};
      background-size: cover;
      background-size: 100% 250px;
      background-repeat: no-repeat;
    }

    #root {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;

      p:hover {
          color: blue;
        }
      
    }


    p {
      color: ${(props) => props.theme.colors.primaryText};
    }

    a {
      text-decoration: none;
      color: grey
    }
`;

export const Container = styled.div`
  display: block;
  width: 30rem;
  height: auto;
  margin: 60px auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  
  h1 {
    font-size: 2rem;
  }

  img {
    height: 20px;
  }
  
  button {
    background-color: transparent;
  }

`;

export const Input = styled.input`
  padding: 0.8rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  margin-bottom: 2rem;
  box-shadow:  rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  ::placeholder {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #777A92;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 8px 15px 4px;

  a {
    color: ${(props) => props.theme.colors.primaryText};
  }

  a:hover {
    color: blue;
  }

  span > a[href="/active"] {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Li = styled(Footer)`
  border-bottom: 0.1rem solid #383a4f;
  color: ${(props) => props.theme.colors.secondary};
  justify-content: flex-start;
 

  input {
    margin: 0 10px;
    appearance: none;
  }

  label {
    margin-bottom: 5px;
    display: flex; 
    align-items: center; 
  }

  label:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #4D5066;
    display: inline-block;
    margin-right: 15px;
  }

  input:checked + label:before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='9'%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='2' d='M1 4.304L3.696 7l6-6'/%3E%3C/svg%3E");
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;
  }

  input:checked + label {
    text-decoration: line-through;
  }
  
  button {
    display: none;
  }
`;
