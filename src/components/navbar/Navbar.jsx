import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarCSS["navbar"]}>
      <div className="nav-date">
        <span>2023/10/29</span>
      </div>
      <div className="nav-brand">
        <span>STOREMATE</span>
      </div>
      <div className="nav-profile">
        <span>Profile</span>
        <img src="" alt="pic" />
      </div>
    </nav>
  );
};

export default Navbar;
