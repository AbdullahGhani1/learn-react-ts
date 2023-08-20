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
import ExpenseList from './components/expense-tracker/ExpenseList';

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

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Rent', amount: 2500, category: 'Housing' },
    { id: 2, description: 'Groceries', amount: 300, category: 'Food' },
    { id: 3, description: 'Utilities', amount: 100, category: 'Utilities' },
    { id: 4, description: 'Internet', amount: 50, category: 'Utilities' },
    {
      id: 5,
      description: 'Transportation',
      amount: 150,
      category: 'Transportation',
    },
    {
      id: 6,
      description: 'Health Insurance',
      amount: 200,
      category: 'Insurance',
    },
    {
      id: 7,
      description: 'Entertainment',
      amount: 100,
      category: 'Entertainment',
    },
    {
      id: 8,
      description: 'Software Subscriptions',
      amount: 50,
      category: 'Technology',
    },
    {
      id: 9,
      description: 'Gym Membership',
      amount: 50,
      category: 'Health & Fitness',
    },
    { id: 10, description: 'Savings', amount: 500, category: 'Savings' },
  ]);

  return (
    <>
      <Navbar />
      <main className="px-4 py-5 my-5">
        {/* <ExpandableText maxChars={200}>
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
        <Form /> */}
        {/* <Button children="Data" color="danger" /> */}
        {/* {isShowing && (
          <Alert
            children={alertText}
            show={isShowing}
            handleAlert={handleAlert}
          />
        )} */}
        {/* <ListGroup
          items={cities}
          heading={'Punjab Cities'}
          onSelectItem={handleSelectedItem}
        /> */}
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => {
            setExpenses(expenses.filter((expense) => expense.id !== id));
            console.log(expenses[1], id);
          }}
        />
      </main>
    </>
  );
}

export default App;
