import React from "react";
import netlifyIdentity from "netlify-identity-widget";
import Dropdown from "../containers/Dropdown";
import {home, github, plus, logout, issue} from "../icons";
import {Link} from "react-router-dom";
import {FloatLeft} from "../styles/Grid";

const handleLogIn = () => {
  netlifyIdentity.open();
};

const handleLogOut = () => {
  netlifyIdentity.logout();
};

const Header = ({user}) => {
  return user ? (
    <header>
      <FloatLeft>
        <Link to="/" className="home" alt="home">
          <span>
            <img src={home} />
          </span>
        </Link>
        <Link to="/new" className="nav-link" alt="Add A Repo">
          <img src={plus} />
        </Link>
        <Dropdown />
      </FloatLeft>

      <a className="nav-link" onClick={handleLogOut}>
        <span>
          <img src={logout} />
        </span>
      </a>
      <a className="nav-link" target="_blank" href="https://github.com/bdougie/open-sauced/issues/new">
        <span>
          <img src={issue} />
        </span>
      </a>
      <a className="nav-link" href="https://github.com/bdougie/open-sauced">
        <span>
          <img src={github} />
        </span>
      </a>
    </header>
  ) : (
    <header>
      <a onClick={handleLogIn}>Welcome to Open Sauced</a>
      <a className="nav-link" target="_blank" href="https://github.com/bdougie/open-sauced/issues/new">
        <span>
          <img src={issue} />
        </span>
      </a>
    </header>
  );
};

export default Header;
