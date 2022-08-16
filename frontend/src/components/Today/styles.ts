import styled from 'styled-components';

export const Container = styled.div`
  padding: 37px 0 0 47px;

  & > h1 {
    color: #FF4F5A;
    
    font-size: 48px;
    font-weight: 700;

    line-height: 56px;

    padding-bottom: 22px;
  }

  p {
    color: #414141;

    font-size: 24px;
  }
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

export const StikeTitle = styled.h1`
  text-decoration: line-through;
`;

export const StikeText = styled.p`
  text-decoration: line-through;
`;
