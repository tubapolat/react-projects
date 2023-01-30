import React from "react";
import { ToDo } from "./ToDo";
const ToDoList = ({ toDos, markDone, setUpdateData, deleteTask }) => {
  return (
    <>
      {toDos &&
        toDos
          .map((task, index) => {
            return (
              <ToDo
                task={task}
                index={index}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
              />
            );
          })}
    </>
  );
};

export default ToDoList;
