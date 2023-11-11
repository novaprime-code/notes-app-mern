import {useState} from "react";
import "./App.css";
import { type } from "os";
type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () =>{
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Note Title 1",
      content: "Note Content 1",
    },
    {
      id: 2,
      title: "Note Title 2",
      content: "Note Content 2",
    },
    {
      id: 3,
      title: "Note Title 3",
      content: "Note Content 3",
    },
    {
      id: 4,
      title: "Note Title 4",
      content: "Note Content 4",
    },
    
  ]);
  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="Title" required />
        <textarea placeholder="Content" rows={10} required />
        <button type="submit"> 
          Add Note
        </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="note-header">
              <button>X</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}

        {/* <div className="note-item">
          <div className="note-header">
            <button>X</button>
          </div>
          <h2>Note Title</h2>
          <p>Content Preview</p>

        </div> */}

      </div>
    </div>
  )
};

export default App;
