import { StyleSheet, FlatList, Text, View } from "react-native";

import Colors from "../constants/Colors";
import ContactRow from "../components/ContactRow";
import { mockData, users } from "../mock/contact";
import { RootTabScreenProps } from "../types";
import useColorScheme from "../hooks/useColorScheme";

export default function Contacts({
  navigation,
}: RootTabScreenProps<"Contacts">) {
  const scheme = useColorScheme();
  return (
    <View>
      <View>
        <FlatList
          style={styles(scheme).container}
          data={users.sort((a, b) => a.name.localeCompare(b.name))}
          renderItem={({ item, index }) =>
            index === 9 ? (
              <View style={styles(scheme).totalFriends}>
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

const styles = (scheme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Colors[scheme].background,
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
