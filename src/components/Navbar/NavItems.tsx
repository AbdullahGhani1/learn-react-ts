interface Props {
  href: string;
  title: string;
}
const NavItems = (props: Props) => {
  const { href, title } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {title}
      </a>
    </li>
  );
};
export default NavItems;
