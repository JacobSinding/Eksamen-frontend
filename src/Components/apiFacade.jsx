
const URL = "https://sindawg.dk/tomcat/eksamen";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

let apiFacade = () => {
  const fetchData = (endpoint, updateAction, setErrorMessage) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data))
      .catch((err) => {
        if (err.status) {
          console.log(err);
          err.fullError.then((e) => setErrorMessage(e.code + ": " + e.message));
        } else {
          setErrorMessage("Network error");
        }
      });
  };

  const login = (user, password, setLoggedIn, setErrorMessage) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
        setLoggedIn(true);
        setErrorMessage("Logged in");
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setErrorMessage(e.code + ": " + e.message));
        } else {
          setErrorMessage("Network error");
        }
      });
  };

  //metode til create event, her bliver det også bestemt at den skal poste
  const createEvent = (endpoint, updateAction, setErrorMessage, dEvent) => {
    const options = makeOptions("POST", true, dEvent);
    console.log(dEvent)
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data))
      .catch((err) => {
        if (err.status) {
          console.log(err);
          err.fullError.then((e) => setErrorMessage(e.code + ": " + e.message));
        } else {
          setErrorMessage("Network error");
        }
      });
  };

  //metode til delete, bliver bestemt der skal DELETE
  const deleteButton = (endpoint, updateAction, setErrorMessage) => {
    const options = makeOptions("DELETE", true); //True add's the token
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data))
      .catch((err) => {
        if (err.status) {
          console.log(err);
          err.fullError.then((e) => setErrorMessage(e.code + ": " + e.message));
        } else {
          setErrorMessage("Network error");
        }
      });
    }

  // Security funktionalitet

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const getUserRoles = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const roles = decodedClaims.roles;
      return roles;
    } else return "";
  };

  const getUsername = () => {
    const token = getToken();
    if (token != null) {
      const payloadBase64 = getToken().split(".")[1];
      const decodedClaims = JSON.parse(window.atob(payloadBase64));
      const username = decodedClaims.username;
      return username;
    } else return "";
  };

  const hasUserAccess = (neededRole, loggedIn) => {
    const roles = getUserRoles().split(",");
    return (loggedIn && roles.includes(neededRole))||roles.includes("admin");
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  

  return {
    makeOptions,
    fetchData,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    getUserRoles,
    getUsername,
    hasUserAccess,
    createEvent,
    deleteButton,
  };
};

const facade = apiFacade();

export default facade;
