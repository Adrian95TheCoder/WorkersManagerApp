import { employeeListType } from "../EmployeeList";
import "./AddEmployee.scss";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";
type EmployeeType = {
  newEmployeeInput: {
    id: number;
    firstName: string;
    lastName: string;
    workplace: string;
    age: string;
  };
};

export const AddEmployee = () => {
  const employeer = {
    id: 0,
    firstName: "",
    lastName: "",
    workplace: "",
    age: "",
  };
  const [count, setCount] = useState(5);
  // const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const addEmployeer = async () => {
    try {
      const data = await fetch(`http://localhost:5000/workers/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employeer,
        }),
      });
      if (!data.ok) throw new Error("ups");
      const response = await data.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(event.target.value);
  };
  const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLastName(event.target.value);
  };
  const handleSubmitEmployee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newFirstName.length > 3 && newLastName.length) {
      setCount((prev) => prev + 1);

      const newEmployee = {
        id: `${count}`,
        firstName: newFirstName,
        lastName: newLastName,
      };
      addEmployeer();
      // setEmployeeList((prev) => [...prev, newEmployee]);
    }
  };

  return (
    <div className="addFormMain">
      <div className="addForm_box">
        <form onSubmit={handleSubmitEmployee}>
          <h2>Persolnal Information</h2>
          <p>Use a permanent address where you can receive mail.</p>
          <div className="labelBox">
            <label htmlFor="firstName">
              Name:
              <input
                type="text"
                id="firstName"
                placeholder="Enter name"
                value={newFirstName}
                onChange={handleFirstName}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastName">
              Lastname:
              <input
                type="text"
                id="lastName"
                placeholder="Enter lastname"
                value={newLastName}
                onChange={handleLastName}
              />
            </label>
          </div>
          {/* <div>
            <label htmlFor="workplace">
              Workplace:
              <input
                type="text"
                id="worklplace"
                placeholder="Enter workplace"
                value={newEmployeeInput.workplace}
                onChange={handleEmployeeInput}
              />
            </label>
          </div>
          <div>
            <label htmlFor="age">
              Age:
              <input
                type="number"
                id="age"
                placeholder="Enter age"
                value={newEmployeeInput.age}
                onChange={handleEmployeeInput}
              />
            </label>
          </div> */}
          {/* <div>
            <label htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                value={newEmployeeInput.email}
              />
            </label>
          </div> */}
          {/* <div>
            <label htmlFor="country">
              Country:
              <input type="text" id="country" placeholder="Enter country" />
            </label>
          </div>
          <div>
            <label htmlFor="streetAddress">
              Street Address:
              <input
                type="text"
                id="streetAddress"
                placeholder="Enter street address"
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input type="text" id="city" placeholder="Enter city" />
            </label>
          </div>
          <div>
            <label htmlFor="postalCode">
              Postal Code:
              <input
                type="text"
                id="postalCode"
                placeholder="Enter postal code"
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input type="text" id="state" placeholder="Enter state" />
            </label>
          </div>
          <div>
            <label htmlFor="workplace">
              Workplace:
              <input
                type="text"
                id="worklplace"
                placeholder="Enter workplace"
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone:
              <input type="text" id="phone" placeholder="Enter phone" />
            </label>
          </div> */}

          <button type="submit">Add employee</button>
          {/* <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter first name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="lastName">Last name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter last name"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="age">Age:</label>
                  </td>
                  <td>
                    <input type="number" id="age" placeholder="Enter age" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="workplace">Workplace:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="workplace"
                      placeholder="Enter workplace"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Email:</label>
                  </td>
                  <td>
                    <input type="text" id="email" placeholder="Enter email" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="phone">Phone number:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Add employee</button>
          </form> */}
        </form>
      </div>
    </div>
  );
};
