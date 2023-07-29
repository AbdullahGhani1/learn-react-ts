import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'link';
}
const Button = ({ children, color = 'primary' }: Props) => {
  return <button className={'btn btn-' + color}>{children}</button>;
};
export default Button;
