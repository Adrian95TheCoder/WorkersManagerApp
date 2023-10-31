import { useNavigate } from "react-router-dom";
import "./Home.scss"
import { ChangeEvent } from "react";
export const Home = () => {
    const navigate = useNavigate();
    const signIn = () => {
        console.log("test");
        navigate("/employees");
    }

    const handleLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log("test");
    }  

  return (
    <>
      <div className="LoginMain">
      <div className="Login_box">
        <form action="">
          <h2>Login Page</h2>          
          <div className="labelBox">
            <label htmlFor="firstName">
              Login:
              <input type="text" 
                    id="login" 
                    placeholder="Enter login"
                    onChange={handleLoginInput} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input type="password" 
              id="password" 
              placeholder="Enter password" 
              onChange={handleLoginInput}/>
            </label>
          </div>
          <button onClick={signIn}>Sign In</button>
        </form>
      </div>
    </div>
    </>
  );
};
