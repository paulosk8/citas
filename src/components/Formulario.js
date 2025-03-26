import { useState } from "react";
import { Modal, Text } from "react-native";
import React from "react";

export default function Formulario() {
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal animationType="fade" visible={modalVisible}>
      <Text>Desde la Modal</Text>
    </Modal>
  );
}
