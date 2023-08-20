interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return <select className="form-select"></select>;
};
export default ExpenseFilter;
