import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Modal from "react-native-modal";

import * as Clipboard from "expo-clipboard";

const ModalWrapper = ({
  isModelVisible,
  isCopied,
  setIsCopied,
  selectedCoupon,
  onCardPressHandler,
}) => {
  const copyText = () => {
    Clipboard.setStringAsync(selectedCoupon.discountCode);
    setIsCopied(true);
  };

  const modalCopyButtonStyle = isCopied
    ? { backgroundColor: "#b2e7a0" }
    : { backgroundColor: "#FAF9F6" };

  const modalCopyButtonIcon = isCopied
    ? require("../assets/success.png")
    : require("../assets/copy.png");

  return (
    <View>
      <Modal isVisible={isModelVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              display: "flex",
              flex: 0.3,
              alignContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={onCardPressHandler}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/close.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row", flex: 0.7 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginLeft: 30,
              }}
              source={{ uri: selectedCoupon.icon }}
            />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={styles.modalTitle}>{selectedCoupon.title}</Text>
              <TouchableOpacity
                onPress={copyText}
                style={{ ...styles.modalCopyButton, ...modalCopyButtonStyle }}
              >
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    marginRight: 10,
                    flexShrink: 1,
                  }}
                  source={modalCopyButtonIcon}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 4,
                  }}
                >
                  <Text>{selectedCoupon.discountCode}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 0.25,
    backgroundColor: "#FAF9F6",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
  },
  modalCloseButton: {
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  modalTitle: {
    fontSize: 20,
    marginLeft: 20,
  },
  modalDiscountCode: {
    fontSize: 20,
    margin: 20,
  },
  modalCopyButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    width: "auto",
    height: 40,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 3,
  },
});

export default ModalWrapper;
