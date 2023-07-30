interface Props {
  label?: string;
  type?: string;
}
const FormItem = (props: Props) => {
  const { label, type = 'text' } = props;
  return (
    <div className="mb-3">
      <label htmlFor={type.toLowerCase()} className="form-label">
        {label}
      </label>
      <input type={type} id={type.toLowerCase()} className="form-control" />
    </div>
  );
};
export default FormItem;
