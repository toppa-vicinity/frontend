import { FlatList, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import ConnectRow from "../components/ConnectRow";
import { connectMockData, mockData } from "../mock/contact";
import { RootTabScreenProps } from "../types";

export default function Connect({ navigation }: RootTabScreenProps<"Connect">) {
  return (
    <View>
      <View>
        <FlatList
          style={styles.container}
          data={connectMockData.slice(6)}
          renderItem={({ item }) => <ConnectRow {...item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  totalFriends: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    // color: "#E3E8EE",
    // fontSize: 12,
    // textAlign: "center"
  },
});
