import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";

import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export interface User {
  id: string;
  name: string;
  imageURL: string;
}

export interface ConnectRowProp {
  id: string;
  user: User;
  timeSpent: string;
}

export default function ContactRow(props: ConnectRowProp) {
  const { user, id, timeSpent } = props;
  const _onPressButton = () => {
    navigaton.navigate("ChatInfo", { user });
  };
  const navigaton = useNavigation();
  const [addIconColor, setAddIconColor] = useState(Colors.dark.tabIconDefault);
  const [added, setAdded] = useState(false);

  return (
    <TouchableHighlight onPress={_onPressButton} underlayColor="lightgrey">
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{ uri: user.imageURL }} style={styles.avatar} />
          <View style={styles.rightContainer}>
            <View style={styles.topContainer}>
              <Text style={styles.username}>{user.name}</Text>
            </View>
            <View style={styles.rightrightContainer}>
              <Text style={styles.time}>{timeSpent}</Text>
            </View>
          </View>
        </View>
        {added ? (
          <AntDesign
            name="checkcircleo"
            size={24}
            color={Colors.dark.tabIconSelected}
          />
        ) : (
          <AntDesign
            name="adduser"
            size={24}
            color={addIconColor}
            onPress={() => {
              setAddIconColor(Colors.dark.tabIconSelected);
              Alert.alert("Send Friend Request?", "", [
                {
                  text: "OK",
                  onPress: () => {
                    setAdded(true);
                  },
                },
                {
                  text: "Cancel",
                  onPress: () => {
                    setAddIconColor(Colors.dark.tabIconDefault);
                  },
                },
              ]);
            }}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    width: "93%",
    margin: 10,
    marginTop: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
  },
  rightContainer: {
    justifyContent: "space-between",
    marginLeft: 12,
  },
  rightrightContainer: {
    justifyContent: "space-between",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    color: "#E3E8EE",
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    color: "#E3E8EE",
    fontSize: 14,
    fontWeight: "normal",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});