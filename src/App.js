import './Css/App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
