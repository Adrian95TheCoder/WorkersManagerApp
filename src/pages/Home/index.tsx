import { useTranslation } from "react-i18next";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToLoginPage = () => {
    navigate("/Login");
  };


  return (
    <>
      <div className="Home">
        <div className="Home__shadow"></div>
        <div className="Home__hero">
          <h2 className="Home__hero--title">
            
          </h2>
          <p className="Home__hero--content">{t("logInInThreeEasySteps")}</p>
        </div>
        <div className="Cards">
          <div className="Cards__box">
            <img
              className="Cards__box--img"
              src={"/assets/cardGlobe.png"}
              alt="icon of globe"
            />
            <h3 className="Cards__box--header">{t("remoteManagement")}</h3>
            <p className="Cards__box--text">
              {t("accessToYourEmployeeDatabaseFromAnywhereInTheWorld")}
            </p>
          </div>
          <div className="Cards__box">
            <img
              className="Cards__box--img"
              src={"/assets/cardDetails.png"}
              alt="icon of worker details"
            />
            <h3 className="Cards__box--header">{t("viewDetails")}</h3>
            <p className="Cards__box--text">
              {t("easilyDisplayDetailedInfromationAboutYourEmployee")}
            </p>
          </div>
          <div className="Cards__box">
            <img
              className="Cards__box--img"
              src={"/assets/cardPlus.png"}
              alt="icon of adding a wroker"
            />
            <h3 className="Cards__box--header">{t("addEmployees")}</h3>
            <p className="Cards__box--text">
              {t("independentlyAddAndRemoveEmployeesFromYourDatabase")}
            </p>
          </div>
        </div>

        <button className="Home__button" onClick={goToLoginPage}>
          {t("goToLoginPage")}
        </button>
      </div>
    </>
  );
};
