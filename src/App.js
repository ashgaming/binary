import './App.css';
import GiveCol from './conponent/GiveCol';
import Header from './conponent/Header';


function App() {
  const Styles = {
    position: 'relative',
    width: '99%',
    height: '99vh',
    border: '1px solid #ccc',
    overflow: 'hidden',
    overflowX:'hidden',
    overflowY:'hidden',
};
  return (
    <div className="App App-header" style={Styles}>
      <GiveCol/>
    </div>
  );
}

export default App;
