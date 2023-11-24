import { useContext, useEffect, useState } from "react";
import {
  EmployeeContext,
  employeeListType,
} from "../../components/context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.scss";

import { DeleteButton } from "../../components/DeleteButton";

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
    status: "",
    // new
    gender: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
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
            <th className="EmployeeDetails__th">Employee Details</th>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">id</td>
            <td className="EmployeeDetails__td">{employee.id}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">first name</td>
            <td className="EmployeeDetails__td">{employee.firstName}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">last name</td>
            <td className="EmployeeDetails__td">{employee.lastName}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">Salary</td>
            <td className="EmployeeDetails__td">{employee.salary}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">Status</td>
            <td className="EmployeeDetails__td">{employee.status}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">gender</td>
            <td className="EmployeeDetails__td">{employee.gender}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">email</td>
            <td className="EmployeeDetails__td">{employee.email}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">phone</td>
            <td className="EmployeeDetails__td">{employee.phone}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">birth date</td>
            <td className="EmployeeDetails__td">{employee.birthDate}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">workplace</td>
            <td className="EmployeeDetails__td">{employee.workplace}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">address</td>
            <td className="EmployeeDetails__td">{employee.address}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">city</td>
            <td className="EmployeeDetails__td">{employee.city}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">postal code</td>
            <td className="EmployeeDetails__td">{employee.postalCode}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">state</td>
            <td className="EmployeeDetails__td">{employee.state}</td>
          </tr>
          <tr>
            <td className="EmployeeDetails__td">start work</td>
            <td className="EmployeeDetails__td">{employee.startWork}</td>
          </tr>
        </table>
        <button
          className="EmployeeDetails__editButton"
          onClick={() => goToEditPage(employee.id)}
        >
          Edit
        </button>
        <DeleteButton id={employee.id} />
        {allowDelete && (
          <div className="employee-details__allow">
            <p>
              Are you sure you want to remove{" "}
              <b>
                {employee.id} {employee.firstName} {employee.lastName}
              </b>{" "}
              from your employee list?
            </p>
            <button className="employee-details__save" onClick={handleDelete}>
              Yes
            </button>
            <button
              className="employee-details__cancel"
              onClick={() => setAllowDelete(false)}
            >
              No
            </button>
          </div>
        )}
      </div>
    </>
  );
};
