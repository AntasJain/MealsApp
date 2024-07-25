import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((datapoint) => (
    <View key={datapoint} style={styles.listItem}>
      <Text style={styles.itemText}>{datapoint}</Text>
    </View>
  ));
}
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 24,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
