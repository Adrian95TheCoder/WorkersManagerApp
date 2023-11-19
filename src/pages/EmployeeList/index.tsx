import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import "./EmployeeList.scss";
import { useDebounce } from "../../components/Hooks/useDebouce";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";

export const EmployeeList = () => {
  const {
    deleteButton,
    employeeList,
    inputValue,
    handleInputSearch,
    setInputValue,
  } = useContext(EmployeeContext);

  /*  search  */
  const { search } = useLocation();
  const [filteredList, setFilteredList] = useState(employeeList);
  const searchValue = useDebounce(inputValue, 200);
  const navigate = useNavigate();
  const contextValue = useContext(EmployeeContext);
  console.log("Context Value:", contextValue);

  const { t } = useTranslation();

  useEffect(() => {
    setInputValue(search.slice(3));
  }, [search, setInputValue]);

  useEffect(() => {
    searchValue.length > 0
      ? navigate("/employees?q=" + searchValue)
      : navigate("/employees");
  }, [navigate, searchValue]);

  useEffect(() => {
    if (search) {
      console.log("search", search);
      const searchParam = search.slice(3);
      console.log("searchParam", searchParam);

      const searchList = employeeList.filter(
        (employee) =>
          employee.lastName.includes(searchParam) ||
          employee.firstName.includes(searchParam) ||
          employee.age.toString().includes(searchParam) ||
          employee.workplace.includes(searchParam)
        /*||
          employee.gender.includes(searchParam) ||
          employee.email.includes(searchParam) ||
          employee.phone.includes(searchParam) ||
          employee.address.includes(searchParam) ||
          employee.city.includes(searchParam) ||
          employee.state.includes(searchParam) ||
          employee.startWork.includes(searchParam)*/
      );
      console.log("searchList", searchList);
      setFilteredList(searchList);
    } else setFilteredList(employeeList);
  }, [search, employeeList]);

  /*  search  */

  const details = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };

  const nextPage = () => {
    setCurPage((prevPage) =>
      prevPage * pageSize < filteredList.length ? prevPage + 1 : prevPage
    );
  };

  const previousPage = () => {
    setCurPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const pageSize = 10;
  const [curPage, setCurPage] = useState(1);

  const renderTable = () => {
    console.log("renderTable");
    console.log("curPage", curPage);
    return (
      <div>
        <h2 className="EmployeeList__h2">{t("employeeList")}</h2>

        <input
          className="EmployeeList__search"
          type="search"
          name="search"
          placeholder={t("searchLastName")}
          value={inputValue}
          onChange={handleInputSearch}
        />

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
              <th className="EmployeeList__employee_age">{t("age")}</th>
              <th className="EmployeeList__employee_delete_button">
                {t("deleteButtons")}
              </th>
              <th className="EmployeeList__details">{t("detailsButtons")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredList
              .slice((curPage - 1) * pageSize, curPage * pageSize)
              .map((employee, index) => (
                <tr key={employee.id}>
                  <td className="EmployeeList__employee_lp">
                    {index + 1 + (curPage - 1) * pageSize}
                  </td>
                  <td className="EmployeeList__employee_id">{employee.id}</td>
                  <td className="EmployeeList__employee_firstName">
                    {employee.firstName}
                  </td>
                  <td className="EmployeeList__employee_lastName">
                    {employee.lastName}
                  </td>
                  <td className="EmployeeList__employee_workplace">
                    {employee.workplace}
                  </td>
                  <td className="EmployeeList__employee_age">{employee.age}</td>
                  <td className="EmployeeList__employee_delete_button">
                    <button onClick={() => deleteButton(employee.id)}>
                      {t("deleteEmployee")}
                    </button>
                  </td>
                  <td className="EmployeeList__details">
                    <button onClick={() => details(employee.id)}>
                      {t("details")}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
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
