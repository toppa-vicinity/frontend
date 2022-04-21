import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button, Image, StyleSheet, TextInput } from "react-native";

import Colors from "../constants/Colors";
import { useMutation } from "@apollo/client";
import { LOGIN_CREDENTIALS, USER_LOGIN } from "../apis/user";
import { GlobalContext } from "../Context";
import useColorScheme from "../hooks/useColorScheme";

function Login() {
  const { setCredentials } = useContext(GlobalContext);

  const [isLogin, setisLogin] = useState(true);
  const [credential] = useState({
    username: "admin",
    password: "admin",
    email: null,
  });
  const [loginMutation, { error, data, loading }] = useMutation(USER_LOGIN);

  const login = async () => {
    loginMutation({
      variables: { options: credential },
    });
    console.log(data, credential);
    if (data && data.login && data.login.token) {
      try {
        await AsyncStorage.setItem(
          LOGIN_CREDENTIALS,
          JSON.stringify(data.login.token),
          () => {
            console.log("success");
          }
        );
        setCredentials && setCredentials(credential.username);
      } catch (error) {
        console.log(error);
      }
    } else {
      // login error
    }
  };

  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles(scheme).background}>
      <Image
        style={styles(scheme).logo}
        source={require("../assets/images/Talk.png")}
      />
      {!isLogin && (
        <TextInput style={styles(scheme).form} placeholder="Username" />
      )}
      <TextInput style={styles(scheme).form} placeholder="Email" />
      <TextInput
        style={styles(scheme).form}
        secureTextEntry={true}
        placeholder="Password"
      />
      {isLogin ? (
        <View style={styles(scheme).button}>
          <Button onPress={login} title="Login" />
        </View>
      ) : (
        <View style={styles(scheme).button}>
          <Button onPress={login} title="Register" />
        </View>
      )}
      <View style={styles(scheme).button}>
        <Button
          onPress={() => {
            setisLogin(!isLogin);
          }}
          title={
            isLogin
              ? "Don't have an account? Click to register"
              : "Already have an account? Click to login"
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    background: {
      backgroundColor: Colors[scheme].background,
      height: "100%",
      alignItems: "center",
      paddingTop: 200,
    },
    logo: {
      width: 70,
      height: 70,
      borderRadius: 10,
    },
    form: {
      width: "70%",
      height: 40,
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 30,
      padding: 10,
    },
    button: {
      marginTop: 30,
    },
  });

export default Login;
