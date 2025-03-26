import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import Formulario from "./src/components/Formulario";

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria ITUJ</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario />
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
    backgroundColor: "#f3f4f6",
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

{
  /* <button onclick="descargarCitas()">Descargar citas</button>

<Button onClick={descargarCitas()}>Descargar citas</Button> */
}
