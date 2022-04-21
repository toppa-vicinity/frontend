/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { StatusBar } from "expo-status-bar";
import { Platform, Text } from "react-native";
import {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Chat from "../screens/Chat";
import Connect from "../screens/Connect";
import Contacts from "../screens/Contacts";
import Account from "../screens/Account";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { ChatScreen } from "../screens/ChatScreen";
import ChatInfo from "../screens/ChatInfo";
import Login from "../screens/Login";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
      <StatusBar
        style={
          Platform.OS === "ios"
            ? colorScheme === "dark"
              ? "light"
              : "dark"
            : "auto"
        }
      />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors[colorScheme].tint },
        headerTintColor: Colors[colorScheme].text,
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ title: "Vicinity", headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ navigation, route }) => ({
          title: route.params?.user.name,
          headerBackButtonMenuEnabled: false,
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("ChatInfo", { user: route.params?.user })
              }
            >
              <Entypo
                name="dots-three-horizontal"
                size={24}
                color={Colors[colorScheme].text}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="ChatInfo"
        component={ChatInfo}
        options={({ navigation, route }) => ({
          title: route.params?.user.name,
          headerBackTitle: "",
        })}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackButtonMenuEnabled: false,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
      }}
    >
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }: RootTabScreenProps<"Chat">) => ({
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: Colors[colorScheme].tint },
          headerTintColor: Colors[colorScheme].text,
        })}
      />
      <BottomTab.Screen
        name="Connect"
        component={Connect}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: Colors[colorScheme].tint },
          headerTintColor: Colors[colorScheme].text,
        }}
      />
      <BottomTab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: Colors[colorScheme].tint },
          headerTintColor: Colors[colorScheme].text,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
          headerStyle: { backgroundColor: Colors[colorScheme].tint },
          headerTintColor: Colors[colorScheme].text,
        }}
      />
    </BottomTab.Navigator>
  );
}
