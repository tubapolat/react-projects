import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { deleteNote, toggle } from "../redux/notes/notesSlice";
import { useDispatch } from "react-redux";

export const Note = ({ task, index, setUpdateData }) => {
  const dispatch = useDispatch();
  const markDone = (id) => {
    dispatch(toggle(id));
  };
  const deleteTask = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    <React.Fragment key={task.id}>
      <div
        className="col-4 taskBg card ms-3"
        style={{
          backgroundColor: task.colour,
          width: "18rem",
          height: "18rem",
        }}
      >
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
        <div className={("card-text ", task.isDone ? "done" : "")}>
          <span className="taskNumber">{index + 1}</span>
          <span className="taskText">{task.title}</span>
        </div>
      </div>
    </React.Fragment>
  );
};
