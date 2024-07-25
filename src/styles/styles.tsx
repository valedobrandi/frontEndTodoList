import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 1rem;
        font-family: "JosefinSans";
      }

    body {
      background-image: ${(props) => props.theme.colors.backgroundImage};
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
      border: 1px solid;
      border-color: ${(props) => props.theme.colors.primaryText};
      padding: 4px;
      border-radius: 25px;
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
      color: grey
    }
`;

export const Container = styled.div`
  display: block;
  width: 30rem;
  height: auto;
  margin: 120px auto;
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
  color: ${(props) => props.theme.colors.primaryText};
  border: none;
  margin-bottom: 2rem;
  box-shadow:  e6e5e9 0px 8px 15px 4px;

  ::placeholder {
    color: ${(props) => props.theme.colors.primaryText};
  
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: #777A92;
  padding: 0.5rem;
  border-color: ${(props) => props.theme.colors.borderColor};
  box-shadow: e6e5e9 0px 8px 15px 4px;

  a {
    color: ${(props) => props.theme.colors.primaryText};
  }

  span > a[href="/active"] {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Li = styled(Footer)`
  border-bottom: 0.1rem solid;
  border-color: ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.primaryText};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;

  input {
    margin: 0 10px;
    appearance: none;
  }

  label {
    display: flex; 
  }

  label:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.borderColor};
    margin-right: 2rem;
  }

  input:checked + label:before {
    background-image: ${(props) => props.theme.svg.backgroundImage};;
    background-position: center;
    background-size: 18px;
    background-repeat: no-repeat;
  }

  input:checked + label {
    text-decoration: line-through;
    text-decoration-color: red;
    text-decoration-thickness: 0.1rem;
    color: ${(props) => props.theme.colors.secondaryText};
  }
  
  button {
    margin-left: 30px;

    img {
      width: 10px;
    }
  }
`;
