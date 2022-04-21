import { RouteProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { TouchableRipple, Title, Caption } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";

export default function ChatInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, "ChatScreen">;
}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoScreen}>
        <Image
          source={{ uri: route.params?.user.imageURL }}
          style={styles.avatar}
        />
        <View
          style={{
            marginLeft: 20,
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <Title style={styles.title}>{route.params?.user.name}</Title>
          <Caption style={styles.caption}>ID: {route.params?.user.id}</Caption>
        </View>
      </View>

      <View style={styles.menuButton}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons
              name="ios-notifications-off-outline"
              size={20}
              color="white"
            />
            <Text style={styles.menuText}>Mute</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            navigation.navigate("ChatScreen", {
              id: route.params!.user.id,
              user: route.params!.user,
            });
          }}
        >
          <View style={styles.menuItem}>
            <Ionicons name="chatbubble-outline" size={20} color="white" />
            <Text style={styles.menuText}>Message</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="history" size={22} color="white" />
            <Text style={styles.menuText}>Chat History</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="block-helper"
              size={18}
              color="orange"
            />
            <Text style={styles.menuText}>Block</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <AntDesign name="delete" size={20} color="red" />
            <Text style={styles.menuText}>Delete</Text>
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
    lineHeight: 20,
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
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  menuText: {
    color: "#E3E8EE",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
