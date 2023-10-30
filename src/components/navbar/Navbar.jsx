import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS["nav-date"]}>
        <span>2023/10/29</span>
      </div>
      <div className={NavbarCSS["nav-brand"]}>
        <span>STOREMATE</span>
      </div>
      <div className={NavbarCSS["nav-profile"]}>
        <span>Profile</span>
        <img src="/images/profile.png" alt="pic" />
      </div>
    </nav>
  );
};

export default Navbar;
