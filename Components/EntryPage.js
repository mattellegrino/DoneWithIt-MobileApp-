import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  View,
  Button,
  SafeAreaView,
} from "react-native";
import Prompt from "react-native-prompt-crossplatform";

function EntryPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight>
        <View style={styles.button}>
          <Text style={styles.firstText}> Accedi </Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text> O </Text>
      </View>
      <TouchableHighlight>
        <View style={{ ...styles.button, backgroundColor: "transparent" }}>
          <Text
            onPress={() => navigation.navigate("RegisterName")}
            style={styles.firstText}
          >
            Registrati
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#ffebcd",
    borderRadius: 20,
    marginBottom: "20%",
    marginTop: "20%",
  },
  firstText: {
    padding: 10,
    fontSize: 20,
  },
});

export default EntryPage;
