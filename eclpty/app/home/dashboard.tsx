import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./dashboard_styles";
import SideMenu from "./side_menu";

export default function HomeScreen() {
  const router = useRouter();
  const today = new Date();
  const weekNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return { num: String(d.getDate()).padStart(2, "0"), name: weekNames[d.getDay()] };
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setIsMenuOpen(true)}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="menu" size={32} color="#B7FF5A" />
        </TouchableOpacity>

        <Text style={styles.greeting}>Olá, {"{nome do usuário}"} ;)</Text>

        <TouchableOpacity
          onPress={() => Alert.alert('Notificações', 'Abrir notificações')}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="notifications-outline" size={28} color="#B7FF5A" />
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Image
          source={require("../../assets/images/koala.png")}
          style={styles.searchImage}
        />
        <Ionicons name="search" size={18} color="#aaa" />
        <TextInput
          placeholder="Pesquisar aluno ou turma"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Ionicons name="close" size={16} color="#aaa" style={{ marginRight: 8 }} />
      </View>

      {/* Days buttons (horizontal scroll, 7 days) */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daysRow}
      >
        {days.map((d, idx) => (
          <TouchableOpacity key={idx} style={styles.dayBox}>
            <Text style={styles.dayNumber}>{d.num}</Text>
            <Text style={styles.dayText}>{d.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.cardapioTitle}>Cardápio de hoje</Text>

      {/* Cardápio box */}
      <View style={styles.menuBox}>
        <Text style={styles.sectionTitle}>Café da manhã:</Text>
        <Text style={styles.item}>• Leite com cacau</Text>
        <Text style={styles.item}>• Pão integral com queijo branco</Text>
        <Text style={styles.item}>• Fruta: banana</Text>

        <Text style={[styles.sectionTitle, { marginTop: 12 }]}>Almoço:</Text>
        <Text style={styles.item}>• Arroz, feijão</Text>
        <Text style={styles.item}>• Frango assado</Text>
      </View>

      <TouchableOpacity
        style={styles.cardapioBtn}
        onPress={() => Alert.alert('Cardápio', 'Abrindo cardápio completo')}
        hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
      >
        <Text style={styles.smallHint}>Aperte aqui para acessar o cardápio completo</Text>
      </TouchableOpacity>

      {/* Turmas */}
      <Text style={styles.turmasTitle}>Turmas</Text>

      <View style={styles.turmasGrid}>
        {["Turma A1", "Turma A2", "Turma B2", "Turma B3"].map((t, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.turmaBtn}
            onPress={() => router.push(`/home/list_students?turma=${encodeURIComponent(t)}`)}
          >
            <Ionicons name="people-outline" size={22} color="#fff" />
            <Text style={styles.turmaText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </ScrollView>
  );
}

