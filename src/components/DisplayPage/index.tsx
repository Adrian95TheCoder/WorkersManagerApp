import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const DisplayPage = () => {
  const { curPage, maxPage, setCurPage, nextPage, previousPage } =
    useContext(EmployeeContext);
  const [pageValue, setPageValue] = useState(1);
  const { t } = useTranslation();

  const handleCurPageInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (
      0 <= curPage &&
      curPage <= maxPage &&
      parseInt(value) >= 1 &&
      parseInt(value) <= maxPage
    )
      setPageValue(parseInt(value));
  };
  const handlePageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurPage(pageValue);
  };

  return (
    <div className="displayPage_form">
      <form onSubmit={handlePageSubmit}>
        <div>
          <label htmlFor="pageValue">
            {t("displayPage")}:{" "}
            <input
              className="input_curPage"
              id="pageValue"
              type="number"
              name="pageValue"
              value={pageValue}
              onChange={handleCurPageInput}
            />
            {""}
            {""} {t("of")}
            {""} {maxPage}
          </label>
          {""} <button type="submit">{t("go")}</button>
        </div>
      </form>
    </div>
  );
};
