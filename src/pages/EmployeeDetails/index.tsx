import { useContext, useEffect, useState } from "react";
import {
  EmployeeContext,
  employeeListType,
} from "../../components/context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeDetails.scss";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const { employeeList } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState<employeeListType>({
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    age: 0,
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

  return (
    <>
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
          <td className="EmployeeDetails__td">age</td>
          <td className="EmployeeDetails__td">{employee.age}</td>
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
      <button className="EmployeeDetails__editButton" onClick={() => goToEditPage(employee.id)}>Edit</button>
    </>
  );
};
