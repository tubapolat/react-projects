import React from "react";
import { StyleSheet, TextInput, Image, View } from "react-native";

import { useState } from "react/cjs/react.development";

export default function Nav({ search }) {
  const [query, setQuery] = useState("");
  const onChangeSearch = (typedQuery) => {
    setQuery(typedQuery);
    search(typedQuery);
  };

  return (
    <View style={styles.navcontainer}>
      <Image style={styles.icon} source={require("../assets/cc.png")} />
      <TextInput
        placeholder="Find Coupon"
        onChangeText={onChangeSearch}
        value={query}
        style={styles.searchInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    margin: 20,
    width: 40,
    height: 40,
  },
  navcontainer: {
    height: 60,
    backgroundColor: "#b2e7a0",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  searchInput: {
    backgroundColor: "#FAF9F6",
    alignItems: "flex-end",
    flex: 1,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
  },
});
