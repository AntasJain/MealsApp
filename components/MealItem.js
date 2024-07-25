import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  title,
  imageURL,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function mealDetailsHandler() {
    navigation.navigate("MealDetails", {
      title: title,
      id: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={mealDetailsHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageURL }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionItem}>{duration}m</Text>
            <Text style={styles.descriptionItem}>
              {complexity.toUpperCase()}
            </Text>
            <Text style={styles.descriptionItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
  description: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionItem: {
    margin: 4,
    fontSize: 12,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#001000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
