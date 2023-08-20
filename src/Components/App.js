import '../Styles/App.css';
import PersonalContact from './PersonalContact';
// import RelationPopup from './RelationPopup';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Personal contacts
      </header>
      <div className='detailsContainer'>
        <PersonalContact/>
      </div>
    </div>
  );
}

export default App;
