import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}
const FormItem = (props: Props) => {
  const { label, type = 'text', onChange, value } = props;
  return (
    <div className="mb-3">
      <label htmlFor={type.toLowerCase()} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={type.toLowerCase()}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormItem;
