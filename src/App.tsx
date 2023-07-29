import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/ListGroup';
import { cities } from './data/listData';

function App() {
  const [isShowing, setIsShowing] = useState(false);
  const [alertText, setAlertText] = useState<string | null>(null);
  const handleSelectedItem = (item: string) => {
    setIsShowing(true);
    setAlertText(item);
  };
  const handleAlert = () => {
    setIsShowing(false);
  };
  return (
    <>
      <Button children="Data" color="danger" />
      {isShowing && (
        <Alert
          children={alertText}
          show={isShowing}
          handleAlert={handleAlert}
        />
      )}

      <ListGroup
        items={cities}
        heading={'Punjab Cities'}
        onSelectItem={handleSelectedItem}
      />
    </>
  );
}

export default App;
