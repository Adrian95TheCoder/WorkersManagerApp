import { useTranslation } from "react-i18next";
import { EmployeeContext } from "../../components/context/EmployeeContext";

import "./AddEmployee.scss";
import { useContext } from "react";

export const AddEmployee = () => {
  const { newEmployeeInputValue, handleInputValue, handleNewEmployee } =
    useContext(EmployeeContext);
  const { t } = useTranslation();

  const {
    id,
    firstName,
    lastName,
    workplace,
    salary,
    gender,
    email,
    phone,
    birthDate,
    address,
    city,
    postalCode,
    state,
    startWork,
  } = newEmployeeInputValue;
  return (
    <div className="addFormMain">
      <div className="addForm_box">
        <form onSubmit={(event) => handleNewEmployee(event, id)}>
          <h2>{t("personalInformation")}</h2>
          <p>Use a permanent address where you can receive mail.</p>
          <div className="labelBox">
            <table>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="name">{t("firstName")}:</label>
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
                    <label htmlFor="lastName">{t("lastName")}:</label>
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
                    <label htmlFor="salary">Salary:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      placeholder="Enter salary"
                      value={salary}
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
                <tr>
                  {/* new  */}
                  <td>
                    <label htmlFor="gender">Gender:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      placeholder="Enter gender"
                      value={gender}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Email:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="phone">Phone:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone"
                      value={phone}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="birthDate">Birth date:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="birthDate"
                      name="birthDate"
                      placeholder="Enter birth date"
                      value={birthDate}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="address">Address:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter address"
                      value={address}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="city">City:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Enter city"
                      value={city}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="postalCode">Postal code:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Enter postal code"
                      value={postalCode}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="state">State:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Enter state"
                      value={state}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="startWork">Start work:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="startWork"
                      name="startWork"
                      placeholder="Enter start work"
                      value={startWork}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="AddEmployee__addButton" type="submit">
            Add employee
          </button>
        </form>
      </div>
    </div>
  );
};
