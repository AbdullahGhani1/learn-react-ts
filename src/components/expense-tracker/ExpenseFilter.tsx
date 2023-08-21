interface Props {
  onSelectCategory: (category: string) => void;
}
import { catagories } from '../../data/catagories';
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {catagories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
export default ExpenseFilter;
