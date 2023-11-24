import { useTranslation } from "react-i18next";
import { EmployeeContext } from "../../components/context/EmployeeContext";

import "./AddEmployee.scss";
import { ChangeEvent, useContext } from "react";

export const AddEmployee = () => {
  const {
    newEmployeeInputValue,
    handleInputValue,
    handleNewEmployee,
    phoneError,
  } = useContext(EmployeeContext);
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
    street,
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
          <p>{t("UseaPermanentAddressWhereYouCanReceiveMail")}</p>
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
                      placeholder={t("enterFirstName")}
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
                      placeholder={t("enterLastName")}
                      value={lastName}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="salary">{t("salary")}</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="salary"
                      name="salary"
                      placeholder={t("enterSalary")}
                      value={salary}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="gender">{t("gender")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="gender"
                      name="gender"
                      placeholder={t("enterGender")}
                      value={gender}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="email">Email</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder={t("enterEmail")}
                      value={email}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="phone">{t("phone")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder={t("enterPhone")}
                      value={phone}
                      onChange={handleInputValue}
                    />
                  </td>
                  <td>
                    <p>{phoneError}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="birthDate">{t("birthDate")}</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      placeholder={t("enterBirthDate")}
                      value={birthDate}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="workplace">{t("workplace")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="workplace"
                      name="workplace"
                      placeholder={t("enterWorkplace")}
                      value={workplace}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="street">{t("street")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      placeholder={t("enterStreet")}
                      value={street}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="city">{t("city")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder={t("enterCity")}
                      value={city}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="postalCode">{t("postalCode")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder={t("enterPostalCode")}
                      value={postalCode}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="state">{t("state")}</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder={t("enterState")}
                      value={state}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="startWork">{t("startWork")}</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="startWork"
                      name="startWork"
                      placeholder={t("enterStartWork")}
                      value={startWork}
                      onChange={handleInputValue}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button className="AddEmployee__addButton" type="submit">
            {t("addEmployee")}
          </button>
        </form>
      </div>
    </div>
  );
};
