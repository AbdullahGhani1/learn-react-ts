import { useForm } from 'react-hook-form';
import { catagories } from '../../data/catagories';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z
    .number({ invalid_type_error: 'Ammount is required!' })
    .min(0)
    .max(100000000),
  category: z.enum(catagories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register('description')}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register('category')} id="category" className="form-select">
          <option value=""></option>
          {catagories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
export default ExpenseForm;
