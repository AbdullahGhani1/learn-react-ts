import FormItem from './FormItem';

const Form = () => {
  return (
    <form id="form" className="bg-dark text-white p-3">
      <FormItem label="Name" type="text" />
      <FormItem label="Age" type="number" />
    </form>
  );
};
export default Form;
