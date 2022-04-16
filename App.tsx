import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Button, Image, StyleSheet, TextInput } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import Colors from "./constants/Colors";
import Login from "./screens/Login";
import { LOGIN_CREDENTIALS } from "./apis/user";

function App() {
  const isLoadingComplete = useCachedResources();

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  const [credential, setCredential] = useState("");
  const [appReady, setAppReady] = useState(false);

  const checkCredentials = async () => {
    const value = await AsyncStorage.getItem(LOGIN_CREDENTIALS);
    if (value !== null) {
      console.log(value);
      setCredential(value);
    }
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    if (!appReady) {
      return (
        <AppLoading
          startAsync={checkCredentials}
          onFinish={() => setAppReady(true)}
          onError={console.warn}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        {credential != "" ? <Main /> : <Login />}
      </ApolloProvider>
    );
  }
}

function Main() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
