import React, { useState, useEffect } from "react";
import { getData } from "../services/data";
import Header from "../components/form_objects/header";
import Paragraph from "../components/form_objects/paragraph";
import InputField from "../components/form_objects/field";
import "./form_objects/style.css";

const FormDynamic: React.FC = () => {
  const [data, setData] = useState<Array<any>>([]); //used hook state anticipated api call

  const renderType = (item: any) => {
    switch (item.type) {
      case "header": {
        return <Header text={item.text.en} />;
      }
      case "paragraph": {
        return <Paragraph text={item.text.en} />;
      }
      case "field": {
        return <InputField field={item} />;
      }
    }
  };
  const renderForm = () =>
    data.map((item, i) => {
      return <div key={i}>{renderType(item)}</div>;
    });

  useEffect(() => {
    const formData = getData();
    if (formData) {
      setData(formData.data.sort((a, b) => (a.order > b.order && 1) || -1));
    }
  }, []);

  return <div className="backdrop">{renderForm()}</div>;
};

export default FormDynamic;
