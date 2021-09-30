import React from "react";
import Field from "../../object/objects";
import "./fieldstyle.css";

interface Props {
  field: Field;
}

const InputField: React.FC<Props> = (props) => {
  const { field } = props;
  return (
    <div className="field_grid">
      <div className="div_style">{field.label.en}</div>
      <div className="div_style">
        <input type={field.input === "datepicker" ? "date" : field.input} />
      </div>
    </div>
  );
};

export default InputField;
