import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";

export default function Header({ facade, LoggedIn }) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        {facade.hasUserAccess("admin", LoggedIn) && (
          <div>
            <li>
              <NavLink activeClassName="active" to="/facts">
                Facts
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
