import React from "react";
import { ToDo } from "./ToDo";

const ToDoList = ({ toDos, setUpdateData }) => {
  return (
    <>
      {toDos &&
        toDos.map((task, index) => {
          return (
            <ToDo task={task} index={index} setUpdateData={setUpdateData} />
          );
        })}
    </>
  );
};

export default ToDoList;
