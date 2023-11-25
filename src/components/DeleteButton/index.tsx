import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import "./DeleteButton.scss";
import { useTranslation } from "react-i18next";

type deleteProps = {
  id: number;
};
export const DeleteButton = ({ id }: deleteProps) => {
  const { setAllowDelete } = useContext(EmployeeContext);
  const { t } = useTranslation();

  return (
    <>
      <button
        className="deleteButton__deleteEmployee"
        onClick={() => setAllowDelete(true)}
      >
        {t("deleteEmployee")}
      </button>
    </>
  );
};
