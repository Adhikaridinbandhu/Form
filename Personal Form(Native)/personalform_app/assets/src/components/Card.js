import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Card = ({ data, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text>
        <Text style={styles.bold}>Name: </Text>
        {data.name}
      </Text>
      <Text>
        <Text style={styles.bold}>Address: </Text>
        {data.address}
      </Text>
      <Text>
        <Text style={styles.bold}>Email: </Text>
        {data.email}
      </Text>
      <Text>
        <Text style={styles.bold}>Phone: </Text>
        {data.phone}
      </Text>
      <View style={styles.buttonGroup}>
        <Button title="Edit" onPress={onEdit} />
        <Button title="Delete" onPress={onDelete} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "hashtag#ccc",
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default Card;
