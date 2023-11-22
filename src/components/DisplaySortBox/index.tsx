import { useTranslation } from "react-i18next";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
export const DisplaySortBox = () => {
  const {
    sortValue,
    handleSortDisplay,
    displayNumber,
    handleDisplay,
    curPage,
  } = useContext(EmployeeContext);
  const { t } = useTranslation();

  return (
    <div>
      <label htmlFor="sortValue">
        {t("sortParameters")}
        <select
          name="sortValue"
          id="sortValue"
          value={sortValue}
          onChange={handleSortDisplay}
        >
          {/* <option value="">Select sort type</option> */}
          <option value="_sort=id&_order=asc">{t("idAscending")}</option>
          <option value="_sort=id&_order=desc">{t("idDescending")}</option>
          <option value="_sort=firstName&_order=asc">
            {t("firstNameAscending")}
          </option>
          <option value="_sort=firstName&_order=desc">
            {t("firstNameDescending")}
          </option>
          <option value="_sort=lastName&_order=asc">
            {t("lastNameAscending")}
          </option>
          <option value="_sort=lastName&_order=desc">
            {t("lastNameDescending")}
          </option>
          <option value="_sort=salary&_order=asc">
            {t("salaryAscending")}
          </option>
          <option value="_sort=salary&_order=desc">
            {t("salaryDescending")}
          </option>
        </select>
      </label>
      <label htmlFor="displayNumber">
        {t("show")}
        <select
          name="displayNumber"
          id="displayNumber"
          value={displayNumber}
          onChange={handleDisplay}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </label>
    </div>
  );
};
