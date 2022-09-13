import { Link } from "react-router-dom";
import { useState } from "react";
import Up from "../Bio/Buttons/Up";

export default function Header() {

  const [drop, setDrop] = useState(false);

 

  return (
    <header>
      <div className="header_drop">
      
      <button className="menu-button" onClick={()=> setDrop(!drop)}>
      <img src="menu.svg" alt="xxx" />
      </button>
      <div className="logo_drop">
      <button className="button_drop" onClick={()=> setDrop(!drop)}>
      {" "}
      <img src="../6man.png" alt="logo" width={150} height={100} />{" "}
      </button>
      </div>
      <Up />
      {drop && true ? 
      (<div className="main_drop">
          <ul className="drop_bar">
          <li className="drop-bar_text mr-40">
            <Link to="/" className="drop_bar-link">
              <h3>HOME</h3>
            </Link>
          </li>
          <li className=" mr-40">
            <Link to="/songs" className="drop_bar-link">
              <h3>SONGS</h3>
            </Link>
          </li>
          <li className=" mr-40">
            <Link to="/beats" className="drop_bar-link">
              <h3>BEATS</h3>
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="drop_bar-link">
              <h3>CONTACTS</h3>
            </Link>
          </li>
          <li>
          <a
            className="navbar-link "
            href="https://savelife.in.ua/donate/#donate-army-card-monthly"
            target="_blank"
            rel="noreferrer"
          >
            ❤️
          </a>
          </li>
        </ul>
        </div>
  ) : null}
      </div>

      <div className="header_main">
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
      </div>
    </header>
  );
}
