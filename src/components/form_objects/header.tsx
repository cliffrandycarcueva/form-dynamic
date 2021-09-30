import React from "react";
import Text from "../../object/objects";
import "./style.css";

interface Props {
  text: Text;
}

const Header: React.FC<Props> = (props) => {
  const { text } = props;
  return <h1 className="main">{text}</h1>;
};

export default Header;
