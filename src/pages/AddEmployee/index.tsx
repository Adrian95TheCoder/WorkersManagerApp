import { EmployeeContext } from "../../components/context/EmployeeContext";

import "./AddEmployee.scss";
import { useContext } from "react";

export const AddEmployee = () => {
  const {
    newFirstName,
    newLastName,
    newWorkplace,
    newAge,

    handleSubmitEmployee,
    handleLastName,
    handleFirstName,
    handleWorkplace,
    handleAge,
  } = useContext(EmployeeContext);

  return (
    <div className="addFormMain">
      <div className="addForm_box">
        <form onSubmit={handleSubmitEmployee}>
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
                      placeholder="Enter first name"
                      value={newFirstName}
                      onChange={handleFirstName}
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
                      value={newLastName}
                      onChange={handleLastName}
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
                      placeholder="Enter age"
                      value={newAge}
                      onChange={handleAge}
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
                      placeholder="Enter workplace"
                      value={newWorkplace}
                      onChange={handleWorkplace}
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
