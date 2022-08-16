import React, { useState } from 'react';
import {
  Container, TaskList, StikeTitle, StikeText
} from './styles';

import { data } from "./data"
import { ToDoList } from '_components/ToDoList';

export const Today: React.FC = () => {
  const [toDoList, setToDoList] = useState(data);

  /* ---------- Toggle Task Completion ---------- */
  const handleToggle = (id) => {
    console.log(id, "id")
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  /* -------- Delete Completed Tasks -------- */
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  return (
    <Container>
      <h1>Today</h1>

      <p>4/6 completed</p>

      <TaskList>
        {toDoList.map((dataItem) => (
          <li>
            {/* <img src="/svg/checklist.svg" alt="checklist icon" /> */}
            <input type="checkbox" onClick={() => handleToggle(dataItem.id)} />

            <div>
              {dataItem.complete ?
                <StikeTitle>{dataItem.title}</StikeTitle>

                :

                <h1>{dataItem.title}</h1>
              }

              {dataItem.complete ?
                <StikeText>{dataItem.description}</StikeText>

                :

                <p>{dataItem.description}</p>
              }
            </div>

            <button onClick={handleFilter}>Delete</button>
          </li>
        ))}
      </TaskList>
    </Container>
  );
};
