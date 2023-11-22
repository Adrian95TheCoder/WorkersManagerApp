import { useContext, useEffect, useState } from "react";
import {
  EmployeeContext,
  employeeListType,
} from "../../components/context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.scss";

import { DeleteButton } from "../../components/DeleteButton";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const {
    employeeList,
    allowDelete,
    setAllowDelete,
    deleteButton,
    getWorkers,
  } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState<employeeListType>({
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    salary: 0,
    // new
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
  const { t } = useTranslation();

  const getSingleEmployee = (employeeId: string) => {
    const selectedEmployee = employeeList.find(
      (employee) => employee.id === Number(employeeId)
    );
    setEmployee(selectedEmployee!);
  };
  useEffect(() => {
    if (id) parseInt(id) ? getSingleEmployee(id) : navigate("/*");
  }, [id, navigate]);

  const goToEditPage = (employeeId: number) => {
    navigate(`/employees/EditEmployee/${employeeId}`);
  };
  const handleDelete = async () => {
    await deleteButton(employee.id);
    console.log(employee.id, "czy coś tu sie dzieje");
    setAllowDelete(false);
    await getWorkers();
    navigate("/employees");
  };
  return (
    <>
      <div className="EmployeeDetails">
        <table className="EmployeeDetails__table">
          <tr>
            <th className="EmployeeDetails__th">{t("employeeDetails")}</th>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">Id</td>
            <td className="EmployeeDetails__td">{employee.id}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("firstName")}</td>
            <td className="EmployeeDetails__td">{employee.firstName}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("lastName")}</td>
            <td className="EmployeeDetails__td">{employee.lastName}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("salary")}</td>
            <td className="EmployeeDetails__td">{employee.salary}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("gender")}</td>
            <td className="EmployeeDetails__td">{employee.gender}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">Email</td>
            <td className="EmployeeDetails__td">{employee.email}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("phone")}</td>
            <td className="EmployeeDetails__td">{employee.phone}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("birthDate")}</td>
            <td className="EmployeeDetails__td">{employee.birthDate}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("workplace")}</td>
            <td className="EmployeeDetails__td">{employee.workplace}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("street")}</td>
            <td className="EmployeeDetails__td">{employee.street}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("city")}</td>
            <td className="EmployeeDetails__td">{employee.city}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("postalCode")}</td>
            <td className="EmployeeDetails__td">{employee.postalCode}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("state")}</td>
            <td className="EmployeeDetails__td">{employee.state}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">{t("startWork")}</td>
            <td className="EmployeeDetails__td">{employee.startWork}</td>
          </tr>
        </table>
        <button
          className="EmployeeDetails__editButton"
          onClick={() => goToEditPage(employee.id)}
        >
          {t("edit")}
        </button>
        <DeleteButton id={employee.id} />
        {allowDelete && (
          <div className="employee-details__allow">
            <p>
              {t("areYouSure")}{" "}
              <b>
                {employee.id} {employee.firstName} {employee.lastName}
              </b>{" "}
              {t("fromYourEmployeeList")}
            </p>
            <button className="employee-details__save" onClick={handleDelete}>
              {t("yes")}
            </button>
            <button
              className="employee-details__cancel"
              onClick={() => setAllowDelete(false)}
            >
              {t("no")}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
