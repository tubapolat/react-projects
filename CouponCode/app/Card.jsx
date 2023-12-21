import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Card({ coupon, onPressHandler }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPressHandler(coupon)}>
        <Image
          style={{ width: 80, height: 80, marginTop: 10, marginLeft: 10 }}
          source={{ uri: coupon.icon }}
        />
        <View style={styles.brand}>
          <Text style={{ fontSize: 22, fontWeight: 400 }}>{coupon.title}</Text>
        </View>
        <View style={styles.sale}>
          <Text style={{ fontSize: 10 }}>{`Ends: ${coupon.expiresAt}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FAF9F6",
    height: 120,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 10,
  },
  brand: {
    alignItems: "center",
    marginTop: -60,
  },
  sale: {
    alignItems: "flex-end",
    marginRight: 20,
    marginTop: 40,
  },
});
