interface Props {
  children: React.ReactNode;
  show: boolean;
  handleAlert: () => void;
}
const Alert = (props: Props) => {
  const { handleAlert, show, children } = props;
  return (
    <div
      className={
        show === true
          ? 'alert alert-warning alert-dismissible fade show'
          : 'alert alert-warning alert-dismissible fade hide'
      }
      role="alert"
    >
      {children}
      <button
        className="btn-close"
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleAlert}
      ></button>
    </div>
  );
};
export default Alert;
