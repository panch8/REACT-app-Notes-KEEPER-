import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [noteObj, setNoteObj] = useState({ title: "", content: "" });
  const [init, setInit] = useState(true);

  function handleInitClick() {
    setInit(!init);
  }

  //done handlechange
  function handleChange(event) {
    const { name, value } = event.target;
    setNoteObj((prev) => {
      return { ...prev, [name]: value };
    });
  }
  ///. DONE add item and show.

  function addItem(e) {
    props.setNotes((prev) => [...prev, noteObj]);
    e.preventDefault();
    setNoteObj({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          hidden={init}
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteObj.title}
        />
        <textarea
          name="content"
          placeholder="Content"
          rows={init ? "1" : "3"}
          onChange={handleChange}
          value={noteObj.content}
          onClick={handleInitClick}
        />
        <button hidden={init} onClick={addItem}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
