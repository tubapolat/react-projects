import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteToDo, toggle } from "../redux/toDos/toDosSlice";
import { useDispatch } from "react-redux";

export const ToDo = ({ task, index, setUpdateData }) => {
  const dispatch = useDispatch();
  const markDone = (id) => {
    dispatch(toggle(id));
  };
  const deleteTask = (id) => {
    dispatch(deleteToDo(id));
  };
  return (
    <React.Fragment key={task.id}>
      <div className="col taskBg" style={{ backgroundColor: task.colour }}>
        <div className={task.isDone ? "done" : ""}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>
        <div className="iconsWrap">
          <span
            title="Completed / Not Complieted"
            onClick={(e) => markDone(task.id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
          {task.isDone ? null : (
            <span
              title="Edit"
              onClick={() =>
                setUpdateData({
                  id: task.id,
                  title: task.title,
                  isDone: task.isDone,
                })
              }
            >
              <FontAwesomeIcon icon={faPen} />{" "}
            </span>
          )}

          <span title="Delete" onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
