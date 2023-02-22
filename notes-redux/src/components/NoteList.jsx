import React from "react";
import { Note } from "./Note";

const NoteList = ({ notes, setUpdateData }) => {
  return (
    <div className="row">
      {notes &&
        notes.map((task, index) => {
          return (
            <Note task={task} index={index} setUpdateData={setUpdateData} />
          );
        })}
    </div>
  );
};

export default NoteList;
