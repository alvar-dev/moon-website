import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={classes.header}>
      <Link to="/" style={{ fontSize: "2rem", fontWeight: "bold", color: "white", textDecoration: "none" }} className="center">
        Moon
      </Link>
      <div className={classes.row}>
        <Link to="/new-post" style={{ fontSize: "1rem", fontWeight: "normal", color: "white", textDecoration: "none" }} className="center">
          Post new song
        </Link>
        <Link to="/accounts" style={{ fontSize: "1rem", fontWeight: "normal", color: "white", textDecoration: "none" }} className="center">
          Accounts
        </Link>
        <Link to="/accounts" style={{ fontSize: "1rem", fontWeight: "normal", color: "white", textDecoration: "none" }} className="center">
          Log out
        </Link>
      </div>
    </div>
  )
}

export default NavBar;