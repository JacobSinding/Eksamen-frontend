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
          <p>
            <button onClick={logout}>Logout</button>
          </p>
          <p>Username: {facade.getUsername()}</p>
          <p>Role: {facade.getUserRoles()}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
