import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  View,
  ViewStyle,
  Button,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

function RegisterName({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      cognome: "",
    },
  });

  const onSubmit = (data) => {
    navigation.navigate("RegisterSex");
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.bottoni}>
      <View>
        <Text style={styles.firstText}> Nome </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="nome"
        />
        {errors.nome && <Text> Nome richiesto </Text>}

        <Text style={styles.firstText}> Cognome </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="cognome"
        />
        {errors.cognome && <Text> Cognome richiesto </Text>}
        <View style={styles.submit}>
          <AntDesign name="right" size={24} onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  submit: {
    marginTop: "20%",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#ffebcd",
    borderWidth: 2,
    borderColor: "black",
    margin: "5%",
    marginTop: "1%",
    marginRight: "20%",
    marginHorizontal: "10%",
  },
  firstText: {
    marginHorizontal: "6%",
    padding: 10,
    fontSize: 15,
  },
  bottoni: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RegisterName;
