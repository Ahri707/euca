import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./list_students_styles";

export default function StudentListScreen() {
  const router = useRouter();
  const getSearchParams = (require("expo-router") as any).useSearchParams as (() => Record<string, string | undefined>) | undefined;
  const { turma } = (getSearchParams ? getSearchParams() : {}) as { turma?: string };
  const turmaName = turma ?? "A1";

  const [search, setSearch] = useState("");

  const alunos = [
    "Ahriel Padia Zancanaro",
    "Eduardo Donadello"
  ];

  const filtered = alunos.filter(a => a.toLowerCase().includes(search.toLowerCase()));

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40, paddingTop: 12 }}>
      
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.push('/home/dashboard')}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <Ionicons name="notifications-outline" size={28} color="#7FF0FF" />
      </View>

    
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#aaa" style={{ marginLeft: 8 }} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar aluno ou turma"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <Ionicons name="close" size={16} color="#aaa" style={{ marginRight: 8 }} />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>Lista de alunos: Turma {turmaName}</Text>

     
      {filtered.map((aluno, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push(`/home/profile_student?aluno=${encodeURIComponent(aluno)}`)}
          activeOpacity={0.8}
        >
          <View
            style={[
              styles.studentBox,
              index % 2 === 0 ? styles.blueBox : styles.greenBox
            ]}
          >
            <Text style={styles.studentName}>{aluno}</Text>
          </View>
        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

