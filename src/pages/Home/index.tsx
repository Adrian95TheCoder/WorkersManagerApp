import "./Home.scss";
import { useNavigate } from "react-router-dom";
export const Home = () => { 
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/Login");
  };

  return (
    <>
    <div className="Home__body">
      <h2 className="Home__h2">Home Page</h2>
      <p>Welcome!</p>
      <button className="Home__button" onClick={goToLoginPage}>Go to Login Page</button>
      </div>
    </>
  );
};
