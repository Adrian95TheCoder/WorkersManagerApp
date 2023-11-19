import { useEffect, useState, useContext, FormEvent, ChangeEvent } from "react";
import "./EditEmployee.scss";
import {
  EmployeeContext,
  employeeListType,
} from "../../components/context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";

export const EditEmployee = () => {
  const { id } = useParams();

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
    address: "",
    city: "",
    postalCode: "",
    state: "",
    startWork: "",
  });

  const { employeeList, editEmployee, handleEditEmployee, getWorkers } =
    useContext(EmployeeContext);
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
    console.log("navigate");
  };

  const details = async (employee_id: number) => {
    await getWorkers();
    setTimeout(() => myFunction(employee_id), 1000);
  };

  return (
    <>
      <h2 className="EditEmployee__h2">Edit Employee</h2>
      {/* <form onSubmit={onSubmit}>  */}
      <form onSubmit={(event) => handleEditEmployee(event, employee)}>
        <table className="EditEmployee__table">
          <tr>
            <th className="EditEmployee__th">Employee Details</th>
          </tr>
          <tr>
            <td className="EditEmployee__td">id</td>
            <td className="EditEmployee__td">{employee.id}</td>
          </tr>
          <tr>
            <td className="EditEmployee__td">first name</td>
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
            <td className="EditEmployee__td">last name</td>
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
            <td className="EditEmployee__td">salary</td>
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
            <td className="EditEmployee__td">gender</td>
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
            <td className="EditEmployee__td">email</td>
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
            <td className="EditEmployee__td">phone</td>
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
            <td className="EditEmployee__td">birth date</td>
            <td className="EditEmployee__td">
              <input
                type="text"
                id="birthDate"
                name="birthDate"
                value={employee.birthDate}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td className="EditEmployee__td">workplace</td>
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
            <td className="EditEmployee__td">address</td>
            <td className="EditEmployee__td">
              <input
                type="text"
                id="address"
                name="address"
                value={employee.address}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <td className="EditEmployee__td">city</td>
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
            <td className="EditEmployee__td">postal code</td>
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
            <td className="EditEmployee__td">state</td>
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
            <td className="EditEmployee__td">start work</td>
            <td className="EditEmployee__td">
              <input
                type="text"
                id="startWork"
                name="startWork"
                value={employee.startWork}
                onChange={handleInput}
              />
            </td>
          </tr>
        </table>
        <button className="EditEmployee__saveButton" type="submit">
          Save
        </button>
        <button
          className="EditEmployee__backButton"
          onClick={() => details(employee.id)}
        >
          Back to Details
        </button>
      </form>
    </>
  );
};
