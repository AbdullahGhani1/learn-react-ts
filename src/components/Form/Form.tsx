import { FormEvent, useState } from 'react';
import FormItem from './FormItem';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  age: z
    .number({ invalid_type_error: 'Age must be a number' })
    .min(13, { message: 'Age must be at least 13' }),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  const [person, setPerson] = useState({ name: '', age: 0 });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form
      id="form"
      className="bg-dark text-white p-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name')} id="name" className="form-control" />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type="number"
          id="age"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      {/* <FormItem
        label="Name"
        type="text"
        onChange={(event) => event.target.value}
        value={person.name}
      />
      <FormItem
        label="Age"
        type="number"
        onChange={(event) => event.target.value}
        value={person.age}
      /> */}

      <input className="btn btn-primary" type="submit" title="Submit" />
    </form>
  );
};
export default Form;
