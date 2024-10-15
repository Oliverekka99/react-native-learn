import { Text, View, StyleSheet } from "react-native";
import { theme } from "../../theme";
// import { useRouter } from "expo-router";

export default function CounterScreen() {
  //   const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => router.navigate("/idea")}> */}
      {/* <Text
          style={{
            textAlign: "center",
            marginBottom: 18,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Go to /idea
        </Text> */}
      {/* </TouchableOpacity> */}
      <Text style={styles.text}>Counter Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
