import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import Button from './components/Button';/
import UpdatingObject from './components/UpdatingObject';
import ListGroup from './components/ListGroup';
import { cities } from './data/listData';
import Bugs from './components/Bugs';
import ExpandableText from './components/ExpandableText';
import Navbar from './components/Navbar';
import Form from './components/Form';

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
      <Navbar />
      <main className="px-4 py-5 my-5">
        <ExpandableText maxChars={200}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione
          enim id autem iste facere quisquam saepe veniam dolore, illo sunt
          odit. Aliquid quaerat similique debitis cupiditate sit nobis in, quo
          rerum qui molestias sint, minima dignissimos sapiente ullam nisi id
          voluptatum sequi? Ad animi omnis eius inventore totam impedit? Sint
          quae ratione sed expedita dicta sunt earum amet id veniam libero odit
          sequi provident alias sit inventore dolor eius, dolore, consequatur
          aliquid aliquam labore minus eligendi. Soluta laboriosam sunt in
          ducimus, deserunt iste quaerat repellat error ullam quo sint, sed
          animi perspiciatis ipsam, unde optio est rerum. Fugit, tempora?
        </ExpandableText>
        <UpdatingObject />
        <Bugs />
        <Form />
        {/* <Button children="Data" color="danger" /> */}
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
      </main>
    </>
  );
}

export default App;
