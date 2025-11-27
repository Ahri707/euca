import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EditRecipe() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
          <Ionicons name="menu" size={26} color="#C8FF70" />
        </TouchableOpacity>

        <Text style={styles.title}>Editar receitas</Text>

        <TouchableOpacity onPress={() => {}} style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color="#C8FF70" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>Nenhuma receita criada</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2C38",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  iconBtn: {
    padding: 6,
  },
  title: {
    color: "#C8FF70",
    fontSize: 18,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "#D1D5DB",
    fontSize: 16,
  },
});