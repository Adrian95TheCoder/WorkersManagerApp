import { useNavigate } from "react-router-dom";
import "./Home.scss";
import { ChangeEvent } from "react";
export const Home = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/employees");
  };

  const handleLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
  };

  return (
    <>
      <div className="Login__body">
        <form className="Login__form" action="">
          <h2 className="Login__h2">Login Page</h2>
          <div className="Login__labelBox">
            <label htmlFor="firstName">
              Login:
              <input
                type="text"
                id="login"
                placeholder="Enter login"
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
                placeholder="Enter password"                
                onChange={handleLoginInput}
              />
            </label>
          </div>
          <button className="Login__button" onClick={signIn}>Sign In</button>
        </form>
      </div>
    </>
  );
};
