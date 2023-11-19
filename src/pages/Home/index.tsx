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

				<button className="Home__button" onClick={goToLoginPage}>
					Go to Login Page
				</button>
			</div>
		</>
	);

};
