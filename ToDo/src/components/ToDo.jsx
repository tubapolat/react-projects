import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({ task, index, markDone, setUpdateData, deleteTask }) => {
  return (
    <React.Fragment key={task.id}>
      <div className="col taskBg">
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
