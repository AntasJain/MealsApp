import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";

export default function MealDetails({ route, navigation }) {
  const MEAL = MEALS.find((meal) => meal.id === route.params.id);
  function pressHandler() {
    console.log("Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: MEAL.title,
      headerRight: () => {
        return <IconButton onPress={pressHandler} icon="star" color="white" />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootView}>
      <Image source={{ uri: MEAL.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{MEAL.title}</Text>
      <View style={styles.description}>
        <Text style={styles.descriptionItem}>{MEAL.duration}m</Text>
        <Text style={styles.descriptionItem}>
          {MEAL.complexity.toUpperCase()}
        </Text>
        <Text style={styles.descriptionItem}>
          {MEAL.affordability.toUpperCase()}
        </Text>
      </View>
      <Subtitle>Ingredients</Subtitle>
      <List data={MEAL.ingredients} />

      <Subtitle>Steps</Subtitle>

      <List data={MEAL.steps} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  descriptionItem: {
    margin: 4,
    fontSize: 12,
    color: "white",
  },
  description: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rootView: {
    marginBottom: 16,
  },
});
