import { StyleSheet, Text, SafeAreaView, Pressable, Modal } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria ITUJ</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Modal animationType="slide" visible={modalVisible}>
        <Text>Desde el modal</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6028D9",
  },
  container: {
    backgroundColor: "#345sdf",
    flex: 1,
  },
  btnNuevaCita: {
    backgroundColor: "#6028D9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "900",
    textAlign: "center",
  },
});
