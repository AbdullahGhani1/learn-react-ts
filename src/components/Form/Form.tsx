import { FormEvent, useState } from 'react';
import FormItem from './FormItem';

const Form = () => {
  const [person, setPerson] = useState({ name: '', age: 0 });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form id="form" className="bg-dark text-white p-3" onSubmit={handleSubmit}>
      <FormItem
        label="Name"
        type="text"
        value={person.name}
        onChange={(event) => setPerson({ ...person, name: event.target.value })}
      />
      <FormItem
        label="Age"
        type="number"
        value={person.age}
        onChange={(event) =>
          setPerson({ ...person, age: Number(event.target.value) })
        }
      />

      <input className="btn btn-primary" type="submit" title="Submit" />
    </form>
  );
};
export default Form;
