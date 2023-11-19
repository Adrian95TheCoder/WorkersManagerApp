import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../../components/context/EmployeeContext";
import "./EmployeeList.scss";
import { useDebounce } from "../../components/Hooks/useDebouce";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { EmployeeBox } from "../../components/EmployeeBox";
import { InputSearchBox } from "../../components/InputSearchBox";
import { DisplaySortBox } from "../../components/DisplaySortBox";

export const EmployeeList = () => {
  const {
    employeeList,
    inputValue,
    displayNumber,
    sortValue,

    handleDisplay,
    handleSortDisplay,
    previousPage,
    nextPage,
    handleInputSearch,
  } = useContext(EmployeeContext);

  /*  search  */
  // const { search } = useLocation();
  // const [filteredList, setFilteredList] = useState(employeeList);
  // const searchValue = useDebounce(inputValue, 200);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // const contextValue = useContext(EmployeeContext);
  // console.log("Context Value:", contextValue);

  // useEffect(() => {
  //   setInputValue(search.slice(3));
  // }, [search, setInputValue]);

  // useEffect(() => {
  //   searchValue.length > 0
  //     ? navigate("/employees?q=" + searchValue)
  //     : navigate("/employees");
  // }, [navigate, searchValue]);

  // useEffect(() => {
  //   if (search) {
  //     console.log("search", search);
  //     const searchParam = search.slice(3);
  //     console.log("searchParam", searchParam);

  //     const searchList = employeeList.filter(
  //       (employee) =>
  //         employee.lastName.includes(searchParam) ||
  //         employee.firstName.includes(searchParam) ||
  //         employee.age.toString().includes(searchParam) ||
  //         employee.workplace.includes(searchParam)
  //       /*||
  //         employee.gender.includes(searchParam) ||
  //         employee.email.includes(searchParam) ||
  //         employee.phone.includes(searchParam) ||
  //         employee.address.includes(searchParam) ||
  //         employee.city.includes(searchParam) ||
  //         employee.state.includes(searchParam) ||
  //         employee.startWork.includes(searchParam)*/
  //     );
  //     console.log("searchList", searchList);
  //     setFilteredList(searchList);
  //   } else setFilteredList(employeeList);

  // }, [search, employeeList]);

  const details = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };

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
              <th className="EmployeeList__employee_firstName">First Name</th>
              <th className="EmployeeList__employee_lastName">Last Name</th>
              <th className="EmployeeList__employee_workplace">Age</th>
              <th className="EmployeeList__employee_age">Workplace</th>
              <th className="EmployeeList__employee_delete_button">
                {t("deleteButtons")}
              </th>
              <th className="EmployeeList__details">{t("detailsButtons")}</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map(
              ({ id, firstName, lastName, age, workplace }, index) => (
                <EmployeeBox
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  age={age}
                  workplace={workplace}
                  index={index}
                />

                // <tr key={employee.id}>
                //   <td className="EmployeeList__employee_lp">
                //     {index + 1 + (curPage - 1) * 10}
                //   </td>
                //   <td className="EmployeeList__employee_id">{employee.id}</td>
                //   <td className="EmployeeList__employee_firstName">
                //     {employee.firstName}
                //   </td>
                //   <td className="EmployeeList__employee_lastName">
                //     {employee.lastName}
                //   </td>
                //   <td className="EmployeeList__employee_workplace">
                //     {employee.workplace}
                //   </td>
                //   <td className="EmployeeList__employee_age">{employee.age}</td>
                //   <td className="EmployeeList__employee_delete_button">
                //     <button onClick={() => deleteButton(employee.id)}>
                //       Delete employee
                //     </button>
                //   </td>
                //   <td className="EmployeeList__details">
                //     <button onClick={() => details(employee.id)}>Details</button>
                //   </td>
                // </tr>
              )
            )}
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
