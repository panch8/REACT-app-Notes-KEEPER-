import React, { useState } from "react";

function CreateArea(props) {
  const [noteObj, setNoteObj] = useState({ title: "", content: "" });

  //done handlechange
  function handleChange(event) {
    const { name, value } = event.target;
    // name === "title" &&
    //   setNoteObj((prev) => ({ title: value, content: prev.content }));
    // name === "content" &&
    //   setNoteObj((prev) => ({ title: prev.title, content: value }));
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
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={noteObj.title}
        />
        <textarea
          name="content"
          placeholder="Content"
          rows="3"
          onChange={handleChange}
          value={noteObj.content}
        />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
