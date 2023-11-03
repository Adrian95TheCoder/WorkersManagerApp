import { EmployeeContext } from "../../components/context/EmployeeContext";

import "./AddEmployee.scss";
import { useContext } from "react";

export const AddEmployee = () => {
  const { newEmployeeInputValue, handleInputValue, handleNewEmployee } =
    useContext(EmployeeContext);
  const { id, firstName, lastName, workplace, age } = newEmployeeInputValue;
  return (
    <div className="addFormMain">
      <div className="addForm_box">
        <form onSubmit={(event) => handleNewEmployee(event, id)}>
          <h2>Persolnal Information</h2>
          <p>Use a permanent address where you can receive mail.</p>
          <div className="labelBox">
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
                      name="firstName"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={handleInputValue}
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
                      name="lastName"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="age">Age:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      placeholder="Enter age"
                      value={age}
                      onChange={handleInputValue}
                    />
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
                      name="workplace"
                      placeholder="Enter workplace"
                      value={workplace}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button type="submit">Add employee</button>
        </form>
      </div>
    </div>
  );
};
