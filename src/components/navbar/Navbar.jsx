import { useEffect, useState } from "react";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Function to update the current date
    const updateDate = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = now.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };

    // Initial update of the date
    updateDate();

    // Update the date every minute
    const intervalId = setInterval(updateDate, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS["nav-date"]}>
        <span>{currentDate}</span>
      </div>
      <div className={NavbarCSS["nav-brand"]}>
        <span>STOREMATE</span>
      </div>
      <div className={NavbarCSS["nav-profile"]}>
        <span>Viraj Ranathunga</span>
        <img src="/images/profile.png" alt="pic" />
      </div>
    </nav>
  );
};

export default Navbar;
