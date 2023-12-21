import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./app/Card";
import Nav from "./app/Nav";
import { useState } from "react";

import { COUPONS } from "./app/Data";
import ModalWrapper from "./app/ModalWrapper";

export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [coupons, setCoupons] = useState(COUPONS);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState({});

  const onCardPressHandler = (coupon) => {
    setIsCopied(false);
    if (coupon) setSelectedCoupon(coupon);
    setIsModelVisible(!isModelVisible);
  };

  const searchHandler = (query) => {
    if (query != "") {
      const searchResult = COUPONS.filter(
        (coupon) =>
          coupon.title.toLowerCase().includes(query.toLowerCase()) ||
          coupon.discountCode.toLowerCase().includes(query.toLowerCase())
      );
      setCoupons(searchResult);
    } else {
      setCoupons(COUPONS);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Nav search={searchHandler} />
      <ScrollView style={styles.body}>
        {coupons.map((coupon) => (
          <Card
            key={coupon.id}
            coupon={coupon}
            onPressHandler={onCardPressHandler}
          />
        ))}
      </ScrollView>
      <ModalWrapper
        {...{
          isModelVisible,
          isCopied,
          setIsCopied,
          selectedCoupon,
          onCardPressHandler,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#b4ecb4",
    alignItems: "center",
    justifyContent: "center",
  },

  body: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
  },
});
