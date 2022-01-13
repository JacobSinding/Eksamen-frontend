import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login({ facade, setLoggedIn, setErrorMessage }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    facade.login(
      loginCredentials.username,
      loginCredentials.password,
      setLoggedIn,
      setErrorMessage
    );
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input class="form-control" placeholder="User Name" id="username" />
        <br/>
        <input type="password" class="form-control" placeholder="Password" id="password" />
        <br/>
        <button class="btn btn-secondary" onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}
