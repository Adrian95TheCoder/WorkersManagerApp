import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";
import { useTranslation } from "react-i18next";

export const InputSearchBox = () => {
  const { inputValue, handleInputSearch } = useContext(EmployeeContext);
  const { t } = useTranslation();

  return (
    <div>
      <input
        className="EmployeeList__search"
        type="search"
        name="search"
        placeholder={t("searchEmployee")}
        value={inputValue}
        onChange={handleInputSearch}
      />
    </div>
  );
};
