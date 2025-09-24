import { Ionicons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./LoginScreen.styles";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá!</Text>
      <Text style={styles.subtitle}>Bem vindo</Text>
      <Text style={styles.waitingText}>Estamos esperando por você!</Text>

      {/* Campo Email */}
      <TextInput
        style={styles.input}
        placeholder="Username, Email or Phone Number"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      {/* Campo Senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? "eye-off" : "eye"} 
            size={22} 
            color="#aaa" 
          />
        </TouchableOpacity>
      </View>

      {/* Lembre-se e Esqueceu */}
      <View style={styles.row}>
        <View style={styles.checkboxRow}>
          <CheckBox
            value={remember}
            onValueChange={setRemember}
            tintColors={{ true: "#b3ff33", false: "#aaa" }}
          />
          <Text style={styles.checkboxText}>Lembre-se de mim</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Criar conta */}
      <Text style={styles.footerText}>
        Ainda não tem uma conta?{" "}
        <Text style={styles.createText}>Crie uma</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;


