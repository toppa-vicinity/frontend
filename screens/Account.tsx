import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { TouchableRipple, Title, Caption } from "react-native-paper";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import EditScreenInfo from "../components/EditScreenInfo";
// import { Text, View } from "../components/Themed";
// import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalContext } from "../Context";
import { meUser } from "../mock/chat";

export default function Account({
  route,
}: {
  route: RouteProp<RootStackParamList, "ChatScreen">;
}) {
  const { setCredentials } = useContext(GlobalContext);
  const logout = () => {
    if (setCredentials) {
      AsyncStorage.clear();
      setCredentials("");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoScreen}>
        <Image source={{ uri: meUser.imageURL }} style={styles.avatar} />
        <View style={{ marginLeft: 20 }}>
          <Title style={styles.title}>{meUser.name}</Title>
          <Caption style={styles.caption}>ID: {meUser.id}</Caption>
        </View>
      </View>

      <View style={styles.menuButton}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Name</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Vicinity ID</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>My QR Code</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Password</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={logout}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Logout</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.dark.background,
  },
  infoScreen: {
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color: "#E3E8EE",
    fontSize: 20,
    fontWeight: "600",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  caption: {
    color: "#E3E8EE",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  menuButton: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  menuText: {
    color: "#FFFFFF",
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 26,
  },
});
