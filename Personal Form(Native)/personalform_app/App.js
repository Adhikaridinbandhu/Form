import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import MyForm from "./assets/src/components/Form";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <MyForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hashtag#fff",
  },
  scrollContainer: {
    padding: 20,
  },
});

export default App;
