import "./Home.scss";
import { useNavigate } from "react-router-dom";
export const Home = () => {


  const navigate = useNavigate();


	const goToLoginPage = () => {
		navigate("/Login");
	};

	return (
		<>
			<div className="Home">
				<div className="Home__shadow"></div>
				<div className="Home__hero">
					<h2 className="Home__hero--title">
						Managing employees has never been so easy!
					</h2>
					<p className="Home__hero--content">
						Log in in three easy steps and start managing your employees like a
						professional accountant.
					</p>
				</div>
        <div className="Cards">
          <div className="Cards__box">
            <img className="Cards__box--img" src={('/assets/cardGlobe.png')} alt="icon of globe" />
            <h3 className="Cards__box--header">Remote management</h3>
            <p className="Cards__box--text">
            Access to your employee database from anywhere in the world
            </p>
          </div>
          <div className="Cards__box">
            <img className="Cards__box--img" src={('/assets/cardDetails.png')} alt="icon of worker details" />
            <h3 className="Cards__box--header">View details</h3>
            <p className="Cards__box--text">Easily display detailed infromation about your employee.</p>
          </div>
          <div className="Cards__box">
            <img className="Cards__box--img" src={('/assets/cardPlus.png')} alt="icon of adding a wroker" />
            <h3 className="Cards__box--header">Add employees</h3>
            <p className="Cards__box--text">Independently add and remove employees from your database</p>
          </div>
          
        </div>
				<button className="Home__button" onClick={goToLoginPage}>
					Go to Login Page
				</button>
			</div>
		</>
	);

};
