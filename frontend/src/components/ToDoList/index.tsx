import React, { useState } from 'react';
import {
  Container, TaskList
} from './styles';


export const ToDoList: React.FC = () => {
  return (
    <Container>
      <TaskList>
        <li>
          <img src="/svg/checklist.svg" alt="checklist icon" />
          
          <div>
            <h1>Cooking a salmon sushi</h1>
            <p>Salmon and tuna i think is good for dinner, i wanna make it today :D</p>
          </div>
        </li>
      </TaskList>
    </Container>
  );
};
