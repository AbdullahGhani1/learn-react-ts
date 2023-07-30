import { FormEvent, useRef } from 'react';
import FormItem from './FormItem';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: '', age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    person.name = nameRef.current?.value || '';
    person.age = Number(ageRef.current?.value);

    console.log(person);
  };
  return (
    <form id="form" className="bg-dark text-white p-3" onSubmit={handleSubmit}>
      <FormItem label="Name" type="text" ref={nameRef} />
      <FormItem label="Age" type="number" ref={ageRef} />
      <input className="btn btn-primary" type="submit" title="Submit" />
    </form>
  );
};
export default Form;
