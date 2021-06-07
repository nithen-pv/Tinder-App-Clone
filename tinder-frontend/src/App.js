import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import Tindercards from './Tindercards';

function App() {
  return (
    <div className="app" style={{padding:"0",margin:"0"}}>
      <Header/>
      <Tindercards/>
      <SwipeButton/>
    </div>
  );
}

export default App;
