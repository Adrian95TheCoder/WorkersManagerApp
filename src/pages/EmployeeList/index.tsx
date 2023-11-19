import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import "./EmployeeList.scss";
import { useTranslation } from "react-i18next";
import { EmployeeBox } from "../../components/EmployeeBox";
import { InputSearchBox } from "../../components/InputSearchBox";
import { DisplaySortBox } from "../../components/DisplaySortBox";

export const EmployeeList = () => {
  const { employeeList, curPage, previousPage, nextPage } =
    useContext(EmployeeContext);

  /*  search  */
  // const { search } = useLocation();
  // const [filteredList, setFilteredList] = useState(employeeList);
  // const searchValue = useDebounce(inputValue, 200);

  const { t } = useTranslation();

  const renderTable = () => {
    console.log("renderTable");
    console.log("curPage");
    return (
      <div className="EmployeeList">
        <h2 className="EmployeeList__h2">{t("employeeList")}</h2>

        <DisplaySortBox />

        <InputSearchBox />

        <table className="EmployeeList__table3">
          <thead>
            <tr>
              <th className="EmployeeList__employee_lp">No</th>
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
              <th className="EmployeeList__employee_salary">{t("salary")}</th>
              <th className="EmployeeList__details">{t("detailsButtons")}</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map(
              ({ id, firstName, lastName, salary, workplace }, index) => (
                <EmployeeBox
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  salary={salary}
                  workplace={workplace}
                  index={index}
                />
              )
            )}
          </tbody>
          Display page: {curPage}
        </table>

        <button className="EmployeeList__addEmployee" onClick={previousPage}>
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
      </div>
    );
  };

  return renderTable();
};
