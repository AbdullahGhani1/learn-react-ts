import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { cities } from './data/listData';

function App() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Alert>String</Alert>
      <Button children="Data" />
      <ListGroup
        items={cities}
        heading={'Punjab Cities'}
        onSelectItem={handleSelectedItem}
      />
    </>
  );
}

export default App;
