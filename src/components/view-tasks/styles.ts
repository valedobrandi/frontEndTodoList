import styled from 'styled-components';

import bgDark from '../../assets/bg-mobile-dark.jpg';
import bgLight from '../../assets/bg-mobile-light.jpg';

type PropsWrapper = {
  isDarkTheme: boolean,
};

export const Wrapper = styled.main<PropsWrapper>`
  height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => (props.isDarkTheme ? bgDark : bgLight)}); 
  background-repeat: no-repeat;
  background-size: contain;
`;

export const HeaderWrapper = styled.header`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  transform: scale(1, 1.1);
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 12px;
  color: #E4E5F1;
`;

export const ButtonTheme = styled.button`
  border: none;
  background: none;
`;

export const InputTask = styled.input`
  border: none;
  margin-top: 40px;
  border-radius: 4px;
  height: 44px;
  color: ${(props) => props.theme.colors.primaryText};
  padding: 0 16px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 16px;
  grid-template-areas: 
  "counter button" 
  "filter filter";
`;

export const CounterTasksToLeft = styled.span`
  border-radius: 0 0 0 4px;
  padding: 16px;
  color: ${(props) => props.theme.colors.secundaryText};
  background-color: ${(props) => props.theme.colors.primary};
  grid-area: counter;
  text-align: left;
`;

export const ClearCompleted = styled(CounterTasksToLeft)`
  grid-area: button;
  border-radius: 0 0 4px 0;
  text-align: right;

  button {
    border: none;
    padding: 0;
    color: ${(props) => props.theme.colors.secundaryText};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const FilterTasks = styled.div`
  padding: 16px;
  color: ${(props) => props.theme.colors.secundaryText};
  border-radius: 4px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  grid-area: filter;

  span {
    margin: 8px;
  }

  span > a {
    color: ${(props) => props.theme.colors.secundaryText};
    text-decoration: none;
  }
`;
