interface Props {
  children: React.ReactNode;
}
const Alert = (props: Props) => {
  return <div className="alert alert-success">{props.children}</div>;
};
export default Alert;
