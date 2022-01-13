import Login from "./Login";

function Home({ logout, loggedIn, setLoggedIn, facade, setErrorMessage }) {
  return (
    <div>
      {!loggedIn ? (
        <Login
          facade={facade}
          setLoggedIn={setLoggedIn}
          setErrorMessage={setErrorMessage}
        />
      ) : (
        <div>
          <br/>
          <h4>Username: {facade.getUsername()}</h4>
          <h4>You are now logged in as: {facade.getUserRoles()}</h4>
          <p>
            <button type="button" class="btn btn-light" onClick={logout}>Logout</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
