import { useEffect, useState, useContext, FormEvent, ChangeEvent } from "react";
import "./EditEmployee.scss";
import {
  EmployeeContext,
  employeeListType,
} from "../../components/context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const EditEmployee = () => {
  const { id } = useParams();

  const {
    employeeList,
    employeeStatus,
    editEmployee,
    handleEditEmployee,
    getWorkers,
    handleSelect,
  } = useContext(EmployeeContext);

  const { t } = useTranslation();

  const [employee, setEmployee] = useState<employeeListType>({
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    salary: 0,
    status: "",
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    street: "",
    city: "",
    postalCode: "",
    state: "",
    startWork: "",
  });

  const navigate = useNavigate();

  const getSingleEmployee = (employeeId: string) => {
    const selectedEmployee = employeeList.find(
      (employee) => employee.id === Number(employeeId)
    );
    setEmployee(selectedEmployee!);
  };
  useEffect(() => {
    if (id) parseInt(id) ? getSingleEmployee(id) : navigate("/*");
  }, [id, navigate]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const myFunction = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };

  const details = async (employee_id: number) => {
    await getWorkers();
    setTimeout(() => myFunction(employee_id), 1000);
  };
  useEffect(() => {
    getWorkers();
  }, []);

  return (
    <>
      <div className="EditEmployee">
        <form onSubmit={(event) => handleEditEmployee(event, employee)}>
          <table className="EditEmployee__table">
            <tr>
              <th className="EditEmployee__th">{t("editEmployee")}</th>
            </tr>
            <tr>
              <td className="EditEmployee__td">Id</td>
              <td className="EditEmployee__td">{employee.id}</td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("firstName")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={employee.firstName}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("lastName")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={employee.lastName}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("salary")}</td>

              <td className="EditEmployee__td">
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  value={employee.salary}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="status">Status:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={employee.status}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("gender")}</td>

              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={employee.gender}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">Email</td>
              <td className="EditEmployee__td">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={employee.email}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("phone")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={employee.phone}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("birthDate")}</td>
              <td className="EditEmployee__td">
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={employee.birthDate}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("workplace")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="workplace"
                  name="workplace"
                  value={employee.workplace}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("street")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={employee.street}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("city")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={employee.city}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("postalCode")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={employee.postalCode}
                  onChange={handleInput}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("state")}</td>
              <td className="EditEmployee__td">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={employee.state}
                />
              </td>
            </tr>
            <tr>
              <td className="EditEmployee__td">{t("startWork")}</td>
              <td className="EditEmployee__td">
                <input
                  type="date"
                  id="startWork"
                  name="startWork"
                  value={employee.startWork}
                  onChange={handleInput}
                />
              </td>
            </tr>
          </table>
          <button className="EditEmployee__saveButton" type="submit">
            {t("save")}
          </button>
          <button
            className="EditEmployee__backButton"
            onClick={() => details(employee.id)}
          >
            {t("BackToDetails")}
          </button>
        </form>
      </div>
    </>
  );
};
