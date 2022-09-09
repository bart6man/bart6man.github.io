import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="pray">
        Help Ukrainian soldiers return home alive
        <a
          className="navbar-link "
          href="https://savelife.in.ua/donate/#donate-army-card-monthly"
          target="_blank"
          rel="noreferrer"
        >
          ❤️
        </a>
      </div>
      <div className="header">
        <div className="logo">
          <a href="/">
            {" "}
            <img src="../6man.png" alt="logo" width={150} height={100} />{" "}
          </a>
        </div>
        <ul className="navbar d-flex ">
          <li className=" mr-40">
            <Link to="/" className="navbar-link">
              <h3>HOME</h3>
            </Link>
          </li>
          <li className=" mr-40">
            <Link to="/songs" className="navbar-link">
              <h3>SONGS</h3>
            </Link>
          </li>
          <li className=" mr-40">
            <Link to="/beats" className="navbar-link">
              <h3>BEATS</h3>
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="navbar-link">
              <h3>CONTACTS</h3>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
