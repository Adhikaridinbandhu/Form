import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await AsyncStorage.getItem("submittedData");
      if (data) {
        setSubmittedData(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem("submittedData", JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (Object.values(formData).some((field) => !field)) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    let updatedData;
    if (editIndex === -1) {
      updatedData = [...submittedData, formData];
    } else {
      updatedData = submittedData.map((item, index) =>
        index === editIndex ? formData : item
      );
      setEditIndex(-1);
    }

    setSubmittedData(updatedData);
    saveData(updatedData);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", address: "", email: "", phone: "" });
  };

  const editHandler = (index) => {
    setFormData(submittedData[index]);
    setEditIndex(index);
  };

  const deleteHandler = (index) => {
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
    saveData(updatedData);
  };

  return (
    <View>
      <Text style={styles.title}>Personal Details</Text>
      {["name", "address", "email", "phone"].map((field) => (
        <View key={field} style={styles.inputContainer}>
          <Text>{field.charAt(0).toUpperCase() + field.slice(1)}:</Text>
          <TextInput
            style={styles.input}
            value={formData[field]}
            onChangeText={(value) => handleChange(field, value)}
          />
        </View>
      ))}
      <Button
        title={editIndex === -1 ? "Submit" : "Update"}
        onPress={handleSubmit}
      />
      <FlatList
        data={submittedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card
            data={item}
            onEdit={() => editHandler(index)}
            onDelete={() => deleteHandler(index)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "hashtag#ccc",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
});

export default MyForm;
