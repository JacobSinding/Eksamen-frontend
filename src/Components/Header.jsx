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
        {facade.hasUserAccess("user", LoggedIn) && (
          <div>
            <li>
              <NavLink activeClassName="active" to="/events">
                Dinner events
              </NavLink>
            </li>
          </div>
        )}
        {facade.hasUserAccess("admin", LoggedIn) && (
          <div>
            <li>
              <NavLink activeClassName="active" to="/CreateEvent">
                Add event
              </NavLink>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
}
