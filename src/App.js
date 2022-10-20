import './App.css';
import getContacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      {getContacts()}
    </div>
  );
}

export default App;
