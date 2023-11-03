import "./Home.scss";
import { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";
export const Home = () => {
  const { token, loginInput, handleLogin, handleLoginInput, setToken } =
    useContext(UserContext);

  const handleLogout = () => {
    setToken("");
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
                />
              </label>
            </div>
            <button className="Login__button" type="submit">
              Sign In
            </button>
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
