import React from "react";
import { View, Text, Button } from "react-native";

function Main({ navigation }) {
  return (
    <View>
      <Text>메인입니다!</Text>
      <Button title="go to info" onPress={() => navigation.navigate("Info")} />
    </View>
  );
}

export default Main;
