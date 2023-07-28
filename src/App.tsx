import './App.css';
import ListGroup from './components/ListGroup';
import { cities, fruits } from './data/listData';

function App() {
  return (
    <>
      <ListGroup items={cities} heading={'Punjab Cities'} />
      <ListGroup items={fruits} heading={'Fruits'} />
    </>
  );
}

export default App;
