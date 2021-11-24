import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  // All functions
  var textInputValue = "<answer goes here>";
  const handlePress = () => console.log(textInputValue);
  const handleChangeText = () => console.log(textInputValue);
  return (
    <View style={styles.container}>
      <View style={{ height: "5%", backgroundColor: "#2C4E6C" }}></View>

      <View
        style={{ width: "100%", height: "30%", backgroundColor: "lightblue" }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Hello World!</Text>
        <Text style={{ fontSize: 20 }}>First React Native App</Text>
        <Text>
          This is a paragraph explaining what this app is all about. As you can
          see there are already many components including text, images and
          buttons
        </Text>
      </View>

      <View style={{ width: "100%", height: "30%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
          What would you like to get out of this course?
        </Text>
        <TextInput
          style={{ backgroundColor: "#e2e2e2", height: "50%", width: "70%" }}
          placeholder="Initial Text"
          multiline={true}
          onChangeText={handleChangeText}
        />
      </View>

      <View style={{ width: "100%", height: "30%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
          An emoji describing how you are feeling about the course:
        </Text>

        <Image
          style={{ width: 100, height: 100 }}
          source={require("./assets/confused-emoji-7.png")}
        />
      </View>
      <View>
        <Button title="Submit" onPress={handlePress} />
      </View>
      <Button title="Submit" onPress={handlePress} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
