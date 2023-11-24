import { Link, useNavigate } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
type detailsProps = {
  id: number;
};

export const DetailsButton = ({ id }: detailsProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const details = (employee_id: number) => {
    navigate(`/employees/${employee_id}`);
  };
  return (
    <>
      <button onClick={() => details(id)}>{t("details")}</button>
    </>
  );
};
