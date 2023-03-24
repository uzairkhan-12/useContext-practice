import './App.css';
import Dashboard from './components/Dashboard';
import About from './components/About';
import ContactUs from './components/ContactUs';
import NoteState from './context/notes/NoteState';

function App() {
  return (
   <>
   <NoteState>
   <Dashboard />
   <About />
   <ContactUs />
   </NoteState>
   </>
  );
}

export default App;
