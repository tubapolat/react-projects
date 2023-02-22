import React from "react";
import { ToDo } from "./ToDo";

const ToDoList = ({ toDos, setUpdateData }) => {
  return (
    <div className="row">
      {toDos &&
        toDos.map((task, index) => {
          return (
            <ToDo task={task} index={index} setUpdateData={setUpdateData} />
          );
        })}
    </div>
  );
};

export default ToDoList;
