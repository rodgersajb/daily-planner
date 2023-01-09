import "./Nav.scss";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Nav = () => {
  const [date, setDate] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    let theDate = new Date();
    setDate(theDate);
  }, []);

  console.log(date);

  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <p>Logged in as {currentUser.email}</p>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h1>Daily Planner</h1>
          <p className="date">{date.toLocaleString()}</p>
        </nav>
      </div>
    </>
  );
};

export default Nav;
