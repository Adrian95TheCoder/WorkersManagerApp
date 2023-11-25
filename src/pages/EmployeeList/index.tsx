
import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import "./EmployeeList.scss";
import { useTranslation } from "react-i18next";
import { EmployeeBox } from "../../components/EmployeeBox";
import { InputSearchBox } from "../../components/InputSearchBox";
import { DisplaySortBox } from "../../components/DisplaySortBox";
import { UserContext } from "../../components/context/UserContext";
import { DisplayPage } from "../../components/DisplayPage";

export const EmployeeList = () => {
  const { employeeList, curPage, maxPage, previousPage, nextPage } =
    useContext(EmployeeContext);
  const { token } = useContext(UserContext);

  const { t } = useTranslation();

  const renderTable = () => {
    return (
      <div className="EmployeeList">
        {token ? (
          <>
            <h2 className="EmployeeList__header">{t("employeeList")}</h2>

            <DisplaySortBox />

            <InputSearchBox />

            <table className="EmployeeList__table3">
              <thead>
                <tr>
                  <th className="EmployeeList__employee_lp">{t("nr")}</th>
                  <th className="EmployeeList__employee_id">Id</th>
                  <th className="EmployeeList__employee_firstName">
                    {t("firstName")}
                  </th>
                  <th className="EmployeeList__employee_lastName">
                    {t("lastName")}
                  </th>
                  <th className="EmployeeList__employee_workplace">
                    {t("workplace")}
                  </th>
                  <th className="EmployeeList__employee_salary">
                    {t("salary")}
                  </th>
                  <th className="EmployeeList__employee_status">
                    {t("Status")}
                  </th>
                  <th className="EmployeeList__details">
                    {t("detailsButtons")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map(
                  (
                    { id, firstName, lastName, salary, status, workplace },
                    index
                  ) => (
                    <EmployeeBox
                      key={id}
                      id={id}
                      firstName={firstName}
                      lastName={lastName}
                      salary={salary}
                      status={status}
                      workplace={workplace}
                      index={index}
                    />
                  )
                )}
              </tbody>


              <DisplayPage />
              {/* {t("displayPage")}:{" "}
              <input
                className="input_curPage"
                id="curPage"
                type="text"
                name="curPage"
                value={curPage}
                // onChange={handleCurPageInput}
              />{" "}
              {curPage} {""} of {""} {maxPage} */}

            </table>

            <button
              className="EmployeeList__addEmployee"
              onClick={previousPage}
            >
              {t("previousPage")}
            </button>
            <button className="EmployeeList__addEmployee" onClick={nextPage}>
              {t("nextPage")}
            </button>

            <Link to={"/employees/addEmployee"}>
              <button className="EmployeeList__addEmployee">
                {t("addEmployee")}
              </button>
            </Link>
          </>
        ) : (
          <p className="EmployeeList__accessDenied">{t("AccessDenied")}</p>
        )}
      </div>
    );
  };

  return renderTable();
};
