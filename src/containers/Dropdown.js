import React from "react";
import {graphql} from "react-apollo";
import {Link} from "react-router-dom";
import {allRepoQuery} from "../queries";

export const Dropdown = ({match, data}) => {
  const {allRepositories} = data;
  return allRepositories && allRepositories.length > 0 ? (
    <nav className="nav">
      <div className="dropdown">
        <a className="dropdown-label" href="#">
          Select a repository <span className="icon-expand" />
        </a>
        <ul>
          {allRepositories ? (
            allRepositories.map(repo => (
              <li key={repo.name}>
                <Link to={`/repos/${repo.name}/${repo.id}`}>{repo.name}</Link>
              </li>
            ))
          ) : (
            <li />
          )}
        </ul>
      </div>
    </nav>
  ) : null;
};

const DropdownWithData = graphql(allRepoQuery)(Dropdown);

export default DropdownWithData;
