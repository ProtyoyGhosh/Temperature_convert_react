import './App.css';
// import ClockList from './components/ClockList/ClockList';
// import List from './components/List/List';
import Temperature from './components/Temperature';

function App() {
  // const quantites=[1,2,3];
  return (
    <div className="App">
      {/* <ClockList quantites={quantites}></ClockList> */}
      {/* <List></List> */}
      <Temperature></Temperature>
    </div>
  );
}

export default App;
