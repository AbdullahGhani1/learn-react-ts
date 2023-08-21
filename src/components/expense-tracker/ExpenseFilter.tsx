interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Food">Food</option>
      <option value="Utilities">Utilities</option>
      <option value="Transportation">Transportation</option>
      <option value="Health & Fitness">Health & Fitness</option>
      <option value="Savings">Savings</option>
    </select>
  );
};
export default ExpenseFilter;
