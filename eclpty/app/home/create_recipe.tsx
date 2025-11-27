import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./create_recipe_styles";
import SideMenu from "./side_menu";

type Props = {
  navigation: any;
};

export default function CreateRecipeScreen({ navigation }: Props) {
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [refeicao, setRefeicao] = useState("");
  const [buscaAluno, setBuscaAluno] = useState("");
  const [todosPodem, setTodosPodem] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setIsMenuOpen(true)}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="menu" size={32} color="#7FF0FF" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {/* abrir notificações (placeholder) */}}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <Ionicons name="notifications-outline" size={28} color="#7FF0FF" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Criar nova receita</Text>

      {/* Nome da receita */}
      <Text style={styles.label}>Nome da receita</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Digite o nome"
          placeholderTextColor="#bbb"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <Ionicons name="pencil" size={20} color="#ccc" />
      </View>

      {/* Lista de ingredientes */}
      <Text style={styles.label}>Lista de ingredientes</Text>
      <View style={styles.textAreaRow}>
        <TextInput
          placeholder="Digite os ingredientes"
          placeholderTextColor="#bbb"
          value={ingredientes}
          onChangeText={setIngredientes}
          style={styles.textArea}
          multiline
        />
        <Ionicons name="pencil" size={20} color="#ccc" />
      </View>

      {/* Qual refeição é? */}
      <Text style={styles.label}>Qual refeição é?</Text>
      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>
          {refeicao || "Selecionar"}
        </Text>
      </TouchableOpacity>

      {/* Pesquisar aluno específico */}
      <Text style={styles.label}>Pesquisar aluno específico para a receita</Text>
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Pesquisar"
          placeholderTextColor="#bbb"
          value={buscaAluno}
          onChangeText={setBuscaAluno}
          style={styles.searchInput}
        />
        <Ionicons name="search" size={22} color="#ccc" />
      </View>

      {/* Todos podem? */}
      <Text style={styles.label}>Todos podem come-lá?</Text>
      <TouchableOpacity
        style={[styles.toggleBtn, todosPodem && styles.toggleSelected]}
        onPress={() => setTodosPodem(!todosPodem)}
      >
        <Text style={styles.toggleText}>{todosPodem ? "Sim" : "Não"}</Text>
      </TouchableOpacity>

      {/* Botão Criar */}
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createBtnText}>Criar</Text>
      </TouchableOpacity>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </ScrollView>
  );
}

