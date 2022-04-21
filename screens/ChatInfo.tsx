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
import useColorScheme from "../hooks/useColorScheme";

export default function ChatInfo({
  route,
}: {
  route: RouteProp<RootStackParamList, "ChatScreen">;
}) {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles(scheme).container}>
      <View style={styles(scheme).infoScreen}>
        <Image
          source={{ uri: route.params?.user.imageURL }}
          style={styles(scheme).avatar}
        />
        <View
          style={{
            marginLeft: 20,
            justifyContent: "space-between",
            height: 60,
          }}
        >
          <Title style={styles(scheme).title}>{route.params?.user.name}</Title>
          <Caption style={styles(scheme).caption}>
            ID: {route.params?.user.id}
          </Caption>
        </View>
      </View>

      <View style={styles(scheme).menuButton}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles(scheme).menuItem}>
            <Ionicons
              name="ios-notifications-off-outline"
              size={20}
              color={Colors[scheme].tabIconDefault}
            />
            <Text style={styles(scheme).menuText}>Mute</Text>
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
          <View style={styles(scheme).menuItem}>
            <Ionicons
              name="chatbubble-outline"
              size={20}
              color={Colors[scheme].tabIconDefault}
            />
            <Text style={styles(scheme).menuText}>Message</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles(scheme).menuItem}>
            <MaterialCommunityIcons
              name="history"
              size={22}
              color={Colors[scheme].tabIconDefault}
            />
            <Text style={styles(scheme).menuText}>Chat History</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles(scheme).menuItem}>
            <MaterialCommunityIcons
              name="block-helper"
              size={18}
              color="orange"
            />
            <Text style={styles(scheme).menuText}>Block</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles(scheme).menuItem}>
            <AntDesign name="delete" size={18} color="red" />
            <Text style={styles(scheme).menuText}>Delete</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Colors[scheme].background,
    },
    infoScreen: {
      paddingHorizontal: 30,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 40,
    },
    title: {
      color: Colors[scheme].text,
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
      color: Colors[scheme].text,
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
      color: Colors[scheme].text,
      marginLeft: 20,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 26,
    },
  });
