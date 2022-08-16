import styled from 'styled-components';

export const Container = styled.div`
`;

export const TaskList = styled.ul`
  padding-top: 20px;
  
  li {
    display: flex;
    column-gap: 10px;

    div {
      border: 1px #E3E3E3 solid;
      border-radius: 8px;
      
      padding: 8px 19px 19px 19px;

      width: 100%;
    }
  }

  h1 {
    color: #000000;

    font-size: 24px;
  }

  p {
    font-size: 22px;
    padding-top: 9px;
  }
`;
