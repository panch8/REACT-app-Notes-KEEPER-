import React, { useState } from "react";
import Footer from "./footer";
import Heading from "./heading";
import Note from "./note";
// import notes from "../notes";
import CreateArea from "./createArea";

function App() {
  const [notes, setNotes] = useState([]);

  // done deletion
  function handleDelete(e) {
    const idToBeDeleted = Number(e.target.id);
    setNotes((prev) => prev.splice(idToBeDeleted, 1) && [...prev]);
  }
  return (
    <div>
      <Heading />

      <CreateArea setNotes={setNotes} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClic={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
