interface Props {
  children: React.ReactNode;
}
const Button = ({ children }: Props) => {
  return <button className="btn btn-dark">{children}</button>;
};
export default Button;
