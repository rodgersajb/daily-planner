import "./Nav.scss";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";

const Nav = () => {
  const [date, setDate] = useState([]);
  const { currentUser } = useContext(AuthContext);

  if (currentUser === null) {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    let theDate = new Date();
    setDate(theDate);
  }, []);

  console.log(date);

  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h1>Daily Planner</h1>

          <p className="date">{date.toLocaleString()}</p>
          <div className="dropdown-menu">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <div className="dropdown-content">
              <p>Logged in as {currentUser.email}</p>
              <button>
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                <p>Sign Out</p>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
