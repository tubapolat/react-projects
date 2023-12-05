import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";

export default function App() {
  return (
    <WelcomeScreen />
    //<ViewImageScreen />
    /*<SafeAreaView style={styles.container}>
      <Text>Start Tubik!</Text>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "Yes" },
            { text: "No" },
          ])
        }
      />
    </SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
