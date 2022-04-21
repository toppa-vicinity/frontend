import { StyleSheet, FlatList, Text, View } from "react-native";

import Colors from "../constants/Colors";
import ContactRow from "../components/ContactRow";
import { mockData, users } from "../mock/contact";
import { RootTabScreenProps } from "../types";

export default function Contacts({
  navigation,
}: RootTabScreenProps<"Contacts">) {
  return (
    <View>
      <View>
        <FlatList
          style={styles.container}
          data={users.sort((a, b) => a.name.localeCompare(b.name))}
          renderItem={({ item, index }) =>
            index === 9 ? (
              <View style={styles.totalFriends}>
                <Text style={{ color: "lightgray", fontSize: 18 }}>
                  {10 + " friends"}
                </Text>
              </View>
            ) : (
              <ContactRow user={item} />
            )
          }
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
    width: "100%",
    height: 50,
    color: "#E3E8EE",
    alignItems: "center",
  },
});
