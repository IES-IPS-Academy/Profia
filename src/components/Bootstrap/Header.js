// Header component using bootstrap
const Header = ({ dark, children, className, to, Link }) => {
  //Checking if the variable "dark" has a value dark or light
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={
        `navbar navbar-${dark} bg-${dark}` + (className ? " " + className : "")
      }
    >
      {to ? (
        <Link to={to} className="navbar-brand">
          {children}
        </Link>
      ) : (
        <span className="navbar-brand">{children}</span>
      )}
    </nav>
  );
};

export default Header;
