import "./Login.scss";
import { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";
export const Login = () => {
  const { error, token, loginInput, handleLogin, handleLoginInput, setToken, setError } =
    useContext(UserContext);

  const handleLogout = () => {
    setToken("");
    setError(false);
  };

  return (
    <div className="Login__body">
      {!token ? (
        <>
          <form className="Login__form" onSubmit={handleLogin}>
            <h2 className="Login__h2">Login Page</h2>
            <div className="Login__labelBox">
              <label htmlFor="username">
                Login:
                <input
                  type="text"
                  id="login"
                  name="username"
                  value={loginInput.username}
                  onChange={handleLoginInput}
                  required
                />
              </label>
            </div>
            <div className="Login__labelBox">
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginInput.password}
                  onChange={handleLoginInput}
                  required
                />
              </label>
            </div>
            <button className="Login__button" type="submit">
              Sign In
            </button>
            {error ? (<p className="Login__error">Error while login</p>) : (<p className="Login__error_invisible">Error while login</p>)}
          </form>
        </>
      ) : (
        <button className="Login__button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
