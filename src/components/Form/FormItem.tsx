import React, { ForwardedRef } from 'react';

interface Props {
  label?: string;
  type?: string;
}
const FormItem = React.forwardRef<HTMLInputElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, type = 'text' } = props;
    return (
      <div className="mb-3">
        <label htmlFor={type.toLowerCase()} className="form-label">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={type.toLowerCase()}
          className="form-control"
        />
      </div>
    );
  }
);
export default FormItem;
