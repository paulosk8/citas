import { useState } from "react";
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";

export default function Formulario({ modalVisible }) {
  const [paciente, setPaciente] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");
  /* const [fecha, setFecha] = useState(new Date()); */

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}> Cita</Text>
          </Text>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del paciente"
              placeholderTextColor="#666"
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del propietario"
              placeholderTextColor="#666"
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email propietario"
              placeholderTextColor="#666"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Teléfono propietario"
              placeholderTextColor="#666"
              keyboardType="phone-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Síntomas del paciente"
              placeholderTextColor="#666"
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha de ingreso</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 20,
    textAlign: "center",
    color: "#FFF",
  },
  tituloBold: {
    fontWeight: "900",
    color: "#FFF",
  },
  contenido: {
    flex: 1,
    backgroundColor: "#6D28D9",
  },
  campo: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  label: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  sintomasInput: {
    height: 100,
  },
});
