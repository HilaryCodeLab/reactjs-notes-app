import Search from './components/Search';
import NoteList from './components/NoteList';
import Header from './components/Header';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([{
      id:nanoid(),
      text: 'this is first note',
      date: '25/12/2021'  
    },
    {
      id:nanoid(),
      text: 'this is second note',
      date: '31/12/2021'
    },
    {
      id:nanoid(),
      text: 'this is third note',
      date: '26/01/2022'
    },
    {
      id:nanoid(),
      text: 'this is fourth note',
      date: '31/01/2022'
    },

  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes); 
  };
   
  return(
    <div className={`${darkMode && 'darkmode'}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NoteList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} 
        />
       
      </div>
    </div>
    
  )
}
export default App;