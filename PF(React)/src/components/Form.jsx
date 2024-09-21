import { useState } from "react";
import FormComponent from "./FormComponent";
import DataTable from "./DataTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [dataList, setDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedList = [...dataList];

    if (isEditing) {
      updatedList.splice(editIndex, 1, formData);
      setDataList(updatedList);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setDataList([...dataList, formData]);
    }

    setFormData({ name: "", address: "", email: "", phone: "" });
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setFormData(dataList[index]);
  };

  const handleDelete = (index) => {
    const updatedList = [...dataList];
    updatedList.splice(index, 1);
    setDataList(updatedList);
  };

  return (
    <div>
      <FormComponent
        onSubmit={handleSubmit}
        isEditing={isEditing}
        formData={formData}
        handleChange={handleChange}
      />
      <DataTable
        items={dataList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Form;
