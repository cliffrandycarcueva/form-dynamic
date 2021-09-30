import React from "react";
import Text from "../../object/objects";
import "./style.css";

interface Props {
  text: Text;
}

const Paragraph: React.FC<Props> = (props) => {
  const { text } = props;
  return (
    <div className="main">
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
